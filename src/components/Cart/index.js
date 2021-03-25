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
  text-align: center;
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
padding: 10px;

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
    <h3>Cart</h3>
      <Items>
      {lineItems}
      </Items>
      <Price>
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      </Price>
      <button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </button>
    </Container>

  )
}

export default Cart
