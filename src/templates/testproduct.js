import React, { useState } from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';

const Main = styled.div`
width: calc(100% - var(--Margin)*2); 
margin: 0 var(--Margin);
font-family: eurostile;

`



const TestPage = ({data}) => {

    if(!data) return null
    const document = data.allPrismicNittyGritty.edges[0].node.data

return(
  <Main>
  <RichText render={document.text.raw}/>
  </Main>
)

}
export const query = graphql`
query NittyGrittyQuery($uid: String) {
  allPrismicProduct(filter: {uid: {eq: $uid}}) {
   edges {
     node {
       data {
        product
       }
     }
   }
 }
}

`

export default TestPage
