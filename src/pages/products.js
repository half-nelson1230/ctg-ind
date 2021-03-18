import React, { useState } from 'react';
import GlobalStyle from '../styles/globalStyles.js'
import styled from 'styled-components'
import Nav from '../components/layout/nav.js'
import Footer from '../components/layout/footer.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { graphql, Link } from "gatsby";

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
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const Main = styled.div`
width: calc(100% - var(--Margin)*2);
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 0 var(--Margin);

a{
  &.active{
    div{
      background-color: #000;
      color: #fff;
      outline-color: #000 !important;
      cursor: pointer;
    }
  }
}

@media(max-width: 1200px){
  grid-template-columns: repeat(1, 1fr);
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

@media(max-width: 1200px){
  grid-column-start: 1;
}
@media(max-width: 750px){
  grid-template-columns: repeat(2, 1fr);
}
@media(max-width: 500px){
  grid-template-columns: repeat(1, 1fr);
}
`

const ImageDiv = styled.div`
height: 400px;
padding-bottom: 120%;
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
      return(
        <Link to={`/products/${node.handle}`}>
        <ImageDiv
        background={productPicList[0]}
        bgAlt={productPicList[1]}
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
        <Price>${node.priceRange.minVariantPrice.amount}</Price>
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
    <p>{node.productType}</p>
  </Label>
  </Link>
)

  return(
    <Parent>
    <Container>
    <GlobalStyle/>
    <Nav/>
    <Main>
      {breakpoints.md ?
        null
        :
        <Labels>
        {productList}
        </Labels>

      }

      <Products>
      {productPics}
      </Products>
    </Main>

    </Container>
        <Footer />
    </Parent>
  )
}

export default ProductPage

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
