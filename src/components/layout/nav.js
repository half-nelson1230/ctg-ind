import React, { useContext } from 'react'
import styled from 'styled-components'
import logoImg from '../../images/Links/logo.svg'
import logoImgSmall from '../../images/Links/logoSmall.svg'
import {Link} from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import cartImage from '~/images/Links/cart.svg'


import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import ContextProvider from '~/provider/ContextProvider'
//styled components


const Container = styled.div`
width: 100%;
display: flex;
margin: var(--Margin) var(--Margin) 0;
position: relative;
`

const BreakDiv = styled.div`
width: 100%;
`


const Menu = styled.ul`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);


@media(max-width: 1200px ){
  grid-template-columns: 120px 1fr 1fr 1fr;
}
@media(max-width: 900px){
  grid-template-columns: repeat(4, 1fr);
}
a{
  height: 100%;
  position: relative;
  &.active{
    span{
      height: 5px;
      width: 100%;
      background-color: #000;
      opacity: 0.4;
      top: 0;
      position: absolute;
    }
    li{

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

const Menu2 = styled(Menu)`
grid-template-columns: repeat(3, 1fr);
width: 100%;
`


const Menu3 = styled(Menu)`
width: 100%;
grid-template-columns: 1fr 48px;
`

const NoLeft = styled.li`

:hover{
  background-color: #000;
  color: #fff;
  outline-color: #000;
}


`

const Logo = styled.img`
height: 42px;
margin: 5px 0 0 10px;
max-width: 100%;

@media(max-width: 750px){
  height: 28px;
  margin: 0;
}
`

const Icons = styled.div`
position: absolute;
right: 0;
top: 0;
bottom: 0;

@media(max-width: 500px){
  position: relative;
}
:hover{
  div{
  background-color: #000;
  }
  img{
  filter: invert(1);
  }
}
div{
  width: 48px;
  height: 100%;
  outline: 2px solid;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  @media(max-width: 750px){

    width: 30px;
  }

  @media(max-width: 500px){
    width: 48px;
  }

  img{
    width: 30px;
    padding: 0 3px;
    @media(max-width: 750px){
      width: 20px;
      padding: 0;
    }
  }
  span{
    text-align: center;
    font-family: eurostile;
    font-weight: 800;
    padding: 3px 9px;
    color: #fff;
    background-color: #000;
    top: -16px;
    right: -12px;
    border-radius: 20px;
    position: absolute;
  }
}

@media(max-width: 900px){
  margin-left: 0;
}
`
const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Nav = (props) =>{
  const breakpoints = useBreakpoint();
  const [hasItems, quantity] = useQuantity()


  return(

    <Container className={`fixnav`}>
    {breakpoints.xs ?

      <BreakDiv>

      <Menu3>
        <Link to='/'><li>
        <Logo src={logoImg}/>
        </li></Link>
        <Icons>
          <Link to='/cart' activeClassName="activeCart"><div><img src={cartImage}/><span>{quantity}</span></div></Link>
        </Icons>
      </Menu3>

      <Menu2>
      <Link to='/about' activeClassName="active"><NoLeft className="noLeft">About</NoLeft></Link>
      <Link to='/products' activeClassName="active"><NoLeft>Products</NoLeft></Link>
      <Link to='/process' activeClassName="active"><NoLeft bgColor={`#999`}>Process</NoLeft></Link>
      </Menu2>
       </BreakDiv>

       :
       <>  <Menu>
         <Link to='/'><li>
         {breakpoints.md ? <Logo src={logoImgSmall}/> : <Logo src={logoImg}/>}
         </li></Link>
         <Link to='/about' activeClassName="active"><NoLeft className="noLeft">About</NoLeft><span/></Link>
         <Link to='/products' activeClassName="active"><NoLeft>Products</NoLeft><span/></Link>
         <Link to='/process' activeClassName="active"><NoLeft bgColor={`#999`}>Process</NoLeft><span/></Link>
       </Menu>
       <Icons>
         <Link to='/cart' activeClassName="activeCart"><div><img src={cartImage}/><span>{quantity}</span></div></Link>
       </Icons> </>


     }

      </Container>

  )
}

export default Nav
