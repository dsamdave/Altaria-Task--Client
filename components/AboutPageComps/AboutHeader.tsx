import React from 'react'

const AboutHeader = () => {
  return (
    <div className="parallax-wrapper pb-7 pt-7" style={{backgroundImage: 'url("/images/parallax.jpg")'}} >
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
                <h2 className="text-white fw-600 display2-size display2-size-sm">About Us</h2>
                <p className="text-grey-400 font-xsss mb-4">Everything you need to know about us</p>
               
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutHeader