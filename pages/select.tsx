import React from 'react'

const Select = () => {
  return (
    <div className="feature-product pt-7 pb-7">
    <div className="container">
        <div className="row">
            <div className="page-title col-md-6 style1 text-left mb-4">
                <h2 className="text-grey-900 fw-700 font-xxl pb-0 mb-1 d-block">Browse Categories</h2>
                {/* <p className="fw-300 font-xsss lh-28 text-grey-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p> */}
                {/* <a href="#" className="fw-600 font-xsss text-ornage mt-0 pt-0 d-none d-block-xs">Shop all categories <i className="ti-angle-right font-xssss"></i></a> */}
            </div>
            {/* <div className="page-title col-md-6 style1 text-right mb-4 d-none-sm">
                <a href="#" className="fw-600 font-xsss text-ornage mt-4 pt-3 d-inline-block">Shop all categories <i className="ti-angle-right font-xssss"></i></a>
            </div> */}
        </div> 
        <div className="row pl-3 pr-3">

            <div className="shrink col-sm-2 border p-3 border-right-0  border-right-xs text-center">
                <img src="images/g-4.png" alt="food" className="img-fluid"/>
                <h4 className="fw-600 text-grey-900 mt-0">Apple</h4>
            </div>
            <div className="shrink col-sm-2 border p-3 border-right-0  border-right-xs text-center">
                <img src="images/g-5.png" alt="food" className="img-fluid"/>
                <h4 className="fw-600 text-grey-900 mt-0">Strawberry</h4>
            </div>
            <div className="shrink col-sm-2 border p-3 border-right-0  border-right-xs text-center">
                <img src="images/g-6.png" alt="food" className="img-fluid"/>
                <h4 className="fw-600 text-grey-900 mt-0">Juice</h4>
            </div>
            <div className="shrink col-sm-2 border p-3 border-right-0  border-right-xs text-center">
                <img src="images/g-7.png" alt="food" className="img-fluid"/>
                <h4 className="fw-600 text-grey-900 mt-0">Onion</h4>
            </div>
            <div className="shrink col-sm-2 border p-3 border-right-0  border-right-xs text-center">
                <img src="images/g-8.png" alt="food" className="img-fluid"/>
                <h4 className="fw-600 text-grey-900 mt-0">Eggs</h4>
            </div>
            <div className="shrink col-sm-2 border p-3 text-center">
                <img src="images/g-5.png" alt="food" className="img-fluid"/>
                <h4 className="fw-600 text-grey-900 mt-0">Strawberry</h4>
            </div>
        </div>
    </div>
</div>
  )
}

export default Select