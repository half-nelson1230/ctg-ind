import * as React from "react"
import GlobalStyle from '../styles/globalStyles.js'
import styled from 'styled-components'
import Nav from '../components/layout/nav.js'
import Signup from '../components/layout/popup.js'
import Footer from '../components/layout/footer.js'
import Layout from "~/components/layout"
import Helmet from 'react-helmet'
import {FullImage, TwoImages} from '~/components/layout/slices/slices'
import { graphql } from 'gatsby'

//styled components
const Container = styled.div`
display: flex;
flex-wrap: wrap;
position: relative;
img{
display: block;
}
`

const NavHold = styled.div`
position: absolute;
width: 100%;
display: flex;
`


// markup


const Slices = ({ slices }) =>
slices.map((slice, index) => {
  const res = (() => {
    switch (slice.slice_type){
      case 'full_image':
      return(
        <FullImage slice={slice}/>
      )
      case '2_images':
      return(
        <TwoImages slice={slice}/>
      )
      default:
    }
  })()
  return res
})



const IndexPage = ({ data }) => {
  const document = data.allPrismicHomepage.edges[0].node.data
  const emaildoc = data.allPrismicEmailSignup.edges[0].node.data

  return (
    <>
    <Helmet>
    <body class='nav-switch2' />
</Helmet>
    <Container>
    <GlobalStyle/>
    <Slices slices={document.body}/>
    <Signup
      text={emaildoc.text.raw}
      emailText={emaildoc.email_field}
      submitText={emaildoc.submit_text}
    />
    </Container>
    </>
  )
}

export const query = graphql`
  query HomeQuery {
    allPrismicHomepage {
   edges {
     node {
       data {
         body {

           ... on PrismicHomepageBodyFullImage {
             slice_type
              id
              primary {
                image {
                  url
                }
              }
            }

            ... on PrismicHomepageBody2Images {
              slice_type
               id
               primary {
                 image_1 {
                   url
                 }
                 image_2 {
                   url
                 }
               }
             }

         }
       }

     }
   }
 }
 allPrismicEmailSignup {
   edges {
     node {
       data {
         email_field
         submit_text
         text {
           raw
         }
       }
     }
   }
 }
  }
`

export default IndexPage
