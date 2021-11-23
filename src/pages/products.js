import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from '../components/layout/nav.js'
import Footer from '../components/layout/footer.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useStaticQuery, graphql, Link } from 'gatsby'
import ContextProvider from '~/provider/ContextProvider'
import ProductLabels from '~/components/layout/productLabels'
import Layout from '~/components/layout'

import walnutpic from '~/images/TS_01_BW_S_Front_R02.gif'

//styled components
const Container = styled.div`
display: flex;
flex-wrap: wrap;

img{
display: block;
&.bigImage{
  width: 100%;
}

&.halfImage{
  width: 50%;
}
}
`

const Parent = styled.div`
min-height: calc(100vh - 282px);
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
`

export const Main = styled.div`
width: calc(100% - var(--Margin)*2);
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 0 var(--Margin);

@media(max-width: 1200px){
  grid-template-columns: 120px 1fr 1fr 1fr;
}
@media(max-width: 900px){
  grid-template-columns: repeat(4, 1fr);
}
a{
  &.active{

  }
}

@media(max-width: 900px){
  width: 100%;
}
`

const Products = styled.div`
display: grid;
grid-column-start: 2;
grid-column-end: 5;
grid-template-columns: repeat(3, 1fr);


@media(max-width: 900px){
  grid-template-columns: repeat(2, 1fr);
  grid-column-start: 1;
}
@media(max-width: 500px){
  grid-template-columns: repeat(1, 1fr);
}
`

const ImageDiv = styled.div`
height: 400px;
padding-bottom: 150%;
background-image: ${props => `url(${props.background})`};
background-size: cover;
outline: 2px solid;

background-position: center center;
position: relative;
:hover{
  background-image: ${props => `url(${props.bgAlt})`};
  cursor: pointer;
}

&.testLink{
    background-image: ${props => `url(${props.bgAlt})`};
}
`

export const Labels = styled.div`
display: flex;
flex-direction: column;

h3{
  padding: 0 10px;
  font-family: eurostile-extended, eurostile;
  font-weight: 900;
  font-style: normal;
  font-size: 28px;
  line-height: 18px;

  @media(max-width: 1200px){
    font-size: 18px;
    text-align: center;
    margin: 1em auto;
  }
}

p{
  font-family: eurostile;
  font-weight: 300;
}
`

export const Label=styled.div`

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

const PicLabels = styled.div`
position: absolute;
bottom: 0;
left: 0;
margin: var(--Margin);
`

const NameCat = styled.div`
display: flex;
margin: 0;

h3{
  margin: 0;
  font-family: eurostile-extended, eurostile;
  font-weight: 900;
  font-size: 24px;
}

p{
  margin: 6px 0 0 10px;
  font-family: eurostile-extended, eurostile;
  font-weight: 400;

}
`

const Price = styled.h4`
margin: 0;
font-family: eurostile-extended, eurostile;
font-weight: 900;
color: #888;
`


const ProductPage = ({ data }) => {
  const [whatIndex, setIndex] = useState(0);
  const breakpoints = useBreakpoint();





  const productPics = data.allShopifyProduct.edges.map(({ node }) => {
    const productPicList = node.images.map(pic => pic.originalSrc)
    const bgImg = productPicList[0]
    let checkAnimation = node.tags.includes('animation')
      return(
        <Link to={`/products/${node.handle}`}>
        <ImageDiv
        background={productPicList[0]}
        bgAlt={checkAnimation ? productPicList[0] : productPicList[1]}
        className={whatIndex === node.shopifyId ? 'testLink' : ''}
        onMouseEnter={() => setIndex(node.shopifyId)}
        onMouseLeave={() => setIndex(0)}
      >
      {breakpoints.md ?
      <PicLabels>
        <NameCat>
        <h3>{node.title}</h3>
        <p>{node.productType}</p>
        </NameCat>
        <Price>${node.variants[0].price}</Price>
      </PicLabels>

      :

      null

    }
        </ImageDiv>
        </Link>

      )
  }
)


  const productList = data.allShopifyProduct.edges.map(({ node }) =>
  <Link to={`/products/${node.handle}`}>
  <Label
    key={node.shopifyId}
    className={whatIndex === node.shopifyId ? 'testLink' : ''}
    onMouseEnter={() => setIndex(node.shopifyId)}
    onMouseLeave={() => setIndex(0)}
  >
    <h3>{node.title}</h3>
    {breakpoints.md ? null : <p>{node.productType}</p>}
  </Label>
  </Link>
)

console.log(data.allShopifyProduct.edges)

  return(

    <Parent>
    <Container>

    <Main>
      {breakpoints.sm ?
        null
        :
        <Labels>
        {productList[1]}
        {productList[0]}
        {productList[4]}
        {productList[2]}
        {productList[4] ? productList[3] : null}
        </Labels>

      }

      <Products>
      {productPics[1]}
      {productPics[0]}
      {productPics[4]}
      {productPics[2]}
      {productPics[4] ? productPics[3] : null}
      </Products>
    </Main>

    </Container>

    </Parent>

  )
}

export default ProductPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [productType] }) {
      edges {
        node {
          title
          tags
          productType
          images {
            id
            originalSrc
          }
          shopifyId
          description
          handle
          variants{
            price
          }
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
