import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Facebook from "../../power-x-gym/Image & Icon/bxl-facebook.png";
import Instagram from "../../power-x-gym/Image & Icon/bxl-instagram.png";
import Twitter from "../../power-x-gym/Image & Icon/bxl-twitter.png";
import YouTube from "../../power-x-gym/Image & Icon/bxl-youtube.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-title">
          <Col xs={12} sm={6} md={3} className='pb-4'>
            <h4 style={{ color: "white" }}>
              POWER <span style={{ color: "#fcd842" }}>X</span>
            </h4>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h6>Need Help</h6>
            <ul className="footer-link">
              <li>
                <NavLink className="company-list" to="/">
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink className="company-list" to="/">
                  {" "}
                  Email Support
                </NavLink>
              </li>
              <li>
                <NavLink className="company-list" to="/">
                  Live Chart
                </NavLink>
              </li>
              <li>
                <NavLink className="company-list" to="/">
                  Feedback
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h6>Digital Resources</h6>
            <ul className="footer-link">
              <li>
                <NavLink className="company-list" to="/">
                  Gift Certificates
                </NavLink>
              </li>
              <li>
                <NavLink className="company-list" to="/">
                  Articles
                </NavLink>
              </li>
              <li>
                <NavLink className="company-list" to="/">
                  E-books
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h6>Connect with Us</h6>
            <div className="social-link">
              <p>
                <a href="/">
                  <img className="social-img" src={Facebook} alt="" />
                </a>
              </p>
              <p className="social-link">
                <a href="/">
                  <img className="social-img" src={Instagram} alt="" />
                </a>
              </p>
              <p>
                <a href="/">
                  <img className="social-img" src={Twitter} alt="" />
                </a>
              </p>
              <p>
                <a href="/">
                  <img className="social-img" src={YouTube} alt="" />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
