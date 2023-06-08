import React from "react";
import logo from "../contents/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Outlet } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenu: "",
    };
  }

  ToggleMobileMenu = (e) => {
    this.setState({
      mobileMenu: e,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="container">
            <div className="header_content">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="menus">
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  {/* <li className="active">Home</li> */}
                  <li><NavLink to="/tutorial">Tutorials</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
                <ul>
                  <li>Register</li>
                  <li><Link to="/login">Login</Link> </li>
                </ul>
              </div>
            </div>
            <div className="mobile_menu">
              <div className="mobile_menu_item">
                <div className="mobile_menu_logo">
                  <img src={logo} alt="" />
                </div>
                <div className="mobile_menu_btn">
                  <p onClick={() => this.ToggleMobileMenu("active")}>
                    <FontAwesomeIcon icon={faBars} />
                  </p>
                </div>
              </div>
              <div className={"mobile_sub_menu " + this.state.mobileMenu}>
                <div className="close_submenu_mobile">
                  <p onClick={() => this.ToggleMobileMenu("")}>
                    <FontAwesomeIcon icon={faTimes} />
                  </p>
                </div>
                <ul>
                  <li><NavLink to="/"> Home</NavLink></li>
                  <li><NavLink to="/tutorial">Tutorials</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
