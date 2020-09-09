import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, ProgressBar,Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
type State = {
  bunchModal: boolean;
  bunchModal1: boolean,
};
export class Home extends Component<State> {
  state: State = {
    bunchModal: false,
    bunchModal1: false,
  };
  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };
  handleShow = () => {
    this.setState({
      bunchModal: true,
    });
  };


  handleClose1 = () => {
    this.setState({
      bunchModal1: false,
    });
  };
  handleShow1 = () => {
    this.setState({
      bunchModal1: true,
    });
  };

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="al-hero-header">
          <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                <div className="col-xl-9 col-lg-9">
                  <h1>
                    WILL YOU SPARE SOME <span className="">ERA SWAP </span>
                    <br />
                    TO SHOW YOU CARE
                  </h1>

                  <br />
                  <Button className="get-started-btn btn-yellow btn btn-lg scrollto"  onClick={this.handleShow}>
                    Explore Campaigns
                  </Button>
                  <Link to="" className="get-started-btn btn scrollto btn-lg"  onClick={this.handleShow1}>
                    Create Your Campaign
                  </Link>
                </div>
              </div>
            </div>
          </section>


         <Modal show={this.state.bunchModal} onHide={this.handleClose} className="com-modal" >
            <Modal.Header closeButton>
             
            </Modal.Header>
            <Modal.Body className="text-center" >
              <h5 className="font-weight-bold mb20">Please First Connect your Wallet for more details / To Donate OR Create Campaigns</h5>
              <Link to="/ExploreCampaign" className="btn btn-default btn-yellow mb20 text-white"  onClick={this.handleClose}>
                Connect To Wallet
            </Link>
            </Modal.Body>
          </Modal> 


          <Modal show={this.state.bunchModal1} onHide={this.handleClose1} className="com-modal">
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body className="text-center" >
                <h5 className="font-weight-bold mb20">To create your Charity Campaign follow these simple steps</h5>
                <ul>
                  <li><span className="font-weight-bold">Step 1:</span> Go to www.kycdapp.com</li>
                  <li><span className="font-weight-bold">Step 1:</span> Complete your KYC Level 1</li>
                  <li><span className="font-weight-bold">Step 1:</span> Complete your KYC Level 2</li>
                </ul>
                <p>by listing details about your Charity Campaign</p>
                <a href="https://kycdapp.com/" target="_blank" className="btn btn-default btn-yellow mb20 mb20 text-white"  onClick={this.handleClose1}>
                Go to KYC DApp</a>
                <Link to="/CreateCampaign" className="btn btn-default btn-yellow mb20 mb20 ml10 text-white"  onClick={this.handleClose1}>
                Create Your Campaign</Link>
                <div className="alert alert-info" role="alert">
                <p><span className="font-weight-bold ">NOTE:</span> If you want to list more than 1 charity campaign, then you can list on KYC level 2</p>
                
                </div>
              </Modal.Body>
          </Modal>



        </div>
        <main id="main">
          <section id="services" className="services about">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-center ">
                <div
                  className="col-lg-8 pt-4 pt-lg-0 order-2 order-lg-1 content text-center mx"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h3>Active Campaigns</h3>
                </div>
              </div>
              <div className="row mt40">
                <div
                  className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box cha-list-box">
                    <div className="cha-list-box-img">
                      <img src="assets/img/dubi.jpg" width="100%" className="text-left" />
                    </div>
                    <div className="cha-list-box-text mt10">
                      <h4>
                        <a href="/CampaignDetails">Children in Need of Supplies Preventing COVID 19</a>
                      </h4>
                      <div className="brand-color-1-text text-left amount-raised">
                        <strong>₹2,171,709 </strong>
                        <span className="text-dark">Raised out of ₹ 6,00,890</span>
                      </div>
                      <ProgressBar animated now={45} variant="info" />
                      <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                        <div className="timeleft">
                          <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days Left{' '}
                        </div>
                        <div className="Suppoter ml-auto">
                          <i className="fa fa-heart text-danger" aria-hidden="true"></i> 1246
                          Supporters{' '}
                        </div>
                      </div>
                      <div className="kyclevel d-flex flex-column flex-md-row mt20">
                        <div className="kyc-level-text font-weight-bold">KYC Level </div>
                        <div className="">
                          <img
                            src="assets/img/kyc-level-1.png"
                            width="45px"
                            className="text-left"
                          />
                          <img
                            src="assets/img/kyc-level-2.png"
                            width="45px"
                            className="text-left"
                          />
                          <img
                            src="assets/img/kyc-level-3.png"
                            width="45px"
                            className="text-left"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box cha-list-box">
                    <div className="cha-list-box-img">
                      <img src="assets/img/dubi.jpg" width="100%" className="text-left" />
                    </div>
                    <div className="cha-list-box-text mt10">
                      <h4>
                        <a href="/CampaignDetails">Children in Need of Supplies Preventing COVID 19</a>
                      </h4>
                      <div className="brand-color-1-text text-left amount-raised">
                        <strong>₹2,171,709 </strong>
                        <span className="text-dark">Raised out of ₹ 6,00,890</span>
                      </div>
                      <ProgressBar animated now={45} variant="info" />
                      <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                        <div className="timeleft">
                          <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days Left{' '}
                        </div>
                        <div className="Suppoter ml-auto">
                          <i className="fa fa-heart text-danger" aria-hidden="true"></i> 1246
                          Supporters{' '}
                        </div>
                      </div>
                      <div className="kyclevel d-flex flex-column flex-md-row mt20">
                        <div className="kyc-level-text font-weight-bold">KYC Level </div>
                        <div className="">
                          <img
                            src="assets/img/kyc-level-1.png"
                            width="45px"
                            className="text-left"
                          />
                          <img
                            src="assets/img/kyc-level-2.png"
                            width="45px"
                            className="text-left"
                          />
                          <img
                            src="assets/img/kyc-level-3.png"
                            width="45px"
                            className="text-left"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box cha-list-box">
                    <div className="cha-list-box-img">
                      <img src="assets/img/dubi.jpg" width="100%" className="text-left" />
                    </div>
                    <div className="cha-list-box-text mt10">
                      <h4>
                        <a href="/CampaignDetails">Children in Need of Supplies Preventing COVID 19</a>
                      </h4>
                      <div className="brand-color-1-text text-left amount-raised">
                        <strong>₹2,171,709 </strong>
                        <span className="text-dark">Raised out of ₹ 6,00,890</span>
                      </div>
                      <ProgressBar animated now={45} variant="info" />
                      <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                        <div className="timeleft">
                          <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days Left{' '}
                        </div>
                        <div className="Suppoter ml-auto">
                          <i className="fa fa-heart text-danger" aria-hidden="true"></i> 1246
                          Supporters{' '}
                        </div>
                      </div>
                      <div className="kyclevel d-flex flex-column flex-md-row mt20">
                        <div className="kyc-level-text font-weight-bold">KYC Level</div>
                        <div className="">
                          <img
                            src="assets/img/kyc-level-1.png"
                            width="45px"
                            className="text-left"
                          />
                          <img
                            src="assets/img/kyc-level-2.png"
                            width="45px"
                            className="text-left"
                          />
                          <img
                            src="assets/img/kyc-level-3.png"
                            width="45px"
                            className="text-left"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="aboutus" className="features about">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-center ">
                <div
                  className="col-lg-8 pt-4 pt-lg-0 order-2 order-lg-1 content text-center mx"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h3>About us</h3>
                </div>
              </div>
              <div className="row mt40">
                <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                  <h3 className="icon-box mt-5 mt-lg-0">
                    {' '}
                    Initiating the transparent P2P Network for Charitable Causes.{' '}
                  </h3>
                  <p className="icon-box mt10 mt-lg-0">
                    Charity DApp is powered by Era Swap DAO. Era Swap is the utility token that
                    powers multiple decentralized P2P Platforms. Charity DApp is a digital platform
                    built with the objective of re-imagining a non-profit organization by merging
                    Smart Contracts, and distributed blockchain technology – Era Swap Decentralized
                    Blockchain Network.
                  </p>

                  <div className="icon-box  mt40" data-aos="zoom-in" data-aos-delay="150">
                    <i className="bx bx-receipt"></i>
                    <h4>Our Strategic</h4>
                    <p>
                      {' '}
                      1. Increase Accountability & Transparency
                      <br />
                      2. P2P Charity Transfers i.e. No middlemen
                      <br />
                      3. Multi-level Blockchain KYC Verification
                    </p>
                  </div>

                  <div className="icon-box mt20" data-aos="zoom-in" data-aos-delay="150">
                    <i className="bx bx-shield"></i>
                    <h4>Goals</h4>
                    <p>
                      1. Re-design Charity with Decentralization
                      <br />
                      2. Adopt Innovative Techs
                      <br />
                      3. Make Charity Available for Needy
                      <br />
                    </p>
                  </div>
                </div>
                <div
                  className="image col-lg-6"
                  style={{ backgroundImage: 'url("assets/img/tree.png")' }}
                  data-aos="fade-right"
                ></div>
              </div>
            </div>
          </section>

          <section id="why" className="services about">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-center ">
                <div
                  className="col-lg-8 pt-4 pt-lg-0 order-2 order-lg-1 content text-center mx"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h3>Why Charity DApp?</h3>
                </div>
              </div>
              <div className="row mt40">
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <img src="assets/img/blockchain-transparency-01.png" width="150" />
                    <h4>
                      <a href="">Blockchain Transparency</a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <img src="assets/img/contribute-with-donations-rates-02.png" width="150" />
                    <h4>
                      <a href=""> Contribute with Donations or Rates</a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <img src="assets/img/supported-by-era-wap-charity pool-03.png" width="150" />
                    <h4>
                      <a href=""> Supported by Era Swap Charity Pool</a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <img src="assets/img/automated-escrow-04.png" width="150" />
                    <h4>
                      <a href=""> Automated Escrow </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row mt40">
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <img src="assets/img/withdraw-donations-hassle-free-05.png" width="150" />
                    <h4>
                      <a href=""> Withdraw Donations Hassle-free</a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <img src="assets/img/easy-to-manage-promote-06.png" width="150" />
                    <h4>
                      <a href=""> Easy-To-Manage & Promote</a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <img src="assets/img/global-payment-support-07.png" width="150" />
                    <h4>
                      <a href=""> Global Payment Support</a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <img src="assets/img/non-manipulated-reviews-ratings-08.png" width="150" />
                    <h4>
                      <a href=""> Non-manipulated reviews and ratings </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="al-hero-header mobile-app">
            <section id="hero" className="d-flex align-items-center justify-content-center">
              <div className="container" data-aos="fade-up">
                <div className="row" data-aos="fade-up" data-aos-delay="150">
                  <div className="col-lg-5">
                    <img src="assets/img/mobile-app.png" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-7 download-app-con text-left">
                    <h2>SIGN UP FOR AMAZING OFFERS</h2>
                    <p>EXCLUSIVE ACCESS FOR OFFERS AND PROMOTIONS</p>
                    <div className=" footer-newsletter">
                      <form action="" method="post">
                        <input type="email" name="email" />
                        <input type="submit" value="Subscribe" className="btn-primary" />
                      </form>
                    </div>
                    <p>Faster, easier access to car rental services </p>
                    <h1>DOWNLOAD OUR APP</h1>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.eraswaponeapp&hl=en"
                      target="_blank"
                      className=""
                    >
                      <img
                        src="assets/img/google-play-btn.png"
                        className="img-fluid"
                        alt=""
                        width="210"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
      </>
    );
  }
}
