
import React from "react";
import logo from '../contents/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";
class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      'mobileMenu': ''
    })
  }

  ToggleMobileMenu = (e) => {
    this.setState({
      mobileMenu: e
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="container">
            <div className="header_content">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="menus">
                <ul>
                  <li className='active' >Home</li>

                  <li>Tutorials</li>
                  {/* <li>Courses</li> */}
                  <li>Contacts</li>
                  <li>About Us</li>
                </ul>
                <ul>
                  <li>Register</li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
            <div className="mobile_menu">
              <div className="mobile_menu_item">
                <div className="mobile_menu_logo">
                  <img src={logo} alt="" />
                </div>
                <div className="mobile_menu_btn">
                  <p onClick={() => this.ToggleMobileMenu('active')}>
                    <FontAwesomeIcon icon={faBars} />
                  </p>
                </div>
              </div>
              <div className={"mobile_sub_menu " + this.state.mobileMenu}>
                <div className='close_submenu_mobile'>
                  <p onClick={() => this.ToggleMobileMenu('')}>
                    <FontAwesomeIcon icon={faTimes} />
                  </p>
                </div>
                <ul>
                  <li className='active' >Home</li>
                  <li>Tutorials</li>
                  {/* <li>Courses</li> */}
                  <li>Contacts</li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header;