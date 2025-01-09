import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useApiMutation } from "@/lib/useApi";
import {
  validateAddEvent,
  validateUserRegister,
} from "@/utilities/validations/authValids";
import { toast } from "react-toastify";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";
import { useAppSelector } from "@/redux/store";

interface IProp {
  setAddEventModal: (addEventModal: boolean) => void;
}

export interface IAddEventVariables {
  name: string;
  type: string;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
  dateTime: string;
}

interface IResponse {
  statusCode: number;
  status: boolean;
  message: string;
  data: {
    accessToken: string;
    //  user: IUser;
  };
}

export interface IVariables {
  phoneNumber: string;
  email: string;
  password: string;
}

const AddEventModal: React.FC<IProp> = ({ setAddEventModal }) => {

      const { currentUser } = useAppSelector((state) => state.auth);
  
      const [location, setLocation] = useState<{
          latitude: string;
          longitude: string;
        } | null>(null);
  const [formData, setFormData] = useState<IAddEventVariables>({
    name: "",
    type: "",
    address: "",
    latitude: "",
    longitude: "",
    description: "",
    dateTime: "",
  });

  const addEvent = useApiMutation<IResponse, IAddEventVariables>("/event");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

        if(!location?.latitude && !location?.latitude){
          return toast.error("Please allow location!")
        }
        if(!currentUser?.accessToken){
          return toast.error("Please log in!")
        }

    const result = validateAddEvent(formData);

    if (result.errLength) {
      return toast.error(() => <Toast title="Error" body={result.errMsg} />);
    }

    addEvent.mutate({...formData, latitude: location.latitude, longitude: location.longitude }, {
      onSuccess: (data: IResponse) => {
        toast.success("Event Added successfully");
        window.location.reload();
        setAddEventModal(false);
      },
      onError: (error: any) => {
        toast.error(() => (
          <Toast
            title="Sign up failed:"
            body={error?.response?.data?.message || "Unknown error"}
          />
        ));
      },
    });
  };





  useEffect(() => {
    const checkLocationPermission = (): void => {
      const permission = localStorage.getItem("locationPermission");
      const latitude = localStorage.getItem("latitude");
      const longitude = localStorage.getItem("longitude");
      if (permission === "granted" && latitude && longitude) {
        setLocation({ latitude, longitude })

      }
    };

    checkLocationPermission();
    
  }, []);


  return (
    <div className="modal-overlay">
      <div className="mobottomdalfade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            <div className="modal-body p-3 d-flex align-items-center bg-none">
              <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                <div className="card-body rounded-0 text-left pt-0">
                  <div
                    className="flex items-center justify-center h-screen bg-blue-500"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h2 className="fw-600 display2-size mb-4">
                      Add Event
                      {/* <br /> your account */}
                    </h2>
                    <h1
                      onClick={() => setAddEventModal(false)}
                      className="text-danger shrink"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      X
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Event Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Event Type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleChange}
                      />
                    </div> */}
                    {/* <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleChange}
                      />
                    </div> */}
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Date and Time"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-sm-12 p-0 text-center">
                      <button
                        type="submit"
                        className="shrink form-control h60 bg-current text-white font-xss fw-500 border-2 border-0 p-0"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {addEvent.isPending && <Spinner />}
    </div>
  );
};

export default AddEventModal;
