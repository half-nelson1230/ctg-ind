import React, { useContext } from 'react'
import Layout from '~/components/layout'
import styled from 'styled-components'

import aboutImg from '~/images/Links/snow-peak-fall-winter-2019-lookbook-collection-12.jpg'

const Main = styled.div`
width: calc(100% - var(--Margin)*2);
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 0 var(--Margin);
margin-bottom: calc(var(--Margin) * -1);
@media(max-width: 1200px){
  grid-template-columns: 120px 1fr 1fr 1fr;
}
@media(max-width: 900px){
  grid-template-columns: repeat(4, 1fr);
}
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

const Text = styled.div`
outline: 2px solid;
padding: 20px;
font-family: eurostile;

@media(max-width: 1200px){
  grid-column: span 2;
}

@media(max-width: 500px){
  grid-column: span 4;
}

h2{
  font-weight: 800;
}

h3{
  margin: 0;
}

p{
  margin: 0 0 20px;
}

`

const AboutImg = styled.img`
width: 100%;
grid-column: span 2;
outline: 2px solid;
object-fit: cover;
object-position: top;
@media(max-width: 1200px){
    grid-column: span 4;
    max-height: 600px;
}

`


const About = () => {
  return(

    <Main>
    <Text>
    <h2>About</h2>
    <p>We believe the clothes we wear should last and be made with quality, but should not outlive our grandchildren degrading in landfills and oceans. There are alternatives to synthetic fabrics and CTG_IND is looking to progress existing and new materials to create functional clothing that treads lightly on our earth. Our clothes are designed to engage with the natural world and perform in various conditions. Starting with re-thinking of garments from the ground up, we hope to develop uncompromisingly sustainable clothing while pushing the boundaries of natural fibers and plant based technologies.
    </p>
    </Text>
    <Text>
    <h2>Principles</h2>
    <h3>Local Supply</h3>
    <p>Work with an increasingly local supply chain to produce our clothing. Starting with cotton grown, spun and sewed in the US, to growing our own algae to produce out screenprinting ink, CTG_IND is on a mission to reduce the distance travelled by the input materials of our products to as close to our production facility as possible. Supporting local economies, reducing the carbon footprint of the end product and creating artifacts that are products of their region.
    </p>
    <h3>Natural Materials</h3>
    <p>Humans have been working with natural fibers since the beginning of clothing. As we moved into more temperate climates and clothes became more important to protect from the cold, these fibers were further developed. In the last 40+ years we have seen synthetic fabrics all but takeover the clothing we make and now we are seeing the downsides to this shift in material. We are not prepared to effectively re-use these materials and create a cyclical stream production stream for these materials. They aren’t designed to be re-used and doing so is still quite inefficient leading to most petroleum products decaying over 100’s - 1000’s of years in landfills and oceans. It seems clear to me that relying on natural fibers and materials that are inherently cyclical is a better alternative. Once your cotton T Shirt has reached the end of its life and it can no longer be repaired
    </p>
    </Text>
    <AboutImg src={aboutImg}/>
    </Main>

  )
}

export default About
