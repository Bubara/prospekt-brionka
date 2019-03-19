import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import WheatLeaf from '../images/wheat-leaf.png'
import BreadContainer from '../images/o-nama1.png'

const ONama = () => {
    return (
        <div>
            <Jumbotron className="oNama-jumbotron">
                    <Container className="title-container">
                        <h1 className="title"><strong>O nama</strong></h1>
                        <h5 className="subtitle">Brionka je najveći istarski proizvođač i opskrbljivač u okviru <br/> mlinske, pekarske,
                        tjesteninske i slastičarske djelatnosti.</h5>
                    </Container>
                </Jumbotron>

            <Container className="bread-pic-container">
                <Row>
                    <Col className="o-nama-info-container">
                        <p>Brionka se od svojih početaka, 1942. godine pa do danas, gradila <br/> u skladu s potrebama potrošačkog tijela. <br/></p>

                        <p>Danas je to suvremeno organiziran proizvodno prerađivački sustav koji <br/>  udovoljava svim zahtjevima i potrebama tržišta za brašnom 
                        i proizvodima <br/> od brašna. </p>

                        <Container className="info-container">
                            <p>Cjelokupan tehnološki proces je pod posebnim laboratorijskim <br/>  nadzorom, što jamči visoku razinu organoleptičke i  mikrobiološke
                            <br/> kvalitete Brionkinih proizvoda.</p>
                            <img className="wheat-leaf" src={WheatLeaf} alt="leaf-wheat" />
                        </Container>
                    </Col>

                    <Col>       
                    <img className="bread-cont-pic" src={BreadContainer} /> 
                        <div class="overlay">
                        
                            <div class="text">Hello World</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ONama;