import React from "react";
import {Navbar,Nav,Container,Row,Col} from 'react-bootstrap';
import {AiFillCar} from 'react-icons/ai';
import {BiPhone} from "react-icons/bi";
import './header.css'
function Header() {
    return(
        <>
            <div className={"topHead"}>
                <Container>
                    <Row>
                        <Col md={9} xs={3}>
                            <Navbar.Brand href="#home">
                                <img src={"/images/logo.png"} height={40} width={40} />
                                <span className={"hide-phone"}> Dayal Travels</span>
                            </Navbar.Brand>
                        </Col>
                        <Col md={3} xs={9} className={"callMe"}>
                            <Row>
                                <Col md={2} xs={2} className={"phoneBorder"} ><BiPhone /></Col>
                                <Col md={8} xs={10}><div>8077740900</div> <div>24/7 Support Number</div></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle  />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav className="justify-content-center" >
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/about">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    )
}
export default Header;