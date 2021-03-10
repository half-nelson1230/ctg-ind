import * as React from "react"
import styled from 'styled-components'
import logoImg from '../../images/Links/logo.svg'

//styled components

const Container = styled.div`
width: 100%;
display: flex;
margin: var(--Margin);

`

const Menu = styled.ul`
border: 2px solid;
background-color: #fff;
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
li{
  font-family: windsor;
  padding: 15px;
}

li + li{
  border-left: 2px solid;
  :hover{
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
}
`

const Logo = styled.img`
height: 55px;
`

const Icons = styled.div`
margin-left: 24px;
div{
  width: 42px;
  height: 42px;
  background-color: #fff;
  border: 2px solid;
}

div+ div{
  border-top: none;
}
`

const Nav = () =>{
  return(
    <Container>
      <Menu>
        <li><Logo src={logoImg}/></li>
        <li>About</li>
        <li>Products</li>
        <li>Process</li>
      </Menu>
      <Icons>
        <div></div>
        <div></div>
      </Icons>
      </Container>
  )
}

export default Nav
