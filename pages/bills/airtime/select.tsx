import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectAirtimePage = () => {
  return (
    <div className="feature-product pt-7 pb-7">
      <div className="container">
        <div className="row">
          <div className="page-title col-md-6 style1 text-left mb-4">
            <h2 className="text-grey-900 fw-700 font-xxl pb-0 mb-1 d-block">
              Airtime Categories
            </h2>
          </div>
        </div>
        <div className="row pl-3 pr-3"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center"
        }}
        >
         

        

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <Link href="/bills/airtime/order">
              <div
                className="position-relative"
                style={{ width: "100%", height: "200px" }}
              >
                <Image
                  src="/images/mtn.png"
                  alt="food"
                  // width={20}
                  // height={200}
                  layout="fill"  
                  objectFit="contain"  
                />
              </div>
            </Link>
          </div>

          

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <Link href="#">
              <div
                className="position-relative"
                style={{ width: "100%", height: "200px" }}
              >
                <Image
                  src="/images/9mobile.webp"
                  alt="food"
                  // width={20}
                  // height={200}
                  layout="fill"  
                  objectFit="cover"  
                />
              </div>
            </Link>
          </div>

         

          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <Link href="#">
              <div
                className="position-relative"
                style={{ width: "100%", height: "200px" }}
              >
                <Image
                  src="/images/glo.jpeg"
                  alt="food"
                  layout="fill" // Makes the image take full width and height
                  objectFit="contain" // Ensures the image covers the container proportionally
                />
              </div>
            </Link>
          </div>
          <div className="shrink col-sm-2 p-3 border-right-0 border-right-xs text-center">
            <Link href="#">
              <div
                className="position-relative"
                style={{ width: "100%", height: "200px" }}
              >
                <Image
                  src="/images/airtel.svg"
                  alt="food"
                  width={200}
                  height={200}
                  // layout="fill" // Makes the image take full width and height
                  objectFit="contain" // Ensures the image covers the container proportionally
                />
              </div>
            </Link>
          </div>
          {/* 
          <div className="shrink col-sm-2  p-3 border-right-0  border-right-xs text-center">
            <Link href="#">
              <img src="/images/g-8.png" alt="food" className="img-fluid" />
              <h4 className="fw-600 text-grey-900 mt-0">Eggs</h4>
            </Link>
          </div>

          <div className="shrink col-sm-2 border p-3 text-center">
            <Link href="#">
              <img src="/images/g-5.png" alt="food" className="img-fluid" />
              <h4 className="fw-600 text-grey-900 mt-0">Strawberry</h4>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectAirtimePage;
