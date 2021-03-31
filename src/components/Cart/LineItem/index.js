import React, { useContext } from 'react'
import {  Link } from 'gatsby'
import styled from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import StoreContext from '~/context/StoreContext'

const Item = styled.div`
display: grid;
grid-template-columns: 160px 1fr 160px;
width: 100%;
position: relative;
outline: 2px solid;
align-items: center;

@media(max-width: 800px){
  grid-template-columns: 25% 1fr 25%;
}

@media(max-width: 500px){
  grid-template-columns: 33% 1fr;
}

img{
  position: relative;
  width: 100%;
  height: 100%;
  outline: 2px solid;
  object-fit: cover;
}
a{
  outline: 2px solid;
  align-self: stretch;
  width: 100%;


}

h3{
  font-family: eurostile;
  font-weight: 800;
  margin: 0;
  font-size: 20px;
  text-align: left;
}
p{
  margin: 0;
  font-family: eurostile;
  font-weight: 300;
  font-size: 18px;
  @media(max-width: 600px){
    font-size: 16px;
  }
}
`

const BigButton = styled.button`
  outline: 2px solid;
  border: none;
  background-color: #fff;
  font-family: eurostile;
  font-weight: 800;
  font-size: 24px;
  align-self: stretch;
  padding: 30px;
  width: 100%;
  :hover{
    cursor: pointer;
    color: #fff;
    background-color: #000;
    outline-color: #000 !important;
  }
`


const Info = styled.div`

width: 100%;
padding: 30px;
font-family: eurostile;

@media(max-width: 600px){
  padding: 15px;
}
h4{
  margin: 5px 0;
  font-weight: 800;
}
p{
  margin: 5px 0;
}

button{
  outline: 2px solid;
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  margin-left: 10px;

  :hover{
    cursor: pointer;
  }

}
`

const TitleSize = styled.div`
display: block !important;
width: fit-content !important;
h3, p{

}
`

const Qty = styled.div`
display: flex;
align-items: center;
p{
  margin: 0 10px;
  text-align: center;
  font-size: 24px;
}

@media(max-width: 600px){
  p{
    font-size: 20px;
  }
}
button{
  border: none;
  background: none;
  font-family: eurostile-extended;
  font-weight: 900;
  font-size: 18px;
  :hover{
    cursor: pointer;

  }
}

`

const Quantity = styled.div`
display: flex;
align-items: center;
p{
  margin-right: 10px;
}
h3{
  margin-right: 10px;
}
`


const LineItem = (props, {data} ) => {
  const breakpoints = useBreakpoint();

  const { item } = props
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.value === 'Default Title' ? '' : `size: ${option.value}`}`
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  const handleAddOne = () => {
    updateLineItem(client, checkout.id, item.id, item.quantity + 1)
  }
  const handleMinOne = () => {
    updateLineItem(client, checkout.id, item.id, item.quantity - 1)
  }
  console.log(item.productType);




  return (
    <Item>
      {console.log(item)}
      {console.log(item.quantity)}

        {variantImage}

      <Info>
      <Quantity>
      <h3>{item.title}</h3>
      <p>{selectedOptions}</p>
      </Quantity>
      <Quantity>
      <p>QTY: {item.quantity}</p>
      <button onClick={handleMinOne}>-</button>
      <button onClick={handleAddOne}>+</button>
      </Quantity>
      <h4>${item.variant.price * item.quantity}</h4>
      {breakpoints.xs ? <p onClick={handleRemove}>remove item</p> : null}
      </Info>
      {breakpoints.xs ? null : <BigButton onClick={handleRemove}>X</BigButton>}
    </Item>
  )
}




export default LineItem
