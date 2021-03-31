import React, { useContext } from 'react'
import styled from 'styled-components'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

//styled components
const Container = styled.div`
position: relative;
width: calc(100% - var(--Margin) * 2);
margin-left: var(--Margin);
z-index: 15;
background-color: #fff;
outline: 2px solid;


img{
display: block;
&.bigImage{
  width: 100%;
}

&.halfImage{
  width: 50%;
}
}

h3{
  font-family: eurostile;
  font-weight: 800;
  margin: 5px;
}
`

const WhiteOut = styled.div`
position: fixed;
top: 0; bottom: 0; right: 0; left: 0;
background-color: #fff;
opacity: 90%;
z-index: 14;
`



const Items = styled.div`

`

const Price = styled.div`
display: grid;
grid-template-columns: 160px 1fr 160px;
outline: 2px solid;
width: 100%;
position: relative;

@media(max-width: 800px){
  grid-template-columns: 25% 1fr 25%;
}

@media(max-width: 500px){
  grid-template-columns: 1fr 33%;
}


button{
  outline: 2px solid;
  border: none;
  background-color: #fff;
  font-family: eurostile;
  font-weight: 800;
  font-size: 18px;
  align-self: stretch;
  padding: 30px;
  width: 100%;

  background-color: #1111;

  @media(max-width: 500px){
    text-align: center;
    padding: 0;
  }
  :hover{
    cursor: pointer;
    color: #fff;
    background-color: #000;
    outline-color: #000 !important;
  }
}
`

const Spacer = styled.div`
position: relative;
width: 100%;
height: auto;
outline: 2px solid;

`

const PriceItems = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(2, 1fr);
align-items: center;
padding: 30px;

@media(max-width: 600px){
  padding: 15px;
}

@media(max-width: 500px){
  display: flex;
}
p{
  margin: 0;
  font-family: eurostile;
  font-weight: 800;
  text-align: right;
  @media(max-width: 500px){
    margin-left: 10px;
  }
}
h2{
  font-family: eurostile;
  font-weight: 800;
  margin: 0;
  font-size: 20px;
  text-align: left;
}
`


const Cart = () => {
  const breakpoints = useBreakpoint();


  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (

    <Container>

      <Items>
      {lineItems}
      </Items>
      <Price>
      {breakpoints.xs ? null : <Spacer/>}
      <PriceItems>
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      </PriceItems>
      <button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Checkout
      </button>

      </Price>

    </Container>

  )
}


export default Cart
