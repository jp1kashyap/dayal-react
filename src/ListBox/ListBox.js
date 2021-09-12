import React,{useState} from "react";
import {Card,Button,Col,Row,Image,Carousel} from "react-bootstrap";
import LazyLoad from 'react-lazy-load';
import './listbox.css'
import Destinations from "../Destinations";
import Enquiry from "../Modal/Enquiry";
import {FaLongArrowAltRight,FaLongArrowAltLeft} from 'react-icons/fa';
function ListBox(props) {
    const [showEnquiry,setShowEnquiry]=useState(false);
    const type=props.type?props.type:'default';
    const [images,setImages]=useState(Destinations[type]);
    const [travelDestination,setTravelDestination]=useState(null);
    return(
        <>
            <Carousel indicators={false} nextIcon={<FaLongArrowAltRight size={'2em'} />} prevIcon={<FaLongArrowAltLeft size={'2em'} />} >
                {images.length >= 4 &&
                <Carousel.Item>
                    <Row>
                        {images.map(function (img, imgKey) {
                            if (imgKey < 4) {
                                return (
                                    <Col md={3} key={imgKey}>
                                        <Card>
                                            <LazyLoad height={202} offsetVertical={305}>
                                                <Image className={"card-img-top"} alt={"Our weekly top offer"}
                                                       height={202}
                                                       width={305} variant="top" src={img.image}/>
                                            </LazyLoad>
                                            <Card.Body>
                                                <Card.Text>{img.title}</Card.Text>
                                                <Button variant="outline-primary"
                                                        onClick={() => {
                                                            setShowEnquiry(true)
                                                            setTravelDestination(img)
                                                        }}
                                                >Enquire  Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                        })}
                    </Row>
                </Carousel.Item>
                }
                {images.length >= 8 &&
                <Carousel.Item>
                    <Row>
                        {images.map(function (img, imgKey) {
                            if (imgKey>=4 && imgKey < 8) {
                                return (
                                    <Col md={3} key={imgKey}>
                                        <Card>
                                            <LazyLoad height={202} offsetVertical={305}>
                                                <Image className={"card-img-top"} alt={"Our weekly top offer"}
                                                       height={202}
                                                       width={305} variant="top" src={img.image}/>
                                            </LazyLoad>
                                            <Card.Body>
                                                <Card.Text>{img.title}</Card.Text>
                                                <Button variant="outline-primary"
                                                        onClick={() => {
                                                            setShowEnquiry(true)
                                                            setTravelDestination(img)
                                                        }}
                                                >Enquire  Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                        })}
                    </Row>
                </Carousel.Item>
                }
            </Carousel>
            {showEnquiry &&
                <Enquiry onClose={()=>setShowEnquiry(false)} details={travelDestination} />
            }
        </>
    )
}
export default ListBox;