import React, { useState } from 'react';
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

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



const ProductLabels = ({ data }) => {
  const [whatIndex, setIndex] = useState(0);


    const productList = data.allShopifyProduct.edges.map(({ node }) =>
    <Link to={`/products/${node.handle}`}>
    <Label
      key={node.shopifyId}
      className={whatIndex === node.shopifyId ? 'testLink' : ''}
      onMouseEnter={() => setIndex(node.shopifyId)}
      onMouseLeave={() => setIndex(0)}
    >
      <h3>{node.title}</h3>
      <p>{node.productType}</p>
    </Label>
    </Link>
  )




return(
  <Labels>
  {productList}
  </Labels>
)
}

export default ProductLabels

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          productType
          images {
            id
            originalSrc
          }
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
