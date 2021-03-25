import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import StoreContext from '~/context/StoreContext'

const Item = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
position: relative;
outline: 2px solid;
align-items: center;
max-height: 160px;
a{
  outline: 2px solid;
  align-self: stretch;
  width: 25%;
  max-width: 160px;
  img{
    width: 100%;
    object-fit: cover;
    min-height: 100%;
  }
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
}

button{
  outline: 2px solid;
  border: none;
  background-color: #fff;
  font-family: eurostile;
  font-weight: 800;
  font-size: 24px;
  align-self: stretch;
  padding: 30px;
  :hover{
    cursor: pointer;
    color: #fff;
    background-color: #000;
    outline-color: #000 !important;
  }
}
`

const Info = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 30px;
h4{
  padding-left: 20px;
  margin: 0;
  font-family: eurostile;
  font-weight: 800;
}
`

const TitleSize = styled.div`
display: block !important;
width: fit-content !important;
h3, p{

}
`



const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
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
        option => `${option.value === 'Default Title' ? '' : `size: ${option.value}: `}`
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Item>
      {console.log(item)}
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>

      <Info>
      <TitleSize>
      <h3>{item.title}</h3>
      <p>{selectedOptions}</p>
      <p>quantity: {item.quantity}</p>
      </TitleSize>
      <h4>${item.variant.price * item.quantity}</h4>
      </Info>
      <button onClick={handleRemove}>X</button>
    </Item>
  )
}

export default LineItem
