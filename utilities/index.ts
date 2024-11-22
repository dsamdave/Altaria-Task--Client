import axios from "axios";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
dayjs.extend(isToday);
dayjs.extend(isYesterday);
export const capitalizeEachWord = (str?: string): string =>{
    if (typeof str !== 'string') {
      return '';
    }
  
    return str
      .split(' ')
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
  }


  export const getCityFromCoordinates = async (latitude: number | null, longitude: number | null) => {
    try {
      if(!latitude && !longitude){
        return null
      }

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
  
      if (response.data && response.data.address) {
        const city = response.data.address.city || response.data.address.town || response.data.address.village;
        
        if (city) {
          return city; 
        } else {
          return null;
        }
      }
    } catch (error) {
      console.error("Error getting city from coordinates", error);
      return null;
    }
  };


  export const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pages = [];
    const maxPagesToShow = 5;
    const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;

    let startPage = Math.max(1, currentPage - maxPagesBeforeCurrent);
    let endPage = Math.min(totalPages, currentPage + maxPagesAfterCurrent);

    if (startPage > 1) pages.push(1); // Always show the first page
    if (startPage > 2) pages.push('...'); // Ellipsis before the first page set

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push('...'); // Ellipsis after the last page set
    if (endPage < totalPages) pages.push(totalPages); // Always show the last page

    return pages;
  };


  export const formatTime = (date: string): string => {
    return dayjs(date).format("hh:mm A"); // e.g., 10:18 AM
  };

  export   const formatDateLabel = (date: dayjs.Dayjs): string => {
    if (dayjs(date).isToday()) return "Today";
    if (dayjs(date).isYesterday()) return "Yesterday";
    return dayjs(date).format("MMMM D, YYYY"); // 
  };


  export const generateTimeSlots = (start: number, end: number) => {
    const timeSlots = [];
    let currentTime = dayjs().hour(start).minute(0);
    const endTime = dayjs().hour(end).minute(0);
  
    while (currentTime.isBefore(endTime)) {
      timeSlots.push(currentTime.format('hh:mm A'));
      currentTime = currentTime.add(15, 'minute');
    }
    return timeSlots;
  };

  export const getGreeting = () => {
    const currentHour = new Date().getHours();
  
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };


  export const getRelativeTime = (isoDate: string): string => {
    const now = new Date();
    const past = new Date(isoDate);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds}s ago`;
    }
  
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes}min${diffInMinutes === 1 ? '' : 's'} ago`;
    }
  
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}h${diffInHours === 1 ? '' : 's'} ago`;
    }
  
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays}day${diffInDays === 1 ? '' : 's'} ago`;
    }
  
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks}week${diffInWeeks === 1 ? '' : 's'} ago`;
    }
  
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths}month${diffInMonths === 1 ? '' : 's'} ago`;
    }
  
    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears}year${diffInYears === 1 ? '' : 's'} ago`;
  };


  export const formatDateWithDay = (date: string | Date | null | undefined): string => {
    if (!date) return ''; 
  
    const parsedDate = new Date(date);
  
    if (isNaN(parsedDate.getTime())) {
      return '';  
    }
  
    return parsedDate.toLocaleDateString('en-US', {
      weekday: 'long',  
      year: 'numeric',
      month: 'long',  
      day: 'numeric',     
    });
  };
  