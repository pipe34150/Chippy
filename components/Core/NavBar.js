import React, { Fragment } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavLinkE
} from "reactstrap"
import styled from "styled-components"

const NavbarStyle = styled(Navbar)`
  padding: 1em 5.5em;
  background: ${props => props.color};
  transition: 0.3s;
`

const ButtonRight = styled.button`
  cursor: pointer;
  font-weight: 500;
  background-color: transparent;
  color: #69302c;
  border: 2px solid #69302c;
  border-radius: .1em;
  padding: .5em 1.25em;
  font-size: 19px;
  &:hover{
    background-color: #69302c;
    color: #fff;
  }
`

const Img = styled.img`
  height: 60px;
`

const NavLink = styled(NavLinkE)`
  cursor: pointer;
  font-size: 19px;
`

export default class NavBar extends React.Component {
  state = {
    isOpen: false,
    color: 'transparent'
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  componentDidMount = () => {
    document && document.addEventListener( "scroll", (e) => {
      if(window && window.scrollY > 30){
        this.setState({
          color: '#f8bc00'
        }) 
      }else{
        this.setState({
          color: 'transparent'
        })
      }
      }
    )
  }
  render () {
    return (
      <NavbarStyle color={this.state.color} light expand="md" className = "sticky-top">
        <NavbarBrand href='/'>
         <Img src='/static/img/Asset_10.svg' />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto ml-auto" navbar>
            <NavItem className='px-3'>
              <NavLink href="/">คืออะไร</NavLink>
            </NavItem>
            <NavItem className='px-3'>
              <NavLink href="/">ใครมาพูด</NavLink>
            </NavItem>
            <NavItem className='px-3'>
              <NavLink href="/">จัดที่ไหน</NavLink>
            </NavItem>
          </Nav>
          <NavLink href = "/">
            <ButtonRight>ส่งหัวข้อสุดชิพ</ButtonRight>
          </NavLink>
        </Collapse>
      </NavbarStyle>
    )
  }
}
