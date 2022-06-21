import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// users
import user1 from "../../../assets/images/users/avatar-2.jpg"

const ProfileMenu = props => {
 // console.log(props,'props')
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)
  const [dropdownOpen, setdropdownOpen] = useState(false)
  const [username, setUserName] = useState("")
  //setusername(props.username)
  useEffect(() => {   
    setUserName(props.username)
    if (localStorage.getItem("")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "") {
        const obj = JSON.parse(localStorage.getItem(""))
       // setusername(obj.displayName)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        // const obj = JSON.parse(localStorage.getItem("authUser"))
        //setusername(obj.username)
      }
    }
  }, [props.success])

  if(props.username)
  {
    try
    {
      if(username!=props.username)
        setUserName(props.username);
    }catch(ex){
      console.log(ex,'ex')
    }
    console.log(props.username,'check props')
  }

  const toggle=()=>{
    setdropdownOpen(!dropdownOpen);   
  }
  const navigateTo=(path)=>{
    if(dropdownOpen)
    {console.log(path)
      
    }
  }
 
  return (
    <React.Fragment>
     <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-2 me-1 fw-bolder font-size-16">
            {username}
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          {/* <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {props.t("profile")}{" "}
          </DropdownItem> */}
           <Link to="/profile" className="dropdown-item">
           <i className="bx bx-user font-size-16 align-middle me-1" />
            <span>{props.t("Profile")}</span>
          </Link>
          {/* <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1"/>
            {props.t("My Wallet")}
          </DropdownItem> */}
          <DropdownItem tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </DropdownItem>
          {/* <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1"/>
            {props.t("Lock screen")}
          </DropdownItem> */}
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown> 
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
  username:PropTypes.any,
  userId:PropTypes.any,
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  const { userId,username } = state.Login.authUser
  
  return { error, success,userId,username }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
