import * as React from "react"
import {useState} from "react"
import { Link } from "gatsby"
import GlobalStyle from '../styles/globalStyles.js'
import styled from 'styled-components'
import Nav from '../components/layout/nav.js'
import Footer from '../components/layout/footer.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

//images
import firstImage from "../images/Links/Kids-Organic-Cotton-T-Shirt-Off-White-1_ce8ec1de-3bda-4094-a9ae-b1f577548602.jpg"
import secondImage from "../images/Links/Lightweight-Organic-Cotton-Shorts-Off-White-1_900x.jpg"
import thirdImage from "../images/Links/ctgIndBag.jpg"

import firstAlt from "../images/Links/Seaweed-Fiber-High-Neck-Long-Sleeve-T-Shirt-Off-White-Female-Model-1_1500x.jpg"
import secondAlt from "../images/Links/122998079_1092137804549215_6067106821591667747_o.jpg"
import thirdAlt from "../images/Links/back.jpg"

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

const Main = styled.div`
width: calc(100% - 72px - var(--Margin)*2);


display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 0 var(--Margin);

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

const Labels = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;

@media(max-width: 1200px){
  flex-direction: row;

}

h3{
  padding: 10px;
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

const Blocker = styled.div`
width: 100%;
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


const ProductPage = () => {
  const [whatIndex, setIndex] = useState(0);
  const breakpoints = useBreakpoint();

  const products = [
    {title: 'TS_01', classifier: 'Shirt', price: '85.00', mainImage: firstImage, altImage: firstAlt},
    {title: 'SH_01', classifier: 'Shorts', price: '85.00', mainImage: secondImage, altImage: secondAlt},
    {title: 'ST_01', classifier: 'Stuff Sack', price: '85.00', mainImage: thirdImage, altImage: thirdAlt}
  ]

  const productPics = products.map((item, index) =>
  <ImageDiv
    background={item.mainImage}
    bgAlt={item.altImage}
    className={`${whatIndex !== index + 1 ? '' : 'testLink'}`}
    onMouseEnter={() => setIndex(index + 1)}
    onMouseLeave={() => setIndex(0)}
    value={item.id}
  >
  {breakpoints.md ?
  <PicLabels>
    <NameCat>
    <h3>{item.title}</h3>
    <p>{item.classifier}</p>
    </NameCat>
    <Price>${item.price}</Price>
  </PicLabels>

  :

  null

}
  </ImageDiv>
)

  const productList = products.map((item, index) =>
  <Label
    className={`${whatIndex !== index + 1 ? '' : 'testLink'}`}
    onMouseEnter={() => setIndex(index + 1)}
    onMouseLeave={() => setIndex(0)}
  >
    <h3>{item.title}</h3>
    <p>{item.classifier}</p>
  </Label>
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
        <Footer/>
    </Parent>
  )
}

export default ProductPage
