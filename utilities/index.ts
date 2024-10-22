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
    return dayjs(date).format("MMMM D, YYYY"); // e.g., October 21, 2024
  };