import React from "react";
import {Carousel,Container} from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './home.css'
import ListBox from "../ListBox/ListBox";
import ContentBox from "../ListBox/ContextBox";
import LazyLoad from 'react-lazy-load';
function Home() {
    return(
        <>
            {/*header component */}
            <Header />
            {/* carousel starts*/}
            <Carousel controls={false} >
                <Carousel.Item>
                    <LazyLoad>
                    <img className="d-block w-100" width={1520} height={1010}  src="/images/slider1.avif" alt="First slide" />
                    </LazyLoad>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoad>
                    <img className="d-block w-100" width={1520} height={1010} src="/images/slider2.avif"  alt="First slide" />
                    </LazyLoad>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/*carousel end*/}
            <Container >
                {/* latest offers div*/}
                <div className={"latest-offers"}>
                    <div className={"titleBox"}>Popular Tourist Destinations in Punjab</div>
                    <div className={"offers"}>
                        <ListBox type={'punjab'} />
                    </div>
                </div>
                {/* latest offers div*/}
                <hr/>
                {/* top destinations offers div*/}
                <div className={"latest-offers"}>
                    <div className={"titleBox"}>Best Places to Visit in Uttarakhand</div>
                    <div className={"offers"}>
                        <ListBox type={'uttrakhand'} />
                    </div>
                </div>
                {/* top destinations div*/}
                <hr/>
                {/* top destinations offers div*/}
                <div className={"latest-offers"}>
                    <div className={"titleBox"}>Popular Tourist Destinations in Uttar Pradesh</div>
                    <div className={"offers"}>
                        <ListBox type={'uttar-pradesh'} />
                    </div>
                </div>
                {/* top destinations div*/}
                <hr />
                {/*    Our promises*/}
                <div className={"latest-offers"}>
                    <ContentBox />
                </div>
                {/*    Our promises*/}

            </Container>
            {/*footer component */}
            <Footer />
        </>
    )
}
export default Home;