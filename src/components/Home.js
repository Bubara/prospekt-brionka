import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import AboutUs from '../images/book-bg.png'
import PackedBread from '../images/packed-bread.PNG'
import KruhAkcija from '../images/kruh-akcija.png'
import BakeryProducts from '../images/bakery-products.jpg'
import EcoProducts from '../images/eko-products.jpg'
import Cake from '../images/cake.jpg'
import Pasta from '../images/pasta.jpg'

class HomeScreen extends Component {
    
    render() { 
        return ( 
            <div>
                <Jumbotron className="homeScreen">
                    <Container className="title-container">
                        <h1 className="title"><strong>Tradicija na vašem stolu</strong></h1>
                        <h5 className="subtitle">Više od 70 godina pekarskog iskustva rezultiralo je kvalitetom i prepoznatljivošću. 
                            <br />Uvjerite se i sami u kvalitetu naših proizvoda!</h5>
                    </Container>
                </Jumbotron>

                <Jumbotron className="news-jumbotron">
                    <img className="aboutUsImage" src={AboutUs} alt="about-us" />
                    <p className="aboutUsParagraph">
                            Brionka je najveći istarski proizvođač i <br/>opskrbljivač u okviru mlinske, pekarske, <br/> tjesteninske i slastičarske djelatnosti.
                            <br />
                            <br />
                            Od početaka, 1942. godine pa do danas, <br/> poduzeće se gradilo u skladu s potrebama <br/> potrošačkog tijela.
                            <br />
                            <br />
                            Danas je to suvremeno organiziran <br/> proizvodno prerađivački sustav koji <br/> udovoljava svim zahtjevima i potrebama <br/>
                            tržišta za brašnom i proizvodima od brašna.
                    </p>
                        
                    <Card className="card">
                        <CardImg className="packed-bread-image" align="middle" top width="100%" src={PackedBread} alt="packed-bread" />
                        <CardBody>
                            <CardTitle><strong>NOVO U PONUDI!</strong></CardTitle>
                            <CardSubtitle className="card-subtitle">Pakirani kruh</CardSubtitle>
                            <CardText>Od sada u Brionka trgovinama dostupan i pakirani kruh. <br/> U novoj ambalaži, produljene svježine!</CardText>
                            <CardText><a href=" ">Saznajte više!</a></CardText>
                        </CardBody>
                    </Card>
                </Jumbotron>  



                <Jumbotron className="discount-container">
                    <Container>
                        <Row>
                            <Col><h3 className="discount-title">Akcija</h3></Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col xl="4" lg="4" md="6" sm="12" xs="12">
                                <Card className="card-discount">
                                    <CardImg className="discount-img" top width="100%" src={KruhAkcija} alt="kruh-akcija"/>
                                    <CardBody>
                                    <CardTitle className="discount-product-title">Brionski bijeli kruh</CardTitle>
                                    <CardSubtitle className="old-price">11.50 kn</CardSubtitle>
                                    <CardSubtitle className="discount-price">9.48 kn</CardSubtitle>
                                    <CardSubtitle className="product-weight">700 g</CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xl="4" lg="4" md="6" sm="12" xs="12">
                                <Card className="card-discount">
                                    <CardImg className="discount-img" top width="100%" src={KruhAkcija} alt="kruh-sjemenke-akcija" />
                                    <CardBody>
                                    <CardTitle className="discount-product-title">Miješani kruh sa sjemenkama</CardTitle>
                                    <CardSubtitle className="old-price">8.48 kn</CardSubtitle>
                                    <CardSubtitle className="discount-price">7.20 kn</CardSubtitle>
                                    <CardSubtitle className="product-weight">500 g</CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xl="4" lg="4" md="6" sm="12" xs="12">
                                <Card className="card-discount" >
                                    <CardImg className="discount-img" top width="100%" src={KruhAkcija} alt="pletenica-akcija" />
                                    <CardBody>
                                    <CardTitle className="discount-product-title">Pletenica mak</CardTitle>
                                    <CardSubtitle className="old-price">6.20 kn</CardSubtitle>
                                    <CardSubtitle className="discount-price">4.50 kn</CardSubtitle>
                                    <CardSubtitle className="product-weight">100 g</CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>



                <Container className="activities-container">
                    <Row>
                        <Col className="activities">
                            <img className="activities-image" src={BakeryProducts} alt="about-us" />
                                <h5 className="activities-title">Pekarstvo</h5>
                        </Col>

                        <Col className="activities">
                            <img className="activities-image" src={EcoProducts} alt="about-us" />
                            <h5 className="activities-title">Eko proizvodi</h5>
                        </Col>

                        <Col className="activities">
                            <img className="activities-image" src={Cake} alt="about-us" />
                            <h5 className="activities-title">Slastičarstvo</h5>
                        </Col>

                        <Col className="activities">
                            <img className="activities-image" src={Pasta} alt="about-us" />
                            <h5 className="activities-title">Tjestenina</h5>
                        </Col>
                    </Row>
                </Container>
                

                <Jumbotron className="selection-jumbotron">
                    <h4 className="selection-title">Ponuda za hotelijerstvo i turizam</h4>
                    <Container className="selection-container">
                        <Row>
                            <Col xs={6}>
                                <Container className="selection-inner-container">
                                    <h5>Nudimo široki asortiman:</h5>
                                    <p className="selection-paragraph">svježeg kruha i peciva, croissanta, brioneta, tjestenine, <br /> autohtonih proizvoda 
                                    te hotelskih kremastih kolača i keksa.</p>
                                    <p><a href=" ">Saznajte više!</a></p>
                                </Container>
                            </Col>
                            <Col xs={6} className="selection-img">
                            </Col>
                        </Row> 
                    </Container>
                </Jumbotron>
            </div>  
         );
    }
}
 
export default HomeScreen;