import { useApiMutation, useApiQuery } from "@/lib/useApi";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Universal/Spinner";
import Toast from "../Universal/Toast";
import { useRouter } from "next/router";

type Location = {
  latitude: number;
  longitude: number;
};
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
export interface IBookmarkVariables {
  eventId: string;
}

const HowItWorks = () => {
  const router = useRouter();
  const { currentUser } = useAppSelector((state) => state.auth);

  const events = useApiMutation<IResponse, IVariables>("/events");
  const addBookmark = useApiMutation<IResponse, IBookmarkVariables>(
    "/bookmark-event"
  );

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [userEvents, setUserEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    const latitude = "40.7128";
    const longitude = "-74.0060";

    events.mutate(
      { latitude, longitude },
      {
        onSuccess: (data: IResponse) => {
          toast.success("Events fetched successfully!");
          setUserEvents(data?.data);
        },
        onError: (error: any) => {
          toast.error(() => (
            <Toast
              title="Error"
              body={error?.response?.data?.message || "Unknown error"}
            />
          ));
        },
      }
    );
  };

  const handleFavorite = async (id: string) => {
    if (!currentUser?.accessToken) {
      return toast.error("Please log in!");
    }
    console.log({ id });
    addBookmark.mutate(
      { eventId: id },
      {
        onSuccess: (data: IResponse) => {
          toast.success("Events bookmarked!");
        },

        onError: (error: any) => {
          toast.error(() => (
            <Toast
              title="Error"
              body={error?.response?.data?.message || "Unknown error"}
            />
          ));
        },
      }
    );
  };

  const getLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            // Log detailed error messages
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
              default:
                console.error("An unknown error occurred:", error.message);
            }
            reject(error);
          },
          {
            timeout: 10000, // Set timeout to 10 seconds
            maximumAge: 0, // Always get the latest location
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };

  const saveLocationPermission = (): void => {
    localStorage.setItem("locationPermission", "granted");
  };

  const saveLocationToStorage = (latitude: number, longitude: number): void => {
    localStorage.setItem("latitude", latitude.toString());
    localStorage.setItem("longitude", longitude.toString());
  };

  const handleAllowLocation = async (): Promise<void> => {
    try {
      const location = await getLocation();
      console.log({ location });
      if (location) {
        const { latitude, longitude } = location;

        saveLocationPermission();
        saveLocationToStorage(latitude, longitude);
        router.push("/onboarding");
      }
    } catch (error) {
      console.error("Error getting location:", error);
      toast.error("Unable to retrieve location.");
    }
  };

  const handleDenyLocation = (): void => {
    toast.error("Location access is required.");
  };

  useEffect(() => {
    const checkLocationPermission = (): void => {
      const permission = localStorage.getItem("locationPermission");
      if (permission === "granted") {
        router.push("/signin");
      }
    };

    checkLocationPermission();
  }, [router]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (location?.latitude && location.longitude) {
      // fetchEvents()
    }
  }, [location?.latitude && location.longitude]);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {isClient ? (
        <div className="how-to-work pt-lg--7 pb-lg--7 pb-5 pt-5 bg-greylight">
          <div className="container">
            <div className="row">
              <button
                className=" btn btn-primary mb-2"
                onClick={handleAllowLocation}
              >
                Allow Location
              </button>
              <button className=" btn btn-danger" onClick={handleDenyLocation}>
                Deny Location
              </button>
            </div>
          </div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-12 text-center mb-lg-5 mb-4 pb-3">
                <h2 className="text-grey-900 mt-5 fw-400 display1-size">
                  List of Events
                </h2>
              </div>

              {userEvents.length > 0 &&
                userEvents.map((each, idx) => (
                  <div className="col-lg-4 mb-3" key={idx}>
                    <div className="card shadow-lg rounded-0 p-5 bg-white text-center border-0">
                      <i
                        className="shrink ti-heart ml-auto mr-auto round-lg-btn text-white bg-danger font-xxl text-center"
                        onClick={() => handleFavorite(each?.id)}
                      ></i>
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
                ))}
            </div>
          </div>

          {(events.isPending || addBookmark.isPending) && <Spinner />}
        </div>
      ) : null}
    </>
  );
};

export default HowItWorks;
