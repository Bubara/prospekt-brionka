import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Logo from '../images/logo.png';

const Footer = () => {
    return (
        <div>
            <Jumbotron className="footer-jumbotron">
                <Container className="footer-container">
                    <Row>
                        <Col md={3}  sm={6} xs={12}>
                            <img className="logo" src={Logo} alt="logo"/>
                        </Col>

                        <Col md={3}  sm={6} xs={12}>
                            <p>BRIONKA d.o.o. <br/> Tršćanska 35, <br/> 52100 Pula, HR</p>
                        </Col>

                        <Col md={3}  sm={6} xs={12}>
                            <p>Tel: 052 541 685 <br/> Fax: 052 541 684 <br/> E-mail: <a href="#"> info@brionka.hr</a></p>
                        </Col>

                        <Col md={3}  sm={6} xs={12}>
                            <p>Dizajn i izrada: <br/> <strong>Prospekt d.o.o.</strong></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Footer;