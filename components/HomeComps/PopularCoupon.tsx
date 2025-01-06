import React from 'react'

const PopularCouponComp = () => {
  return (
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
  )
}

export default PopularCouponComp