import * as React from 'react'
import styled from 'styled-components'

const Image =styled.img`
display: block;
width: 50%;
@media(max-width: 750px){
  width: 100%;
  height: inherit !important;
  object-fit: cover;
  align-self: center;

}
`

export default function TwoImages({slice}) {
  return(
    <>
    <Image src={slice.primary.image_1.url}/>
    <Image src={slice.primary.image_2.url}/>
    </>
  )
}
