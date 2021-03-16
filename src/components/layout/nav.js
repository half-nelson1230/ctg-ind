import * as React from "react"
import styled from 'styled-components'

import {Link} from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

//styled components

const Container = styled.div`
width: 100%;
display: flex;
margin: var(--Margin) var(--Margin) 0;
`

const Menu = styled.ul`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);

a{
  height: 100%;

  &.active{
    li{
      background-color: #000;
      color: #fff;
      outline-color: #000;
    }
  }
}

li{
  font-family: windsor;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  outline: 2px solid;
  height: 100%;
}
}
`

const NoLeft = styled.li`

:hover{
  background-color: #000;
  color: #fff;
  outline-color: #000;
}


`

const Logo = styled.img`
height: 55px;
max-width: 100%;

@media(max-width: 750px){
  height: 28px;
}
`

const Icons = styled.div`
margin-left: 28px;
div{
  width: 44px;
  height: 44px;
  outline: 2px solid;
  background-color: #fff;

  @media(max-width: 750px){
    height: 30px;
    width: 30px;
  }
}

@media(max-width: 900px){
  margin-left: 0;
}
`

const Nav = () =>{
  const breakpoints = useBreakpoint();

  return(

    <Container>
      <Menu>
        <Link to='/'><li>
        </li></Link>
        <Link to='/' ><NoLeft className="noLeft">About</NoLeft></Link>
        <Link to='/products' activeClassName="active"><NoLeft>Products</NoLeft></Link>
        <Link to='/' ><NoLeft bgColor={`#999`}>Process</NoLeft></Link>
      </Menu>
      <Icons>
        <div/>
        <div/>
      </Icons>
      </Container>
  )
}

export default Nav
