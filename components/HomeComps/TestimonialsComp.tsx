import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../styles/owl-carousel.css'; // Replace with your custom CSS if needed
import $ from 'jquery';

// Dynamically load Owl Carousel to prevent SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const TestimonialsComp = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <div className="feedback-wrapper pt-lg--7 pb-lg--7 pb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-lg-5 mb-4 pb-3">
            <h2 className="text-grey-900 fw-400 display1-size">
              Our Customers love what we do
            </h2>
          </div>
          <div className="col-lg-12">
            <OwlCarousel
              className="feedback-slider owl-carousel owl-theme overflow-visible"
              {...options}
            >
              {/** Testimonial Item */}
              <div className="owl-items">
                <div className="card shadow-lg rounded-0 p-5 bg-white text-left border-0">
                  <p className="font-xsss fw-500 text-grey-500 lh-32 mt-0 mb-4">
                    Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. We are a digital agency.
                  </p>
                  <div className="card-body p-0">
                    <Image
                      src="/images/user-6.png"
                      alt="user"
                      className="w60 float-left mr-3"
                      width={60}
                      height={60}
                    />
                    <h4 className="text-current fw-700 font-xsss mt-1">
                      Thomas Smith
                    </h4>
                    <h5 className="text-uppercase font-xsssss fw-500 mb-1 text-grey-500">
                      CEO Zipto
                    </h5>
                    <div className="star d-block w-100 text-left">
                      {[...Array(4)].map((_, i) => (
                        <Image
                          key={i}
                          src="/images/star.png"
                          alt="star"
                          className="w15 float-left"
                          width={15}
                          height={15}
                        />
                      ))}
                      <Image
                        src="/images/star-disable.png"
                        alt="star"
                        className="w15 float-left"
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/** Repeat for other testimonials */}
              {/* Copy and modify as needed for additional items */}
            </OwlCarousel>
          </div>
        </div>


        {/* <div className="row mt-5 pt-5">
          <div className="col-lg-6">
            <Image
              src="/images/app-image.png"
              alt="app-image"
              className="img-fluid"
              width={600}
              height={400}
            />
          </div>
          <div className="col-lg-4 offset-lg-1 pt-5 mt-5">
            <h4 className="text-uppercase text-current font-xsss fw-600 mb-3 mt-5">
              Download & Enjoy
            </h4>
            <h2 className="text-grey-900 fw-700 display1-size lh-3">
              Get the Zipto app <br /> for payment
            </h2>
            <p className="w-75 font-xsss fw-500 text-grey-500 lh-26 mt-2">
              We are a digital agency, a small design agency based in Paris as I
              was groping to remove through language.
            </p>
            <a href="#">
              <Image
                src="/images/apple-store.png"
                alt="apple-store"
                className="w175 mb-xs-2"
                width={175}
                height={50}
              />
            </a>
            <a href="#">
              <Image
                src="/images/play-store.png"
                alt="play-store"
                className="w175 p-md--2"
                width={175}
                height={50}
              />
            </a>
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default TestimonialsComp;
