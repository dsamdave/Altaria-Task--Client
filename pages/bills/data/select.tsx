import {
  addSelectedService,
  clearSelectedService,
} from "@/redux/slices/selectedServiceSlice";
import { useAppDispatch } from "@/redux/store";
import { ISelectedService } from "@/utilities/typings";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// Images
export const MTNLogo = "/images/mtn.png";
export const NineMobileLogo = "/images/9mobile.webp";
export const GloLogo = "/images/glo.jpeg";
export const AirtelLogo = "/images/airtel.svg";

const SelectAirtimePage = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleSelectService = async (
    billerCode: string,
    itemCode: string,
    serviceName: string,
    billerName: string
  ) => {
    const payload: ISelectedService = {
      country: "NG",
      currency: "NGN",
      serviceName,
      billerCode,
      itemCode,
      billerName,
    };

    dispatch(addSelectedService(payload));
    router.push("/bills/airtime/order");
  };

  useEffect(() => {
    dispatch(clearSelectedService());
  }, []);

  return (
    <div
      className="feature-product pt-7 pb-7"
      style={{
        // paddingTop: "150px",
        paddingBottom: "250px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="page-title col-md-6 style1 text-left mb-4">
            <h2 className="text-grey-900 fw-700 font-xxl pb-0 mb-1 d-block">
              Airtime Categories
            </h2>
          </div>
        </div>
        <div
          className="row pl-3 pr-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() =>
                handleSelectService("11", "55", "Airtel", "airtel")
              }
            >
              <Image
                src={AirtelLogo}
                alt="food"
                // width={20}
                // height={200}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "MTN", "MTN")}
            >
              <Image
                src={MTNLogo}
                alt="food"
                // width={20}
                // height={200}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "Glo", "glo")}
            >
              <Image
                src={GloLogo}
                alt="food"
                // width={20}
                // height={200}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() =>
                handleSelectService("11", "55", "9mobile", "9mobile")
              }
            >
              <Image
                src={NineMobileLogo}
                alt="food"
                // width={20}
                // height={200}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAirtimePage;
