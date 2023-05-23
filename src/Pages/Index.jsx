import React from "react";
import thumbnail from "../contents/images/thumbnail.jpeg";
import author from "../contents/images/author.png";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <React.Fragment>
      <div className="home_page">
        <div className="container">
          <div className="home_page_container">
            <div className="intro_me">
              <h3>
                {/* Vanny's  */}
                {/* <FaBeer /> */}
                Blog
              </h3>
            </div>
            <div className="home_page_suggest">
              <ul>
                <li>
                  Javascript <i className="fas fa-wrench"></i>{" "}
                </li>
                <li>React JS</li>
                <li>PHP</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className="home_page_search">
              <FontAwesomeIcon icon={faSearch} className="iconSearch" />
              <input
                className="form-control"
                placeholder="Search Title"
                type="text"
              />
            </div>
            <div className="home_page_content">
              <div className="hompage_content_left">
                <div className="profile">
                  <div className="profile_img">
                    <img src={author} alt="" />
                  </div>
                  <div className="profile_info ">
                    <h5>Hello I'm Author</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="profile_socials">
                    {/* <p className='facebook'><FaFacebook /></p>
                    <p className='youtube'><FaYoutube /></p>
                    <p className='telegram'><FaTelegram /></p> */}

                    <FaFacebook className="facebook" />
                    <FaYoutube className="youtube" />
                    <FaTelegram className="telegram" />
                  </div>
                </div>

                {/* Prepare */}
                <div className="home_page_ads ads_250x350">
                  <div className="home_page_ads_container">
                    <div className="home_page_ads_content">
                      <div className="home_page_ads_item">
                        {/* <div className="profile">
                          <div className="profile_img">
                            <img src={author} alt="" />
                          </div>
                          <div className="profile_info ">
                            <h5>Hello I'm Author</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                          <div className="profile_socials">
                            <p>Facebook</p>
                            <p>Youtube</p>
                            <p>Telegram</p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="homepage_content_item">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={thumbnail}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">What's Java Script</h5>
                  </div>
                </div>

                <div className="card">
                  <img
                    className="card-img-top"
                    src={thumbnail}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">What's Java Script</h5>
                  </div>
                </div>

                <div className="card">
                  <img
                    className="card-img-top"
                    src={thumbnail}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">What's Java Script</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="homepage_content_buttons">
              <div className="homepage_content_buttons_container">
                <div className="homepage_content_buttons_content">
                  <button>Prevous</button>
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
