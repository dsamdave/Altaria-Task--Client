import React from 'react'

const bills = () => {
  return (
    <div className='open-font main-wrapper'>

    <div className="online bg-lightgrey-after pb-7 pt-3 position-relative">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 pr-md--2">
                <div className="bg-white shadow-xs rounded-lg h-100">
                    <a href="#" className="dash-menu d-none d-block-md fw-700 p-3 text-current font-xsss ls-3 "> BROWSE CATEGORIES <i className="ti-menu float-right font-xss mt-1"></i></a>
                    <ul className="tab-ul">
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-700 text-grey-700 font-xsss d-inline-block"><i className="ti-mobile font-md float-left mr-3"></i> Postpaid Rechagre <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-plug font-md float-left mr-3"></i> Electicity Rechagre <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-pie-chart font-md float-left mr-3"></i> DTH Rechagre <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-stats-up font-md float-left mr-3"></i> Share Market <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-harddrives font-md float-left mr-3"></i> Broadband Rechagre <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-game font-md float-left mr-3"></i> Game Download <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-wallet font-md float-left mr-3"></i> Pay loan <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-credit-card font-md float-left mr-3"></i> Credit Card <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-video-clapper font-md float-left mr-3"></i> Book Movie <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                        <li><a href="#" className="bg-white p-3 w-100 fw-600 text-grey-500 font-xsss d-inline-block"><i className="ti-package font-md float-left mr-3"></i> More <i className="ti-angle-right float-right text-grey-400 mt-1"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-9 pl-md--2 pr-md--2 mt-sm--3">
                {/* <div className="bg-white shadow-xs rounded-lg h-100 p-4 member-1">
                    <form action="#">
                        <div className="row">
                            <div className="col-sm-12 mb-2"><h4 className="fw-700 font-xxl mb-3">Mobile Recharge &amp; Bill Payment</h4></div>
                            <div className="col-sm-12 mb-4">
                                <div className="custom-control mr-4 custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="customRadio" name="example" value="customEx" />
                                    <label className="custom-control-label small-size fw-500 text-grey-900 font-xsss" htmlFor="customRadio">Postpaid</label>
                                </div>
                                <div className="custom-control mr-0 custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="customRadio2" name="example" value="customEx"/>
                                    <label className="custom-control-label small-size fw-500 text-grey-900 font-xsss" htmlFor="customRadio2">Prepaid</label>
                                </div>
                            </div>
                            <div className="col-sm-6"><input type="text" className="form-control mb-3" placeholder="Enter 10 digit Mobile Number"/></div>
                            <div className="col-sm-6"><input type="text" className="form-control mb-3" placeholder="Operator"/></div>
                            <div className="col-sm-6"><input type="text" className="form-control mb-3" placeholder="Amount"/></div>
                            <div className="col-sm-6"><a href="#" className="d-block text-center bg-current border-0 w-100 form-bttn fw-500 rounded-lg text-white member-bttn2">Proceed to Recharge</a></div>
                            <div className="col-sm-12">
                                <h4 className="mb-3 fw-600 font-xss mt-2">Promo Code</h4>
                                <div className="card w-100 p-2 pr-4 border shadow-none mb-3 pl-5">
                                    <img src="images/r-4.png" alt="icon" className="w50 mr-3 float-left position-absolute left-15"/>
                                    <h5 className="pl-4 ml-2 fw-900 text-grey-900 font-xsss mb-1 d-inline-block mt-2 ls-3">LUCKY200</h5>
                                    <p className="pl-4 ml-2 fw-500 text-grey-500 mb-0 font-xssss d-block">200 lucky winners will get 100% cashback every day <a href="#" className="fw-900 font-xssss text-current ls-3 float-right">APPLY</a></p>
                                </div>

                                <div className="card w-100 p-2 pr-4 border shadow-none mb-3 pl-5">
                                    <img src="images/r-5.png" alt="icon" className="w50 mr-3 float-left position-absolute left-15"/>
                                    <h5 className="pl-4 ml-2 fw-900 text-grey-900 font-xsss mb-1 d-inline-block mt-2 ls-3">GET30</h5>
                                    <p className="pl-4 ml-2 fw-500 text-grey-500 mb-0 font-xssss d-block">200 lucky winners will get 100% cashback every day <a href="#" className="fw-900 font-xssss text-current ls-3 float-right">APPLY</a></p>
                                </div>

                                <div className="card w-100 p-2 pr-4 border shadow-none mb-0 pl-5">
                                    <img src="images/r-2.png" alt="icon" className="w50 mr-3 float-left position-absolute left-15"/>
                                    <h5 className="pl-4 ml-2 fw-900 text-grey-900 font-xsss mb-1 d-inline-block mt-2 ls-3">FIRST10</h5>
                                    <p className="pl-4 ml-2 fw-500 text-grey-500 mb-0 font-xssss d-block">200 lucky winners will get 100% cashback every day <a href="#" className="fw-900 font-xssss text-current ls-3 float-right">APPLY</a></p>
                                </div>

                                

                            </div>
                        </div>
                    </form>
                </div> */}
                <div className="member-2" style={{display: "nonet"}}>
                    <div className="card w-100 shadow-xs rounded-lg border-0">
                        {/* <!-- <div className="card-body w-100 bg-greylight p-3 border-bottom"><a href="#" className="mb-0 text-grey-800 fw-500 font-xsss"><i className="ti-angle-left text-grey-800 dark-text-white font-xssss mr-1"></i> Go Back</a></div> --> */}
                        <div className="card-body w-100 p-4 border-0"> 
                            <h4 className="float-left fw-600 mb-0 font-sm text-grey-900">Recharge or Bill payment Order <br/>
                                <span className="font-xssss text-grey-500 fw-300">Transaction ID: 12679624220</span></h4>
                             {/* <!-- <h4 className="mb-0 float-right font-xl text-grey-900 mt-3 fw-600"><span className="font-xs">$</span> 129</b></h4>    --> */}
                        </div>
                    </div>
                    <div className="card mt-3 w-100 shadow-xs rounded-lg border-0">
                        <div className="card-body w-100 p-4 border-bottom"><h4 className="mb-0 text-grey-500 fw-500 font-xsss">SELECT AN OPTION TO PAY</h4></div>
                    </div>

                    <div className="card bg-white border-0 shadow-xs">
                        <div className="card-body d-flex justify-content-between align-items-end p-4">
                            <div>
                                <h4 className="text-grey-700 mb-0 d-flex align-items-center justify-content-between mt-0 fw-600 lato-font font-xsss">
                                    <img src="images/b-10.png" alt="image" className="float-left mr-3"/>
                                     4321 4432 6565 **** 
                                </h4>
                            </div>
                            <div className="round float-right mb-2">
                                <input id="radio-1" className="radio-custom" name="radio-group" type="radio" />
                                <label htmlFor="radio-1" className="radio-custom-label m-0"></label>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-white shadow-xs border-0">
                        <div className="card-body d-flex justify-content-between align-items-end p-4">
                            <div>
                                <h4 className="text-grey-700 mb-0 d-flex align-items-center justify-content-between mt-0 fw-600 lato-font font-xsss">
                                    <img src="images/b-9.png" alt="image" className="float-left mr-3"/>
                                    ***port@gmail.com
                                </h4>
                            </div>
                            <div className="round float-right mb-2">
                                <input id="radio-2" className="radio-custom" name="radio-group" type="radio"/>
                                <label htmlFor="radio-2" className="radio-custom-label m-0"></label>
                            </div>

                        </div>
                    </div>

                    <div className="card bg-white shadow-xs border-0">
                        <div className="card-body d-flex justify-content-between align-items-end p-4">
                            <div>
                                <h4 className="text-grey-700 mb-0 d-flex align-items-center justify-content-between mt-0 fw-600 lato-font font-xsss">
                                    <img src="images/b-11.png" alt="image" className="float-left mr-3"/>
                                     6565 4321 4432  **** 
                                </h4>
                            </div>
                            <div className="round float-right mb-2">
                                <input id="radio-3" className="radio-custom" name="radio-group" type="radio"/>
                                <label htmlFor="radio-3" className="radio-custom-label m-0"></label>
                            </div>

                        </div>
                    </div>

                    <div className="card w-100 bg-greylight shadow-none rounded-lg border-0 mt-3">
                        <div className="card-body w-100 p-4 border-0"> 
                            <h4 className="mb-0 float-left font-xxl text-grey-700 mt-0 fw-900"><span className="font-xs">$</span> 129<br/><span className="font-xssss text-grey-500 fw-300 d-block">inclusive tax*</span></h4>   
                            <a href="#" className="mt-0 btn lh-32 member-bttn3 rounded-lg ls-3 bg-current border-0 font-xssss text-white fw-600 ls-md text-uppercase float-right w175 p-3">Next</a>
                        </div>
                    </div>
                </div>

                <div className="member-3" style={{display: "none"}}>
                    <div className="card dark-card bg-white shadow-xs p-4 text-center border-0">
                        <div className="card-body">
                            <i className="ti-check btn-round-xxxl text-white bg-success display3-size mt-5 shadow-lg"></i>
                            <h2 className="fw-900 display1-size mb-2 lh-3 mt-4">Done </h2>
                            <p className="font-xsss text-grey-500 pl-3 pr-3">We con't seem to find the page you are looking for...</p>
                            <a href="home-1.html" className="mt-3 mb-5 border-0 w200 bg-current pt-2 pb-2 lh-32 text-white fw-600 rounded-lg d-inline-block btn-light font-xsss ls-3 text-uppercase">Continue</a>
                        </div>
                    </div>
                    <div className="card w-100 bg-greylight shadow-none rounded-lg border-0 mt-3">
                        <div className="card-body w-100 p-4 border-0"> 
                            <h4 className="mb-0 float-left font-xssss text-grey-700 mt-1 fw-300 mb-0"><i className="ti-reload text-success mr-2"></i> 100% Secure Payments Powered by Paytm</h4>   
                            <img src="images/payment-logo.png" alt="icon" className="float-right w250"/>
                        </div>
                    </div>
                </div>


            </div>
            {/* <div className="col-lg-3 pl-md--2">
                <a href="#" className="d-none d-lg-block"><img src="images/ad-banner-4.png" alt="ad-banner" className="rounded-lg img-fluid"/></a>
            </div> */}
        </div>
    </div>            
</div>


<div className="popular-wrapper pb-4">
            <div className="container">
                <div className="row">
                    <div className="page-title style1 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 text-center mb-5"><h2 className="text-grey-900 fw-300 display2-size pb-3 mb-0 d-block">Popular Coupon</h2> <p className="fw-300 font-xss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p></div>
                    <div className="col-lg-12">
                        
                        <div className="offer-slider owl-carousel owl-theme overflow-visible dot-none">
                            <div className="owl-items text-center"><img src="images/c-7.jpg" alt="icon" className="img-fluid rounded-lg"/></div>
                            <div className="owl-items text-center"><img src="images/c-5.jpg" alt="icon" className="img-fluid rounded-lg"/></div>
                            <div className="owl-items text-center"><img src="images/c-6.jpg" alt="icon" className="img-fluid rounded-lg"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="how-to-work pt-7 pb-7">
            <div className="container">
                <div className="row">
                     <div className="col-lg-5 mb-4"><img src="images/blog-4.jpg" alt="image" className="rounded-lg img-fluid shadow-xs"/></div>
                     <div className="col-lg-6 offset-lg-1 page-title style1">
                         <h2 className="fw-300 text-grey-900 display2-size lh-3">Online recharge and pay monthly bill easy way.</h2>
                         <p className="fw-300 font-xss lh-28 text-grey-500 mt-3 w-75 w-xs-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>

                         <h4 className="fw-600 font-sm mt-5 mb-2"><i className="ti-check btn-round-xs text-success border-success mr-2 border"></i> Choose what to do</h4>
                         <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">Looking for a cozy hotel to stay, a restaurant to eat, a museum to visit or a mall to do some.</p>

                         <h4 className="fw-600 font-sm mt-4 mb-2"><i className="ti-check btn-round-xs text-success border-success mr-2 border"></i> Find what you want</h4>
                         <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">Search and filter hundreds of listings, read reviews, explore photos and find the perfect spot.</p>

                         <h4 className="fw-600 font-sm mt-4 mb-2"><i className="ti-check btn-round-xs text-success border-success mr-2 border"></i> Explore amazing code</h4>
                         <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">Go and have a good time or even make a booking directly from the listing page.</p>
                     </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default bills