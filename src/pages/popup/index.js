import React from "react"
import { Link } from "react-router-dom"
import rainlogo from "assets/images/RainCom_Logo.webp"
import Footer from "components/HorizontalLayout/Footer"

const Popup = () => {
  return (
    <React.Fragment>
      <div className="d-none d-lg-block ps-lg-5 ms-lg-5">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src={rainlogo} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src={rainlogo} alt="" height="50" />
              </span>
            </Link>

            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src={rainlogo} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src={rainlogo} alt="" height="50" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 p-5 ml-50 bg-primary bg-soft text-primary rounded text-center">
        <p className="font-size-16 lg-5 ">
          Welcome to the Raincomputing , featuring detailed profiles of
          attorneys across the United States who exhibit excellence in their
          practice. To get started
        </p>
        <Link to ="/login">
        <div className="text-center font-size-24 font-weight-600 text-black">
            <u>Login </u>
        </div>
        </Link>
        
      </div>
    </React.Fragment>
  )
}

export default Popup
