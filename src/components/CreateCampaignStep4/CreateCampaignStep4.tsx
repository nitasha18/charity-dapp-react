import React, { Component } from 'react';
import './CreateCampaignStep4.css';
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
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Sidebar } from '../Sidebar/';
type State = {
  bunchModal: boolean;
};
export class CreateCampaignStep4 extends Component<State> {
  state: State = {
    bunchModal: false,
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
  componentDidMount() {}
  render() {
    return (
      <>
        <main id="main">
          <div className="inner-page">
            <section className="inner-page">
              <div className="container">
                <div className="row justify-content-center ">
                  <div
                    className="col-lg-12 text-center mx"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <h3>Explore Campaign Step 4</h3>
                  </div>
                </div>
                <div className="row mt40">
                  <div
                    className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto  mb40 "
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <Card className="shadow">
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">
                              Stakes to be delegated fir the charity
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="s4d5as4d5a4sd54asd4a56sd4a6sfsd5sd5s4dfs4df5sd4f56sd"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">
                              Delegated Time Period for the stake
                            </Form.Label>
                            <Form.Control as="select" custom>
                              <option>Month</option>
                              <option>Year</option>
                              <option>Days</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">
                              KYC Level (Prompted to have atleast KYC Level 2)
                            </Form.Label>
                            <div className="clear"></div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
                                value="option1"
                              />
                              <label className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                value="option2"
                              />
                              <label className="form-check-label">No</label>
                            </div>
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">Review Perid</Form.Label>
                            <Form.Control as="select" custom>
                              <option>Month</option>
                              <option>Year</option>
                              <option>Days</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">About Benificery</Form.Label>
                            <textarea
                              className="form-control"
                              name="message"
                              rows={3}
                              placeholder="Message"
                            />
                          </Form.Group>

                          <Button className="mb10 ml10 btn btn-dark" onClick={this.handleShow}>
                            Submit
                          </Button>

                          <Modal
                            show={this.state.bunchModal}
                            onHide={this.handleClose}
                            className="com-modal"
                          >
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body className="text-center">
                            <h2 className="font-weight-bold mb20 text-info">Congratulations!!!</h2>
                              <h5 className="font-weight-bold mb20">You have successfully created your Campaign</h5>
                              <a
                                href="/CampaignDetails"
                                className="btn btn-default btn-yellow mb20 text-white"
                                onClick={this.handleClose}
                              >
                                OK
                              </a>
                            </Modal.Body>
                          </Modal>
                        </Form>
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
