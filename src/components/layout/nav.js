import * as React from "react"
import styled from 'styled-components'
import logoImg from '../../images/Links/logo.svg'
import logoImgSmall from '../../images/Links/logoSmall.svg'
import {Link} from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

//styled components

const Container = styled.div`
width: 100%;
display: flex;
margin: var(--Margin) var(--Margin) 0;
position: relative;
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
position: absolute;
right: 0;
top: 0;
bottom: 0;
div{
  width: 48px;
  height: 100%;
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

const Nav = (props) =>{
  const breakpoints = useBreakpoint();

  return(

    <Container className={props.position}>
      <Menu>
        <Link to='/'><li>
        {breakpoints.sm ? <Logo src={logoImgSmall}/> : <Logo src={logoImg}/>}
        </li></Link>
        <Link to='/' ><NoLeft className="noLeft">About</NoLeft></Link>
        <Link to='/products' activeClassName="active"><NoLeft>Products</NoLeft></Link>
        <Link to='/' ><NoLeft bgColor={`#999`}>Process</NoLeft></Link>
      </Menu>
      <Icons>
        <div/>
      </Icons>
      </Container>
  )
}

export default Nav
