import React from "react";
import {Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaLinkedin,FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";
import './footer.css'
function Footer(){
    return(
        <div className={"footer"}>
            <Container>
                <Row>
                    <Col md={3} xs={12}>
                        <h5>Book Your Travel</h5>
                        <p><FaMapMarkerAlt /> : Maitri Bagh Colony, MadhoTanda Road, Pilibhit, 262001</p>
                        <p><FaPhoneAlt /> : 9999999999</p>
                        <p><FaEnvelope /> : dayaltravelspbt@gmail.com</p>
                    </Col>
                    <Col md={3} xs={12}>
                        <h5>Customer support</h5>
                        <ul>
                            <li>Faq</li>
                            <li>How do I make a reservation?</li>
                            <li>Payment options</li>
                            <li>Booking tips</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12}>
                        <h5>Follow us</h5>
                        <ul className={"social"}>
                            <li><a href={"#"}><FaFacebookF /></a></li>
                            <li><a href={"#"}><FaInstagram /></a></li>
                            <li><a href={"#"}><FaLinkedin /></a></li>
                            <li><a href={"#"}><FaTwitter /></a></li>
                            <li><a href={"#"}><FaYoutube /></a></li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12}>
                        <h5>Don’t miss our exclusive offers</h5>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">SIGNUP</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={"footerBottom"}>
                    <Col md={4}>
                        <p className={"copy"}>Copyright 2021 Dayal travels ltd. All rights reserved</p>
                    </Col>
                    <Col md={8}>
                        <nav>
                            <ul>
                                <li><a href="/" title="About us">About us</a></li>
                                <li><a href="contact.html" title="Contact">Contact</a></li>
                                <li><a href="/" title="Partners">Partners</a></li>
                                <li><a href="/" title="Customer service">Customer service</a></li>
                                <li><a href="/" title="FAQ">FAQ</a></li>
                                <li><a href="/" title="Careers">Careers</a></li>
                                <li><a href="/" title="Terms &amp; Conditions">Terms &amp; Conditions</a></li>
                                <li><a href="/" title="Privacy statement">Privacy statement</a></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;