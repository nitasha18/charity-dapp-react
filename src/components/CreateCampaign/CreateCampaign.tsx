import React, { Component } from 'react';
import './CreateCampaign.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button,Card,Col, } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Sidebar } from '../Sidebar/';
type State = {
  bunchModal: boolean;
};
export class CreateCampaign extends Component<State> {
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
                  <div className="col-lg-12 text-center mx" data-aos="fade-right" data-aos-delay="100">
                    <h3>Explore Campaign</h3>
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
                        <Form.Label className="font-weight-bold">Full Name</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        
                      </Form.Group>
                      <Form.Row>
                        <Col  lg={6} >
                          <Form.Label className="font-weight-bold">Age</Form.Label>
                          <Form.Control type="email" placeholder="" />
                        </Col>

                        <Col lg={6}>
                          <Form.Label className="font-weight-bold">Year</Form.Label>
                          <Form.Control type="password" placeholder="" />
                        </Col>
                      </Form.Row>


                      <Form.Group controlId="formBasicPassword" className="mt20">
                          <div  className="form-check form-check-inline">
                            <input  className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                            <label  className="form-check-label" >Male</label>
                          </div>
                          <div  className="form-check form-check-inline">
                            <input  className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label  className="form-check-label">Female</label>
                          </div>
                          <div  className="form-check form-check-inline">
                            <input  className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label  className="form-check-label" >Other</label>
                          </div>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="font-weight-bold">Address</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        
                      </Form.Group>

                      <Link to="/CreateCampaignStep2"  className="mb10 btn btn-dark">Next</Link>
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
