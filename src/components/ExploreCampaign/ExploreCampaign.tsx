import React, { Component } from 'react';
import './ExploreCampaign.css';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Card,
  Col,
  InputGroup,
  FormControl,
  ProgressBar,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Sidebar } from '../Sidebar';
type State = {
  bunchModal: boolean;
};
export class ExploreCampaign extends Component<State> {
  state: State = {
    bunchModal: false,
  };
  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };
  componentDidMount() {}
  render() {
    return (
      <>
        <main id="main">
          <div className="inner-page">
            <section className="breadcrumbs">
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Explore Campaign</h2>
                  <ol>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Explore Campaign</li>
                  </ol>
                </div>
              </div>
            </section>
            <section className="inner-page">
              <div className="container">
                <div className="row">
                  <div className="col-12 " data-aos="zoom-in" data-aos-delay="200">
                    <Card className="shadow">
                      <Card.Body>
                        <div className="services about">
                          <div className="container" data-aos="fade-up">
                            <div className="row">
                            <div
                                className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-md-0"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                              >
                                <div className="icon-box cha-list-box">
                                  <div className="cha-list-box-img">
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                              </div><div
                                className="col-lg-4 col-md-4 d-flex align-items-stretch mt-4 mt-md-0"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                              >
                                <div className="icon-box cha-list-box">
                                  <div className="cha-list-box-img">
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                                    <img
                                      src="assets/img/dubi.jpg"
                                      width="100%"
                                      className="text-left"
                                    />
                                  </div>
                                  <div className="cha-list-box-text mt10">
                                    <h4>
                                      <a href="/CampaignDetails">
                                        Children in Need of Supplies Preventing COVID 19
                                      </a>
                                    </h4>
                                    <div className="brand-color-1-text text-left amount-raised">
                                      <strong>₹2,171,709 </strong>
                                      <span className="text-dark">Raised out of ₹ 6,00,890</span>
                                    </div>
                                    <ProgressBar animated now={45} variant="info" />
                                    <div className="cha-list-box-footer d-flex flex-column flex-md-row mt10">
                                      <div className="timeleft">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> 8 Days
                                        Left{' '}
                                      </div>
                                      <div className="Suppoter ml-auto">
                                        <i
                                          className="fa fa-heart text-danger"
                                          aria-hidden="true"
                                        ></i>{' '}
                                        1246 Supporters{' '}
                                      </div>
                                    </div>
                                    <div className="kyclevel d-flex flex-column flex-md-row mt20">
                                      <div className="kyc-level-text font-weight-bold">
                                        KYC Level{' '}
                                      </div>
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
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}
