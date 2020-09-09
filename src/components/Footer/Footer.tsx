import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <img src="assets/img/logo.png" width="150" />

                  <div className="social-links mt-3">
                    <a href="https://www.facebook.com/eraswap" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/eraswap/" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/eraswap/?hl=en" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/EraSwapTech" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a href="https://medium.com/@eraswap" target="_blank">
                      <i className="fa fa-medium"></i>
                    </a>

                    <a href="https://eraswap.tumblr.com/" target="_blank">
                      <i className="fa fa-tumblr"></i>
                    </a>

                    <a href="https://t.me/eraswap" target="_blank">
                      <i className="fa fa-telegram"></i>
                    </a>

                    <a href="https://github.com/KMPARDS" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                    <a href="https://www.reddit.com/user/EraSwap" target="_blank">
                      <i className="fa fa-reddit"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCGCP4f5DF1W6sbCjS6y3T1g?view_as=subscriber"
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#aboutus">About</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#why">Why</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Other Links</h4>
                <ul>
                  
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a
                      href="http://eraswaptoken.io/pdf/eraswap-terms-conditions.pdf"
                      target="_blank"
                    >
                      Eraswap terms & Conditions
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a
                      href="https://eraswaptoken.io/pdf/es-statuary-warning.pdf"
                      target="_blank"
                    >
                     Statuary Warning
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a
                      href="http://eraswaptoken.io/pdf/era-swap-howey-test-letter-august7-2018.pdf"
                      target="_blank"
                    >
                      Howey Test
                    </a>
                  </li>
                
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
              <h4>&nbsp;</h4>
                <ul>
                  
                  
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="http://eraswaptoken.io/pdf/eraswap_whitepaper.pdf" target="_blank">
                      Era Swap White Paper
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="pdf/charitydapp-terms-conditions.pdf" target="_blank">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="pdf/Charitydapp-privacy-policy.pdf" target="_blank">
                      Privacy Policy{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span></span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </div>
    );
  }
}
