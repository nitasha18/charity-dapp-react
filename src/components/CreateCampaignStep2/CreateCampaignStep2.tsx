import React, { Component } from 'react';
import './CreateCampaignStep2.css';
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
export class CreateCampaignStep2 extends Component<State> {
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
                    <h3>Explore Campaign step 2</h3>
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
                            <Form.Label className="font-weight-bold">Raising Funds For </Form.Label>
                            <Form.Control as="select" custom>
                              <option>Medical</option>
                              <option>Education</option>
                              <option>Memorial</option>
                              <option>Others</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold" > I want ot Raise</Form.Label>
                            
                            <Form.Label htmlFor="inlineFormInputGroup" className="font-weight-bold" srOnly>
                              I want ot Raise
                            </Form.Label>
                            <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                <InputGroup.Text>RS.</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup" placeholder="" />
                            </InputGroup>
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold" >Name of the Organization</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                          
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">Address Of Organization</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>

                          
                          <Link to="/CreateCampaign"  className="mb10 btn btn-dark">
                            Previous
                          </Link>
                          <Link to="/CreateCampaignStep3"  className="mb10 ml10 btn btn-dark">
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
