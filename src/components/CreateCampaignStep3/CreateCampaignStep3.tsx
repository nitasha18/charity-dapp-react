import React, { Component } from 'react';
import './CreateCampaignStep3.css';
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
export class CreateCampaignStep3 extends Component<State> {
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
            <section className="inner-page">
              <div className="container">
                <div className="row justify-content-center ">
                  <div
                    className="col-lg-12 text-center mx"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <h3>Explore Campaign Step 3</h3>
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
                            <Form.Label className="font-weight-bold">Name Your Benificery</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                          
                          <label className="font-weight-bold">Attach Files</label>
                              <div className="row">
                                  
                                  <div className="col-md-4">
                                    <form method="post" action="#" id="#">
                                        <div className="form-group files">
                                            <label>Upload Your File </label>
                                            <input type="file" className="form-control" multiple={true}/>
                                          </div>
                                      </form>
                                </div>
                                <div className="col-md-4">
                                    <form method="post" action="#" id="#">
                                        <div className="form-group files color">
                                            <label>Upload Your File </label>
                                            <input type="file" className="form-control" multiple={true}/>
                                          </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                  <form method="post" action="#" id="#">
                                      <div className="form-group files color">
                                          <label>Upload Your File </label>
                                          <input type="file" className="form-control" multiple={true}/>
                                        </div>
                                  </form>
                              </div>
                              
                            </div>
                           <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">About Benificery</Form.Label>
                            <textarea className="form-control" name="message" rows={3}   placeholder="Message"/>
                          </Form.Group>
                          
                          

                          
                          <Link to="/CreateCampaignStep2"  className="mb10 btn btn-dark">
                            Previous
                          </Link>
                          <Link to="/CreateCampaignStep4"  className="mb10 ml10 btn btn-dark">
                            Next
                          </Link>
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
