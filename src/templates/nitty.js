import React, { useState } from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';
import CustomLink from './utilities/customLink'

const Main = styled.div`
width: calc(100% - var(--Margin)*2);
margin: 0 var(--Margin);
font-family: eurostile;
outline: 2px solid;
padding: 20px;

div{
  max-width: 800px;
}
h2{
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 20px;
  font-family: eurostile-extended;
  line-height: 48px;
}

h4{
  font-size: 28px;
  margin: 0 0 5px;
  line-height: 28px;
}

h6{
  font-size: 18px;
  margin: 0;
}

p{
  margin: 0 0 20px;
}

@media(max-width: 500px){

  h2{
    font-size: 32px;
    line-height: 36px;
  }
}
`



const NittyPage = ({data}) => {

    if(!data) return null
    const document = data.allPrismicNittyGritty.edges[0].node.data

return(
  <Main>
  <div>
  <RichText render={document.text.raw} serializeHyperlink={CustomLink}/>
  </div>
  </Main>
)

}
export const query = graphql`
query NittyQuery($uid: String) {
  allPrismicNittyGritty(filter: {uid: {eq: $uid}}) {
   edges {
     node {
       data {
         text {
           raw
         }
       }
     }
   }
 }
}

`

export default NittyPage
