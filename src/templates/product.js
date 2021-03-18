import React, { useState } from 'react';
import Layout from "../components/layout"
import GlobalStyle from '../styles/globalStyles.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { graphql, Link } from "gatsby";
import styled from 'styled-components'
import Footer from '../components/layout/footer.js'

import {Labels, Label, Main} from "../pages/products"

const PicHold = styled.div`
grid-column: 2 / span 2;

img{
  width: 100%;
  outline: 2px solid;
}
`

const MainFixed=styled(Main)`
margin-top: calc(85px + var(--Margin));
position: relative;
`

const Info = styled.div`
position: sticky;
top: calc(85px + var(--Margin));
right: var(--Margin);
height: fit-content;

h2, p, h3{
  margin: 0;
}

h2{
  font-family: eurostile-extended;
  font-weight: 900;
}

h3{
  font-family: eurostile;
  font-weight: 900;
}

p{
  font-family: eurostile;
  font-weight: 300;
}

div{
&.outliner{
  outline: 2px solid;
  padding: 20px;
}
}
`


const LabelsFixed=styled(Labels)`
position: fixed;
top: calc(85px + var(--Margin));
left: var(--Margin);
width: calc((100% - var(--Margin) * 2) / 4);
`

const Spacer=styled.div`
width: 100%;
height: 60px;
background-color: #fff;
top: 0;
position: fixed;
left: 0;
z-index: 12;
`

const Select = styled.select`
width: 100%;
padding: 10px;
outline: 2px solid;
margin-top: var(--Margin);
font-family: eurostile;
font-weight: 800;
option{
  font-family: eurostile;
  font-weight: 800;
}
`

const Atc = styled.button`
width: 100%;
padding: 10px;
outline: 2px solid;
margin-top: var(--Margin);
font-family: eurostile;
font-weight: 800;
background: #fff;
border: none;
:hover{
  background-color: #000;
  color: #fff;
  outline-color: #000 !important;
  cursor: pointer;
}
`

const ProductTemplate = ({ pageContext, data}) => {
    const breakpoints = useBreakpoint();
    const [whatIndex, setIndex] = useState(0);

    const { product } = pageContext

    const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

    const [activeOption, setOption] = useState(options[0]);
    const onchangeSelect = (item) => {
    setOption(item);
  };
    console.log(product.productType);

const productList = data.allShopifyProduct.edges.map(({ node }) =>
    <Link to={`/products/${node.handle}`}
    activeClassName={'active'}>
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


  return (
    <Layout>
    <GlobalStyle/>

      <MainFixed>
      <LabelsFixed>

      {productList}
      </LabelsFixed>

      <PicHold>
              <Spacer/>
        {product.images.map(pic => (
          <img src={pic.originalSrc}/>
        ))}
      </PicHold>

      <Info>

      <div className='outliner'>
      <h2>{product.title}</h2>
      <p>{product.productType}</p>
      </div>

      <div className='outliner' dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}/>

      <div className='outliner' >
        <h3>${product.priceRange.minVariantPrice.amount}</h3>
        <p>Tax Incl.</p>
        <p>Free shipping over 200$</p>
        <Select>
       <option value="Small">S</option>
       <option value="Medium">M</option>
       <option value="Large">L</option>
       <option value="X-Large">XL</option>
     </Select>
     <Atc>Add To Cart</Atc>
      </div>
      </Info>


      </MainFixed>
    </Layout>
  )
}
export default ProductTemplate

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
          descriptionHtml
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
