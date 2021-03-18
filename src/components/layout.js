import React from "react"
import Nav from './layout/nav.js'
import Footer from './layout/footer.js'
import GlobalStyle from '../styles/globalStyles.js'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
position: relative;
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


export default function Layout({ children }) {
  return (
    <Container>
    <GlobalStyle/>
    <Nav position='fixed'/>
      {children}
      <Footer/>
    </Container>
  )
}
