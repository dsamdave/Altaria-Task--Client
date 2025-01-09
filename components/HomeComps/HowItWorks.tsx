import { useApiMutation, useApiQuery } from "@/lib/useApi";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Universal/Spinner";

interface IResponse {
  status: boolean;
  message: string;
  data: Event[];
}

interface Event {
  name: string;
  type: string;
  address: string;
  coordinates: [number, number];
  description: string;
  dateTime: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IVariables {
  latitude: string;
  longitude: string;
}

const HowItWorks = () => {
  const events = useApiMutation<IResponse, IVariables>("/events");

  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userEvents, setUserEvents] = useState<Event[]>([])

  const fetchEvents = async ( ) => {
    const latitude = "40.7128";
    const longitude = "-74.0060";

    events.mutate(
      { latitude, longitude },
      {
        onSuccess: (data: IResponse) => {
          toast.success("Events fetched successfully!");
          setUserEvents(data?.data)
        },
        onError: (error: any) => {
          toast.error("fetching events failed");
        },
      }
    );
  };




  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser.');
      return;
    } 

    setLocation(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }); 
        toast.error(null);
        console.log('Permission granted, location fetched:', position.coords);
      },
      (err) => {
        switch (err.code) {
          case err.PERMISSION_DENIED:
            toast.error('Permission denied. Please allow location access.');
            break;
          case err.POSITION_UNAVAILABLE:
            toast.error('Location information is unavailable.');
            break;
          case err.TIMEOUT:
            toast.error('The request to get your location timed out.');
            break;
          default:
            toast.error('An unknown error occurred.');
            break;
        }
        setLocation(null);
        console.error('Error fetching location:', err);
      }
    );
  };

  const fetchLocationFromIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setLocation({ 
        latitude: data.latitude, 
        longitude: data.longitude,
      });
      console.log('IP-based location:', data);
    } catch (error) {
      console.error('IP-based geolocation error:', error);
    }
  };

  useEffect(() => { setIsClient(true)}, []);
  useEffect(() => { 
    // getLocation()
    fetchLocationFromIP() 

  }, []);

  useEffect(() => { 

    if(location?.latitude && location.longitude){

        // fetchEvents()
    }
}, [location?.latitude && location.longitude]);

  useEffect(() => { 
        fetchEvents()
}, []);

  return (
    <>
    {
        isClient ? (

    <div className="how-to-work pt-lg--7 pb-lg--7 pb-5 pt-5 bg-greylight">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-lg-5 mb-4 pb-3">
            <h2 className="text-grey-900 fw-400 display1-size">
              List of Events
            </h2>
          </div>

          {
            userEvents.length > 0 && userEvents.map((each, idx) => (

          <div className="col-lg-4 mb-3" key={idx}>
            <div className="card shadow-lg rounded-0 p-5 bg-white text-center border-0">
            <i className="ti-package ml-auto mr-auto round-lg-btn text-white bg-current font-xxl text-center"></i>
            <h2 className="fw-700 font-sm mt-4">{each.name}</h2>
              <p className="font-xsss fw-500 text-grey-500 lh-26 mt-2">
                {each?.description}
              </p>
              <p className="font-xsss fw-500 text-grey-500 lh-26 mt-2">
                {each?.type}
              </p>
              <p className="font-xsss fw-500 text-grey-500 lh-26 mt-2">
                {each?.address}
              </p>
              <p className="font-xsss fw-500 text-grey-500 lh-26 mt-2">
                {each?.dateTime}
              </p>
            </div>
          </div>
            )) 
          }

        
        </div>
      </div>

      {events.isPending && <Spinner />}

    </div>
        ) : null
    }
    </>
  );
};

export default HowItWorks;
