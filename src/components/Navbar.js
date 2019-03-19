
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';
import Logo from '../images/logo.png';



export default class Example extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false 
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Container>
        <Navbar className="navbar" light expand="md">
            <NavbarBrand href="/">
                <img className="logo" src={Logo} alt="logo"/>
            </NavbarBrand>
            
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/o_nama">O nama</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/proizvodi">Proizvodi</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/ducani">Dućani</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/akcije">Akcije</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/tradicija">Tradicija</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/kontakt">Kontakt</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </Container>
    );
  }
}