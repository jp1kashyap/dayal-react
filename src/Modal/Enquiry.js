import React, {useState} from "react";
import {Modal,Button,Form,Col,Row,Image} from "react-bootstrap";
import './enquiry.css'
import emailjs,{ init } from 'emailjs-com';
init("user_GUNawnL65VUoUwKKmxlxK");
function Enquiry({onClose}) {
    const [validated, setValidated] = useState(false);
    const [emailSent,setEmailSent]=useState(false);
    const [emailError,setEmailError]=useState(false);
    let [enquiryData,setEnquiryData]=useState({
        name:'',
        phone_number:'',
        destination:'',
        departure:'',
        departure_date:'',
        passengers:''
    });
    const handleChange=(event)=>{
        enquiryData[event.target.name]=event.target.value;
        console.log(enquiryData)
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        emailjs.send('service_rqaipla', 'template_dnyng5f', enquiryData)
            .then(function(response) {
                setEmailSent(true);
            }, function(error) {
                setEmailError(true);
            });
    };

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
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <p>Dayal Travels request you to fill all details for better communication.</p>
                            <Row className={"enquiry-row"}>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name={"name"} required onChange={handleChange}  type={"text"} />
                                </Form.Group>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name={"phone_number"} required onChange={handleChange} type={"text"} />
                                </Form.Group>
                            </Row>
                            <Row className={"enquiry-row"}>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>Where would you like to travel?</Form.Label>
                                    <Form.Control name={"destination"} required onChange={handleChange} type={"text"} />
                                </Form.Group>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>What is your city of Departure?</Form.Label>
                                    <Form.Control name={"departure"} required onChange={handleChange} type={"text"} />
                                </Form.Group>
                            </Row>
                            <Row className={"enquiry-row"}>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>What is your Departure Date?</Form.Label>
                                    <Form.Control name={"departure_date"} required onChange={handleChange} type={"date"} />
                                </Form.Group>
                                <Form.Group as={Col} md={"6"}>
                                    <Form.Label>Number Of Passengers?</Form.Label>
                                    <Form.Control name={"passengers"} required onChange={handleChange} type={"number"} />
                                </Form.Group>
                            </Row>
                            {emailError &&
                                <div className={"alert alert-danger"}>Oops.. Something went wrong. Please try again later.</div>
                            }
                            {emailSent &&
                                <div className={"alert alert-success"}>Thanks for your valuable time. Our team will contact you soon.</div>
                            }
                            {!emailSent &&
                                <div className={"d-grid gap-4"}>
                                    <Button type={"submit"} variant={'outline-danger'} size={'lg'}>Submit</Button>
                                </div>
                            }

                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}
export default Enquiry;