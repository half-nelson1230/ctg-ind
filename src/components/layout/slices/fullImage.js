import * as React from 'react'
import styled from 'styled-components'

const Image =styled.img`
width: 100%;
height: auto;
`

export default function FullImage({slice}) {
  return(
    <Image src={slice.primary.image.url}/>
  )
}
