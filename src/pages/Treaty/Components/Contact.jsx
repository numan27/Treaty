// import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import IMAGES from "../../../assets/images";

function Contact() {
  return (
    <div id="contact" className="container py-5 mt-5 mb-4">
      <Row>
        <Col xl={4} lg={4} md="12"  className="">
          <div className="contactUs-headings">
            <h4 className="mb-0" style={{ color: "#274174" }}>
              STAY IN TOUCH
            </h4>
            <h1 style={{ fontSize: "45px" }}>Contact us</h1>
            <p className="dash pb-4 fw-bold mt-n1"> <strong>__ __</strong></p>
          </div>

          <div className="contactUs-info d-flex align-items-start flex-column">
            <div className="d-flex py-3">
              <img className="contact-png me-5" src={IMAGES.PHONE} alt="" />
              <p className="formText">1-233-345-3453</p>
            </div>
            <div className="d-flex py-3">
              <img className="contact-png me-5" src={IMAGES.ENVELOE} alt="" />
              <p className="formText">support@jointreaty.com</p>
            </div>
            <div className="d-flex pt-3 pb-4">
              <img className="contact-png me-5" src={IMAGES.POINTER} alt="" />
              <p className="formText">3782 Shady Pine Drive USA</p>
            </div>
            <ul className="list-unstyled d-flex mt-2">
              <li>
                <img className="social_png me-4" src={IMAGES.FB} alt="" />
              </li>
              <li>
                <img className="social_png me-4" src={IMAGES.TWITTER} alt="" />
              </li>
              <li>
                <img
                  className="social_png me-4"
                  src={IMAGES.INSTAGRAM}
                  alt="" />
              </li>
              <li>
                <img className="social_png me-4" src={IMAGES.YOUTUBE} alt="" />
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={8} lg={8} md={12}>
          <div className="contactus-form border rounded-1 border-3">
            <Row className="p-5 ">
              <Col md={6} sm={12}>
                <Form.Control
                  className="rounded-0 my-3 py-3"
                  type="email"
                  placeholder="Name *" />
                <Form.Control
                  className="rounded-0 my-3 py-3"
                  type="email"
                  placeholder="Email *" />
                <Form.Control
                  className="rounded-0 my-3 py-3"
                  type="email"
                  placeholder="Subject *" />
              </Col>
              <Col md={6} sm={12}>
                <Form.Control
                  as="textarea"
                  className="rounded-0 my-3 "
                  placeholder="Message *"
                  style={{ height: "205px" }} />
                <div className="float-right mt-4">
                  <Button className="rounded-1 form-btn btn-md h-100">
                    SEND MESSAGE
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
