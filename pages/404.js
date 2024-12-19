import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div class="vertical-wrapper p-150">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 text-center default-page">
                <div class="card w-75 border-0 text-center d-block">
                    <img src="images/error--v3.gif" alt="icon" class="w150 mb-4 ml-auto mr-auto "/>
                    <h1 class="fw-700 text-grey-900 display4-size">Oops! It looks like you're lost.</h1>
                    <p class="text-grey-500 font-xss">The page you're looking for isn't available. Try to search again or use the go to.</p>
                    {/* <a href="index.html" >Home Page</a> */}

                    <Link href="/" className="shrink p-3 w175 bg-current text-white d-inline-block text-center fw-600 font-xssss rounded-lg text-uppercase ls-3">
                    Home Page
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default NotFoundPage