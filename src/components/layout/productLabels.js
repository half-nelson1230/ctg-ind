import React, { useState } from 'react';
import styled from 'styled-components'

//images
import firstImage from "../../images/Links/Kids-Organic-Cotton-T-Shirt-Off-White-1_ce8ec1de-3bda-4094-a9ae-b1f577548602.jpg"
import secondImage from "../../images/Links/Lightweight-Organic-Cotton-Shorts-Off-White-1_900x.jpg"
import thirdImage from "../../images/Links/ctgIndBag.jpg"

import firstAlt from "../../images/Links/Seaweed-Fiber-High-Neck-Long-Sleeve-T-Shirt-Off-White-Female-Model-1_1500x.jpg"
import secondAlt from "../../images/Links/122998079_1092137804549215_6067106821591667747_o.jpg"
import thirdAlt from "../../images/Links/testBack.jpg"

const Labels = styled.div`
display: flex;
flex-direction: column;

@media(max-width: 1200px){
  flex-direction: row;

}

h3{
  padding: 0 10px;
  font-family: eurostile-extended, eurostile;
  font-weight: 900;
  font-style: normal;
  font-size: 28px;
  line-height: 18px;
}

p{
  font-family: eurostile;
  font-weight: 300;
}
`

const Label=styled.div`

  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  outline: 2px solid;
  background-color: #fff;
:hover{
  background-color: #000;
  color: #fff;
  outline-color: #000 !important;
  cursor: pointer;
}

&.testLink{
  background-color: #000;
  color: #fff;
  outline-color: #000 !important;
}
`



const ProductLabels = () => {
  const [whatIndex, setIndex] = useState(0);

  const products = [
    {title: 'TS_01', classifier: 'Shirt', price: '85.00', mainImage: firstImage, altImage: firstAlt},
    {title: 'SH_01', classifier: 'Shorts', price: '85.00', mainImage: secondImage, altImage: secondAlt},
    {title: 'ST_01', classifier: 'Stuff Sack', price: '85.00', mainImage: thirdImage, altImage: thirdAlt}
  ]
  const productList = products.map((item, index) =>
  <Label
    className={`${whatIndex !== index + 1 ? '' : 'testLink'}`}
    onMouseEnter={() => setIndex(item.title)}
    onMouseLeave={() => setIndex(0)}
  >
    <h3>{item.title}</h3>
    <p>{item.classifier}</p>
  </Label>
  )
return(
  <Labels>
  {productList}
  </Labels>
)
}

export default ProductLabels
