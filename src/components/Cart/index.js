import React, { useContext } from 'react'
import styled from 'styled-components'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

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
display: flex;
outline: 2px solid;
grid-template-columns: repeat(4, 1fr);
justify-content: space-between;
width: 100%;

button{
  outline: 2px solid;
  border: none;
  background-color: #fff;
  font-family: eurostile;
  font-weight: 800;
  font-size: 18px;
  align-self: stretch;
  padding: 30px;
  width: 25%;
  max-width: 160px;
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
width: 25%;
height: auto;
outline: 2px solid;
max-width: 160px;
`

const PriceItems = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(2, 1fr);
align-items: center;
padding: 30px;
p{
  margin: 0;
  font-family: eurostile;
  font-weight: 800;
  text-align: right;
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
      <Spacer/>
      <PriceItems>
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      </PriceItems>
      <button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </button>

      </Price>

    </Container>

  )
}

export default Cart
