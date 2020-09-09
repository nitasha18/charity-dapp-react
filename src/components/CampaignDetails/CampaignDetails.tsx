import React, { Component } from 'react';
import './CampaignDetails.css';
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
  bunchModal1: boolean;
};
export class CampaignDetails extends Component<State> {
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
        <main id="main">
          <div className="inner-page">
            <section className="breadcrumbs">
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Campaign Details</h2>
                  <ol>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Campaign Details</li>
                  </ol>
                </div>
              </div>
            </section>
            <section id="portfolio-details" className="portfolio-details">
              <div className="container" data-aos="fade-up">
                <div className="portfolio-details-container">
                  <div className="row justify-content-center ">
                    <div
                      className="col-lg-8 pt-4 pt-lg-0 order-2 order-lg-1 content text-center mx"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <h3 className="font-weight-bold">
                        Children in Need of Supplies Preventing COVID 19
                      </h3>
                    </div>
                  </div>
                  <div className="row mt40">
                    <div className="col-lg-8">
                      <Card className="shadow">
                        <Card.Body>
                          <div className="owl-carousel portfolio-details-carousel mt20">
                            <img src="assets/img/dubi.jpg" className="img-fluid" alt="" />
                            <img src="assets/img/dubi.jpg" className="img-fluid" alt="" />
                            <img src="assets/img/dubi.jpg" className="img-fluid" alt="" />
                          </div>

                          <div className="portfolio-description">
                            <h2>About the Fundraiser</h2>
                            <p className="alert alert-warning alert-dismissible fade show">
                              *CharityDApp is not charging any fee on this fundraiser*
                            </p>
                            <p>
                              Karwan e Mohabbat and a team of volunteers are reaching out to the
                              most vulnerable people and communities who find themselves stranded
                              without work, food and home during the lockdown announced by the
                              Indian government. As millions of daily wage labourers and
                              working-class people find themselves without work, food and shelter,
                              the war against the COVID-19 is threatening to become a humanitarian
                              and economic crisis beyond imagination. These are the people who are
                              at most risk of severe ill-health and death due to starvation. There
                              are sections of the population that live on the edge even in times of
                              apparent “normalcy”. When faced with a crisis like the Corona induced
                              lockdown, it is they who are the most likely to fall off the edge.
                            </p>
                            <div className="alert alert-secondary" role="alert">
                              <h4 className="Font-weight-bold">
                                Followon SwappersWall:{' '}
                                <a href="" className="">
                                  https://swapperswall.com
                                </a>
                              </h4>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-lg-4">
                      <div className="icon-box cha-list-box">
                        <div className="cha-list-box-">
                          <Button
                            onClick={this.handleShow}
                            className="get-started-btn scrollto dontate-btn text-center btn-lg btn-yellow btn-block"
                          >
                            Donate Now
                          </Button>
                          <div className="brand-color-1-text text-left amount-raised">
                            <h2>₹2,171,709 </h2>
                            <small className="text-dark">Raised out of ₹ 6,00,890 Goal</small>
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
                      <div className="portfolio-info">
                       
                            <ul className="com-list">
                                <li>
                                    <div className="pull-left">
                                            <span className="profile-image center-block initialsProfile">JM</span>	
                                    </div>
                                      <div className="backers-details">
                                          <small className="donor-name font-weight-bold"> Campaigner 	</small>
                                          <span className="donor-name text-success"> Alliance for Progressive Indians</span>
                                          <span className="contributed-amt pull-right">  <img  src="assets/img/verifiednew.png" width="45px" className="text-left"/></span>
                                          
                                    </div>
                                </li>
                                <li>
                                    <div className="pull-left">
                                            <span className="profile-image center-block initialsProfile">JM</span>	
                                    </div>
                                    <div className="backers-details">
                                          <small className="donor-name font-weight-bold"> Benefiting NGO 	</small>
                                          <span className="donor-name text-success"> Karwan e Mohabbat </span>
                                          <span className="contributed-amt pull-right">  <img  src="assets/img/verifiednew.png" width="45px" className="text-left"/></span>
                                    </div>
                                </li>
                            </ul>
                      </div>
                      <div className="portfolio-info">
                        <h3><i className="fa fa-trophy" aria-hidden="true"></i> Top Donors</h3>

                      
                        <ul className="com-list">
                          <li>
                              <div className="pull-left">
                                      <span className="profile-image center-block initialsProfile">JM</span>	
                              </div>
                                <div className="backers-details">
                                    <span className="donor-name"> Jitendra Mohan Choudhry	</span>
                                    <span className="contributed-amt pull-right"><i className="fa fa-inr"></i> 5,000                                    				</span>
                              </div>
                          </li>
                          <li>
                              <div className="pull-left">
                                      <span className="profile-image center-block initialsProfile">JM</span>	
                              </div>
                                <div className="backers-details">
                                    <span className="donor-name"> Jitendra Mohan Choudhry	</span>
                                    <span className="contributed-amt pull-right"><i className="fa fa-inr"></i> 5,000                                    				</span>
                              </div>
                          </li>
                          <li>
                              <div className="pull-left">
                                      <span className="profile-image center-block initialsProfile">JM</span>	
                              </div>
                                <div className="backers-details">
                                    <span className="donor-name"> Jitendra Mohan Choudhry	</span>
                                    <span className="contributed-amt pull-right"><i className="fa fa-inr"></i> 5,000                                    				</span>
                              </div>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="mt40">
              <div className="container">
                <div className="row">
                  <div className="col-12 " data-aos="zoom-in" data-aos-delay="200">
                  <h5 className="font-weight-bold ">People like you donated to these fundraisers</h5>
                    <Card className="shadow mt20">
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
                                      <a href="">
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
                                      <a href="">
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
                                      <a href="">
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
            </div>
            </section>

          
          </div>

          <Modal show={this.state.bunchModal} onHide={this.handleClose} className="com-modal">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
              <div className="alert alert-secondary" role="alert">
                <h4 className="Font-weight-bold">
                  WALLET ADDRESS: <small className="">0X34C4204B0F808103F69EE547AB9567E2D0</small>
                </h4>
              </div>
              <Form inline>
                <Form.Group>
                  <Form.Label htmlFor="">Amount </Form.Label>
                  <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                    Username
                  </Form.Label>
                  <InputGroup className="ml10">
                    <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                    <InputGroup.Prepend>
                      <InputGroup.Text>ES</InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>
              </Form>
              <Button
                className="btn btn-default btn-yellow mb20 text-white mt20"
                onClick={this.handleClose}
              >
                Donate Now
              </Button>
            </Modal.Body>
          </Modal>

          <Modal show={this.state.bunchModal1} onHide={this.handleClose1} className="com-modal">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
              <h2 className="font-weight-bold mb20 text-info">>Congratulations!!!</h2>
              <h5 className="font-weight-bold mb20">You Have Donated To This Active Campaign</h5>
              <a
                href="https://eraswap.life/access-my-wallet"
                className="btn btn-default btn-yellow mb20 text-white"
                onClick={this.handleClose1}
              >
                OK
              </a>
            </Modal.Body>
          </Modal>
        </main>
      </>
    );
  }
}
