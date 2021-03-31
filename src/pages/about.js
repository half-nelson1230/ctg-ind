import React, { useContext } from 'react'
import Layout from '~/components/layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';

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
min-height: 100%;

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

max-height: 1000px;
overflow-y: scroll;
@media(max-width: 1200px){
  grid-column: span 2;
  max-height: 500px;
  overflow-y: scroll;

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
min-height: 100%;
@media(max-width: 1200px){
    grid-column: span 4;
    max-height: 600px;
    min-height: none !important;
}

`


const About = ({ data }) => {
  const document = data.allPrismicAbout.edges[0].node.data


  return(

    <Main>
    <Text>
    <RichText render={document.about.raw}/>

    </Text>
    <Text>
      <RichText render={document.priorities.raw}/>
    </Text>
    <AboutImg src={aboutImg}/>
    </Main>

  )
}

export const query = graphql`
query AboutQuery {
  allPrismicAbout {
    edges {
      node {
        data {
          about {
            html
            raw
          }
          priorities {
            html
            raw
          }
        }
      }
    }
  }
}

`

export default About
