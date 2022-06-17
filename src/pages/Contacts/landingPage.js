import React from "react"
import rainlglogo from "assets/images/RainCom_Logo.webp"
import Navbar from "components/HorizontalLayout/Navbar"
import ContactsGrid from "./contacts-grid"
import { Link } from "react-router-dom"
import "./landing.scss"

const LandingPage = () => {
  return (
    <React.Fragment>
          <div className=" navbar bg-light d-flex justify-content-between  mb-3">
            {/* <div className="p-2 "> */}
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <div className="image">
                    <img src={rainlglogo} alt="" height="22" />
                  </div>
                </span>
                <span className="logo-lg">
                  <div className="image1">
                    <img src={rainlglogo} alt="" height="50" />
                  </div>
                </span>
              </Link>
            {/* </div> */}
            <div className="auth">
              <Link to="/login" className="text-truncate">
                Login |{" "}
              </Link>
              <Link to="/register" className="text-truncate">
                Signup
              </Link>
            </div>
            <div className="attorneyauth">
              <Link to="/attorneylogin" className="text-truncate">
                AttorneyLogin |{" "}
              </Link>
              <Link to="/attorneyregister" className="text-truncate">
                AttorneySignup
              </Link>
            </div>
          </div>
      <div className="landing">
        <ContactsGrid />
      </div>
    </React.Fragment>
  )
}

export default LandingPage
