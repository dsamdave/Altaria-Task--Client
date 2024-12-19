import React from "react";

const order = () => {
  return (
    <div className="map-wrapper pb-7"
    style={{
        marginTop: "150px"
    }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact-wrap bg-white shadow-lg rounded-lg position-relative">
              <div className="page-title ">
                <h4 className="mont-font fw-500 font-xxl mb-5">
                  Order Service
                </h4>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Town / City
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Postcode
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                      <div className="form-check text-left mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input mt-2"
                          id="exampleCheck1"
                        />
                        <label
                          className="pt--1 form-check-label fw-500 font-xss text-grey-900"
                          htmlFor="exampleCheck1"
                        >
                          Create an account?
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="shrink card shadow-none border-0">
                  <button
                    className="btn w-100 p-3 mt-3 font-xsss text-center text-white bg-current rounded-lg text-uppercase fw-600 ls-3"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //  <div
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     width: "70%",
    //     padding: "50px",
    //     boxSizing: "border-box",
    // \  }}
    // >
    //   <div className="page-title ">
    //     <h4 className="mont-font fw-500 font-xxl mb-5">Billing address</h4>
    //     <form action="#">
    //       <div className="row">
    //         <div className="col-lg-6 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               First Name
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>

    //         <div className="col-lg-6 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               Last Name
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-lg-6 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               Email
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>

    //         <div className="col-lg-6 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               Phone
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-lg-12 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               Country
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>

    //         <div className="col-lg-12 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               Address
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-lg-6 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               Town / City
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>

    //         <div className="col-lg-6 mb-3">
    //           <div className="form-gorup">
    //             <label
    //               className="mont-font fw-500 font-xsss"
    //               htmlFor="comment-name"
    //             >
    //               Postcode
    //             </label>
    //             <input
    //               type="text"
    //               name="comment-name"
    //               className="form-control"
    //             />
    //           </div>
    //         </div>

    //         <div className="col-lg-12 mb-3">
    //           <div className="form-check text-left mb-3">
    //             <input
    //               type="checkbox"
    //               className="form-check-input mt-2"
    //               id="exampleCheck1"
    //             />
    //             <label
    //               className="pt--1 form-check-label fw-500 font-xss text-grey-900"
    //               htmlFor="exampleCheck1"
    //             >
    //               Create an account?
    //             </label>
    //           </div>
    //         </div>
    //       </div>
    //     </form>

    //     <div className="shrink card shadow-none border-0">
    //       <a
    //         href="#"
    //         className="w-100 p-3 mt-3 font-xsss text-center text-white bg-current rounded-lg text-uppercase fw-600 ls-3"
    //       >
    //         Place Order
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default order;
