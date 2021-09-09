import React from "react";
import {Modal,Button,Form,Col,Row,Image} from "react-bootstrap";
import './enquiry.css'
function Enquiry({onClose}) {
    return(
        <Modal show={true} onHide={onClose} backdrop="static" dialogClassName="modal-75w" centered={true} keyboard={false}>
            <Modal.Body>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Enquire with Dayal Travel
                    </Modal.Title>
                </Modal.Header>
                <Row className={"enquiry"}>
                    <Col md={5} className={"hide-phone"}>
                        <p>We specialize in tours in Uttar Pradesh but are always expanding and enhancing our wide range of offers, as well as adding new and exciting tours of Uttrakhand, Delhi, Punab and Haryana.</p>
                        <Image src={'/images/img1.jpg'} width={420} height={230}/>
                    </Col>
                    <Col md={7} className={"enquiry-box"}>
                        <Form noValidate={true}>
                            <p>Dayal Travels request you to fill all details for better communication.</p>
                            <Row className={"enquiry-row"}>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name={"name"} type={"text"} />
                                    <Form.Control.Feedback tooltip={true}>Looks Good</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name={"phone_number"} type={"text"} />
                                    <Form.Control.Feedback tooltip={true}>Looks Good</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className={"enquiry-row"}>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>Where would you like to travel?</Form.Label>
                                    <Form.Control name={"destination"} type={"text"} />
                                    <Form.Control.Feedback tooltip={true}>Looks Good</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>What is your city of Departure?</Form.Label>
                                    <Form.Control name={"departure"} type={"text"} />
                                    <Form.Control.Feedback tooltip={true}>Looks Good</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className={"enquiry-row"}>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>What is your Departure Date?</Form.Label>
                                    <Form.Control name={"departure_date"} type={"date"} />
                                    <Form.Control.Feedback tooltip={true}>Looks Good</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className={"enquiry-row"}>
                                <Form.Group as={Col} md={"12"}>
                                    <Button type={"submit"} variant={'outline-danger'}>Submit</Button>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}
export default Enquiry;