import React from "react"
import rainlglogo from "assets/images/RainCom_Logo.webp"
import Navbar from "components/HorizontalLayout/Navbar"
import ContactsGrid from "./contacts-grid"
import { Link } from "react-router-dom"
import "./landing.scss"

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between mt-3 mb-3">
        <div className="p-2">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={rainlglogo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={rainlglogo} alt="" height="50" />
            </span>
          </Link>
        </div>
        <div className="p-2 mt-3 font-size-18">
          <a href="/login">Login</a> | <a href="/register">Signup</a>
        </div>
      </div>
      <div className="grid">
        <ContactsGrid />
      </div>
    </React.Fragment>
  )
}

export default LandingPage
