import React from 'react'

const CategoriesComp = () => {
  return (
    <div className="popular-wrapper pt-lg--7 pb-lg--7 pb-5 pt-5 bg-lightblue">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 text-left mb-5 pb-0">
                <h2 className="text-grey-900 fw-400 display1-size lh-2">Explore <br/> by category</h2>
            </div>
        
            <div className="col-lg-12">
                <div className="categorie-slider owl-carousel owl-theme overflow-visible dot-none right-nav pb-4">
                    <div className="owl-items text-center">
                        <div className="card w-100 p-4 text-left border-0 shadow-md rounded-lg">
                            <i className="ti-world mt-4 font-xl text-current"></i>
                            <h4 className="font-xsss fw-700 mt-3 text-grey-900">Vouchers</h4>
                            <h6 className="fw-500 font-xssss text-grey-500">Total active Member</h6>
                        </div>
                    </div>
                    <div className="owl-items text-center">
                        <div className="card w-100 p-4 text-left border-0 shadow-md rounded-lg">
                            <i className="ti-briefcase mt-4 font-xl text-current"></i>
                            <h4 className="font-xsss fw-700 mt-3 text-grey-900">Finance</h4>
                            <h6 className="fw-500 font-xssss text-grey-500">Total active Member</h6>
                        </div>
                    </div>
                    <div className="owl-items text-center">
                        <div className="card w-100 p-4 text-left border-0 shadow-md rounded-lg">
                            <i className="ti-location-pin mt-4 font-xl text-current"></i>
                            <h4 className="font-xsss fw-700 mt-3 text-grey-900">Flights</h4>
                            <h6 className="fw-500 font-xssss text-grey-500">Total active Member</h6>
                        </div>
                    </div>
                    <div className="owl-items text-center">
                        <div className="card w-100 p-4 text-left border-0 shadow-md rounded-lg">
                            <i className="ti-video-clapper mt-4 font-xl text-current"></i>
                            <h4 className="font-xsss fw-700 mt-3 text-grey-900">Movies</h4>
                            <h6 className="fw-500 font-xssss text-grey-500">Total active Member</h6>
                        </div>
                    </div>
                    <div className="owl-items text-center">
                        <div className="card w-100 p-4 text-left border-0 shadow-md rounded-lg">
                            <i className="ti-credit-card mt-4 font-xl text-current"></i>
                            <h4 className="font-xsss fw-700 mt-3 text-grey-900">Coupon</h4>
                            <h6 className="fw-500 font-xssss text-grey-500">Total active Member</h6>
                        </div>
                    </div>
                    <div className="owl-items text-center">
                        <div className="card w-100 p-4 text-left border-0 shadow-md rounded-lg">
                            <i className="ti-wallet mt-4 font-xl text-current"></i>
                            <h4 className="font-xsss fw-700 mt-3 text-grey-900">Shopping</h4>
                            <h6 className="fw-500 font-xssss text-grey-500">Total active Member</h6>
                        </div>
                    </div>

                    <div className="owl-items text-center">
                        <div className="card w-100 p-4 text-left border-0 shadow-md rounded-lg">
                            <i className="ti-stats-up mt-4 font-xl text-current"></i>
                            <h4 className="font-xsss fw-700 mt-3 text-grey-900">Share</h4>
                            <h6 className="fw-500 font-xssss text-grey-500">Total active Member</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CategoriesComp