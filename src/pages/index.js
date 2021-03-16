import * as React from "react"
import GlobalStyle from '../styles/globalStyles.js'
import styled from 'styled-components'
import Nav from '../components/layout/nav.js'
import Signup from '../components/layout/popup.js'
import Footer from '../components/layout/footer.js'

//images
import firstImage from "../images/Links/snow-peak-fall-winter-2019-lookbook-collection-14.jpg"
import secondImage from "../images/Links/snow-peak-fall-winter-2019-lookbook-collection-15.jpg"
import thirdImage from "../images/Links/snow-peak-fall-winter-2019-lookbook-collection-23.jpg"

//styled components
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
  @media(max-width: 750px){
    width: 100%;
  }
}
}
`

const NavHold = styled.div`
position: absolute;
width: 100%;
display: flex;
`


// markup
const IndexPage = () => {
  return (
    <Container>
    <GlobalStyle/>
    <NavHold>
    <Nav/>
    </NavHold>
    <img src={firstImage} alt="first" className={"bigImage"}/>
    <img src={secondImage} alt="second" className={"halfImage"}/>
    <img src={thirdImage} alt="third" className={"halfImage"}/>
    <Signup/>
    <Footer abso="yes"/>
    </Container>
  )
}

export default IndexPage
