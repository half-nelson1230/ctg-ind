import React, { useContext, useState } from 'react'
import Layout from '~/components/layout'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import ProcessVid from '~/components/Process/videoblock'

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



const Process = () => {
  return(

    <Main>
    <ProcessVid
      title='Organic Cotton'
      para='We use organic cotton grown in Texas by Texas
Organic Cotton Marketing Collective (TOCMC).
The raw cotton is then shipped to North Carolina where it is spun and knit into our organic cotton jersey.
The rolls of fabric are then shipped to our
manufacturing facility in New York to be made into our products. Here is a short video illustrating this process, the people and machinery involved.

Video Credit : Jake Robins'
      vidUrl='https://vimeo.com/502084279'
      thumb={firstImage}
    />
    <ProcessVid
      title='Organic Cotton'
      para='We use organic cotton grown in Texas by Texas
Organic Cotton Marketing Collective (TOCMC).
The raw cotton is then shipped to North Carolina where it is spun and knit into our organic cotton jersey.
The rolls of fabric are then shipped to our
manufacturing facility in New York to be made into our products. Here is a short video illustrating this process, the people and machinery involved.

Video Credit : Jake Robins'
      vidUrl='https://vimeo.com/496843494'
      thumb={secondImage}
    />
    </Main>

  )
}

export default Process
