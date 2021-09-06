import React from "react";
import {Card,Button,Col,Row,Image} from "react-bootstrap";
import LazyLoad from 'react-lazy-load';
import './listbox.css'
function ListBox() {
    const images=[
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
    ]
    return(
        <Row>
            {images.map(function (img,imgKey) {
                return(
                    <Col md={3} key={imgKey}>
                        <Card>
                            <LazyLoad height={202} offsetVertical={305}>
                                <Image className={"card-img-top"} alt={"Our weekly top offer"} height={202} height={305} variant="top" src={img} />
                            </LazyLoad>
                            <Card.Body>
                                <Card.Text>Our weekly top offer</Card.Text>
                                <Button variant="outline-primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}
export default ListBox;