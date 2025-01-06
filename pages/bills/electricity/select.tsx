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
export const BeninDisco = "/images/beninDisco.jpg";
export const EkoDisco = "/images/EkoDisco.jpeg";
export const EnuguDisco = "/images/enuguDisco.jpg";
export const IbadanDisco = "/images/ibadanDisco.webp";
export const IkejaDisco = "/images/IkejaDisco.jpeg";
export const KadunaDisco = "/images/KadunaDisco.jpeg";
export const KanoDisco = "/images/kanoDisco.jpg";
export const PHEDDisco = "/images/PHEDDisco.jpeg";
export const YolaDisco = "/images/yolaDisco.jpg";

const SelectPage = () => {
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
    router.push("/bills/electricity/order");
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
              Disco Categories
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
                handleSelectService("11", "55", "BENIN ELECTRIC BILLS", "BENIN ELECTRIC BILLS")
              }
            >
              <Image
                src={BeninDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "EKO ELECTRIC BILLS", "EKO ELECTRIC BILLS")}
            >
              <Image
                src={EkoDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "ENUGU ELECTRIC BILLS", "ENUGU ELECTRIC BILLS")}
            >
              <Image
                src={EnuguDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>


          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "IBADAN ELECTRIC BILLS", "IBADAN ELECTRIC BILLS")}
            >
              <Image
                src={IbadanDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "IKEJA ELECTRIC BILLS", "IKEJA ELECTRIC BILLS")}
            >
              <Image
                src={IkejaDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "KADUNA ELECTRIC BILLS", "KADUNA ELECTRIC BILLS")}
            >
              <Image
                src={KadunaDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "KANO ELECTRIC BILLS", "KANO ELECTRIC BILLS")}
            >
              <Image
                src={KanoDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "PORT HARCOURT ELECTRIC BILLS", "PORT HARCOURT ELECTRIC BILLS")}
            >
              <Image
                src={PHEDDisco}
                alt="food"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "200px" }}
              onClick={() => handleSelectService("11", "55", "YOLA ELECTRIC BILLS", "YOLA ELECTRIC BILLS")}
            >
              <Image
                src={YolaDisco}
                alt="food"
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

export default SelectPage;
