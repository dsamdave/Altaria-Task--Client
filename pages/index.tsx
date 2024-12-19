import BannerComp from "@/components/HomeComps/Banner";
import CategoriesComp from "@/components/HomeComps/CategoriesComp";
import FAQSComp from "@/components/HomeComps/FAQSComp";
import HowItWorks from "@/components/HomeComps/HowItWorks";
import LogosComp from "@/components/HomeComps/LogosComp";
import TestimonialsComp from "@/components/HomeComps/TestimonialsComp";
import { url } from "inspector";
import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
  <div>
    <Head><title>Homepage</title></Head>

    <BannerComp />

    <LogosComp />

    <CategoriesComp />

    <HowItWorks />

    <TestimonialsComp />

    <FAQSComp />

{/* 
    <div className="parallax-wrapper pb-7 pt-7" style={{backgroundImage: 'url("/images/parallax.jpg")'}} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h2 className="text-white fw-600 display2-size display2-size-sm">Get the latest deals</h2>
                        <p className="text-grey-400 font-xsss mb-4">and receive $20 coupon for first shopping</p>
                        <form action="#" className="w-100 float-left rounded-lg overflow-hidden">
                            <input type="text" className="border-1 bg-white form-control w-xs-100 mb-xs-2 w-75 rounded-0 h60 float-left" placeholder="Enter your email address.."/>
                            <button className="border-0 bg-current text-white h60 form-control p-0 w-xs-100  rounded-0 float-left d-block w-25 font-xsss">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}


<div className="payment-option  pb-5 pt-5 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-3 text-center">
                        <i className="ti-shopping-cart text-yellow display1-size ml-auto mr-auto mb-3"></i>
                        <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">100% Secure Payments</h4>
                        <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">100% Payment Protection.</p>
                    </div>                 
                    
                    <div className="col-lg-3 col-md-6 mb-3 text-center">
                        <i className="ti-headphone-alt text-yellow display1-size ml-auto mr-auto mb-3"></i>
                        <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">Support</h4>
                        <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">Alway online feedback 24/7</p>
                    </div>                 
                    <div className="col-lg-3 col-md-6 mb-3 text-center">
                        <i className="ti-lock text-yellow display1-size ml-auto mr-auto mb-3"></i>
                        <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">Trust pay</h4>
                        <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">Easy Return Policy.</p>
                    </div> 
                    <div className="col-lg-3 col-md-6 mb-3 text-center">
                        <i className="ti-reload text-yellow display1-size ml-auto mr-auto mb-3"></i>
                        <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">Return and Refund</h4>
                        <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">100% money back guarantee</p>
                    </div>                                 
                </div>
            </div>
        </div>


        {/* <div className="container">
        <div className="row">
                    <div className="col-sm-5">
                        <h2 className="text-grey-100 fw-600 font-xxl mb-0">Our Newsletter</h2>
                        <p className="text-grey-100 fw-300 font-xssss mb-2">and receive $20 coupon for first shopping</p>
                    </div>
                    <div className="col-sm-7">
                        <form action="#" className="w-100 float-left rounded-lg overflow-hidden">
                            <input type="text" className="border-1 bg-white form-control w-xs-100 mb-xs-2 w-75 rounded-0 h60 float-left" placeholder="Enter your email address.."/>
                            <button className="border-0 bg-yellow text-black h60 form-control p-0 w-xs-100  rounded-0 float-left d-block w-25 font-xsss">Subscribe</button>
                        </form>
                    </div>
                    </div>
                    </div> */}


<div className="info-wrappper pt-lg--7 pt-5 pb-lg--7 pb-4">
            <div className="container">
                <div className="product-info">
                    <div className="row">
                        <div className="col-sm-12" id="exTab1">
                            <ul className="nav nav-pills mb-3 product-info-tab" id="pills-tab" role="tablist">
                                <li className="nav-item"><a className="nav-link fmont active show" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="false">Description</a></li>
                                <li className="nav-item"><a className="nav-link fmont" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Additional information</a></li>
                                <li className="nav-item"><a className="nav-link fmont " id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="true">Review</a></li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane pt-4 pb-4 fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <p className="font-xsss fw-500 text-grey-500 lh-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <ul className="disc-item mb-4">
                                        <li className="font-xsss fw-500 text-grey-500 lh-30">Nunc lacus elit, faucibus ac laoreet sed.</li>
                                        <li className="font-xsss fw-500 text-grey-500 lh-30">Maecenas eu ante a elit tempus fermentum.</li>
                                        <li className="font-xsss fw-500 text-grey-500 lh-30">Aliquam commodo tincidunt semper. Phasellus accumsan</li>
                                    </ul>
                                    <p className="font-xsss fw-500 text-grey-500 lh-30">Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra, ex dui pharetra nisl, a scelerisque ipsum nulla ac sem. Cras eu risus urna. Duis lorem sapien, congue eget nisl sit amet, rutrum faucibus elit.</p>
                                </div>
                                <div className="tab-pane pt-4 pb-4 fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <p className="font-xsss fw-500 text-grey-500 lh-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p className="font-xsss fw-500 text-grey-500 lh-30">Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra, ex dui pharetra nisl, a scelerisque ipsum nulla ac sem. Cras eu risus urna. Duis lorem sapien, congue eget nisl sit amet, rutrum faucibus elit.</p>
                                </div>
                                <div className="tab-pane pt-4 pb-4 fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <p className="font-xsss fw-500 text-grey-500 lh-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p className="font-xsss fw-500 text-grey-500 lh-30">Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra, ex dui pharetra nisl, a scelerisque ipsum nulla ac sem. Cras eu risus urna. Duis lorem sapien, congue eget nisl sit amet, rutrum faucibus elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
   
 
  </div>
  );
}



