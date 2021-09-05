import React from "react";
import {Card,Col,Row} from "react-bootstrap";
import './contentbox.css'
function ContentBox() {
    const titles=[
        'Handpicked Hotels',
        'Detailed Descriptions',
        'Exclusive Knowledge',
        'Passionate Service',
        'Best Price Guarantee',
        'Secure Booking',
        'Benefits for Hoteliers',
        'Any Questions?'
    ]
    return(
        <Row className={"contentBox"}>
            {titles.map(function (title,titleKeyKey) {
                return(
                    <Col md={3} key={titleKeyKey}>
                        <Card>
                            <Card.Title>{title}</Card.Title>
                            <Card.Body>
                                <Card.Text>All Book Your Travel Hotels fulfil strict selection criteria. Each hotel is chosen individually and inclusion cannot be bought.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}
export default ContentBox;