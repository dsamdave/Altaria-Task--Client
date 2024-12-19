import React from 'react'

const summary = () => {
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    //   height: "100vh", // Full height of the viewport
      width: "100%", // Full width
      padding: "50px", // Optional padding
      boxSizing: "border-box", // Include padding in element dimensions
      
    }}
  >
    <div
      className="col-xl-10 col-lg-10"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: "200px",
        paddingBottom: "50px",
      }}
    >
      <div className="order-details">
        <h4 className="mont-font fw-500 font-xxl mb-5">Order Details</h4>
        <div className="table-content table-responsive mb-5 card border-0 bg-greyblue p-5">
          <table className="table order-table order-table-2 mb-0">
            <thead>
              <tr>
                <th className="border-0">Product</th>
                <th className="text-right border-0">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-grey-500 fw-500 font-xsss">
                  Aliquam lobortis est <strong><span>✕</span>1</strong>
                </th>
                <td className="text-right text-grey-500 fw-500 font-xsss">$80.00</td>
              </tr>
              <tr>
                <th className="text-grey-500 fw-500 font-xsss">
                  Auctor gravida enim <strong><span>✕</span>1</strong>
                </th>
                <td className="text-right text-grey-500 fw-500 font-xsss">$60.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="cart-subtotal">
                <th>Subtotal</th>
                <td className="text-right text-grey-900 font-xss fw-600">
                  $56.00
                </td>
              </tr>
              <tr className="shipping">
                <th>Shipping</th>
                <td className="text-right">
                  <span className="text-grey-900 font-xss fw-600">
                    Flat Rate; $20.00
                  </span>
                </td>
              </tr>
              <tr className="order-total">
                <th>Order Total</th>
                <td className="text-right text-grey-900 font-xss fw-600">
                  <span className="order-total-ammount">$56.00</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="checkout-payment card border-0 mb-3 bg-greyblue p-5">
          <form action="#" className="payment-form">
            <div className="payment-group mb-4">
              <div className="payment-radio">
                <input type="radio" value="bank" name="payment-method" id="bank" />
                <label
                  className="payment-label fw-600 text-grey-900 ml-2"
                  htmlFor="cheque"
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div className="payment-info" data-method="bank">
                <p className="font-xsss text-grey-500 pl-4">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="payment-group mb-4">
              <div className="payment-radio">
                <input
                  type="radio"
                  value="cheque"
                  name="payment-method"
                  id="cheque"
                />
                <label className="payment-label fw-600 text-grey-90" htmlFor="cheque">
                  Cheque payments
                </label>
              </div>
              <div
                className="payment-info cheque hide-in-default"
                data-method="cheque"
                style={{ display: "none" }}
              >
                <p className="font-xsss text-grey-500 pl-4">
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
            </div>
            <div className="payment-group mb-0">
              <div className="payment-radio">
                <input type="radio" value="cash" name="payment-method" id="cash" />
                <label className="payment-label fw-600 text-grey-90" htmlFor="cash">
                  Cash on Delivery
                </label>
              </div>
              <div
                className="payment-info cash hide-in-default"
                data-method="cash"
                style={{ display: "none" }}
              >
                <p className="font-xsss text-grey-500 pl-4">
                  Pay with cash upon delivery.
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="clearfix"></div>
  
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
  
  )
}

export default summary