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

img{
  position: relative;
  width: 25%;
  height: auto;
  outline: 2px solid;
  max-width: 160px;
}
a{
  outline: 2px solid;
  align-self: stretch;
  width: 25%;
  max-width: 160px;

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
  font-size: 24px;
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
  width: 25%;
  max-width: 160px;
  :hover{
    cursor: pointer;
    color: #fff;
    background-color: #000;
    outline-color: #000 !important;
  }
`


const Info = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
align-items: center;
justify-content: space-between;
width: 100%;
padding: 30px;
h4{
  margin: 0;
  font-family: eurostile;
  font-weight: 800;
  text-align: right;
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
        option => `${option.value === 'Default Title' ? '' : `size: ${option.value}`}`
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  const handleAddOne = () => {

  }

  return (
    <Item>
      {console.log(item)}

        {variantImage}

      <Info>

      <h3>{item.title}</h3>
      <p>{selectedOptions}</p>
      <Qty>

      <p>{item.quantity}</p>

      </Qty>
      <h4>${item.variant.price * item.quantity}</h4>
      </Info>
      <BigButton onClick={handleRemove}>X</BigButton>
    </Item>
  )
}

export default LineItem
