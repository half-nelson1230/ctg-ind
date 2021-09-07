import React, { useContext, useState } from 'react'
import Layout from '~/components/layout'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import ProcessVid from '~/components/Process/videoblock'
import {ProcessVideo} from '~/components/layout/slices/slices'
import { graphql } from 'gatsby'

import aboutImg from '~/images/Links/snow-peak-fall-winter-2019-lookbook-collection-12.jpg'
import firstImage from "~/images/Links/WPD_07.jpg"
import secondImage from "~/images/Links/WPD_09.jpg"

const Main = styled.div`
width: calc(100% - var(--Margin)*2);
display: grid;
margin: 0 var(--Margin);
margin-bottom: calc(var(--Margin) * -1);
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

const Slices = ({ slices }) =>
slices.map((slice, index) => {
  const res = (() => {
    switch (slice.slice_type){
      case 'video':
      return(
        <ProcessVideo slice={slice}/>
      )
      default:
    }
  })()
  return res
})


const Process = ({ data }) => {
  const document = data.allPrismicProcess.edges[0].node.data

  return(

    <Main>
    <Slices slices={document.body}/>
    </Main>

  )
}

export const query = graphql`
  query ProcessQuery {
    allPrismicProcess {
   edges {
     node {
       data {
         body {

           ... on PrismicProcessBodyVideo {
             slice_type
              id
              primary {
                placeholder_image {
                  url
                }
                text {
                  raw
                }
                video_link {
                  url
                  embed_url
                }
              }
            }

         }
       }

     }
   }
 }
  }
`

export default Process
