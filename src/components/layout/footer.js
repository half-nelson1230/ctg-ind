import * as React from "react"
import styled from 'styled-components'

const Container = styled.div`
width: calc(100% - var(--Margin) * 2 - 70px);
display: flex;
margin: var(--Margin);
background-color: #fff;

&.yes{
  position: absolute;
  bottom: 0;
}
div{
  outline: 2px solid;
}


@media(max-width: 900px){
  width: calc(100% - var(--Margin) * 2);
}
@media(max-width: 750px){
  flex-wrap: wrap;
}
`

const Block = styled.div`
display: flex;
width: 100%;
padding: 20px;
align-items: flex-start;
justify-content: space-between;

@media(max-width: 900px){
  flex-wrap: wrap;
}
@media(max-width: 750px){
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 16px 20px;
  height: 60px;
  align-items: center;
  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
}

h3, ul{
  width: 100%;
}
h3{
  margin: -3px 6px 6px 0;
  font-family: windsor;
}

ul{
  font-family: eurostile;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;

  li{
    margin-bottom: 6px;
  }
}
`

const Footer = (props) => {
  return(
    <Container className={props.abso}>
    <Block>
      <h3>Contact</h3>
      <ul>
        <li>email us</li>
        <li>instagram</li>
      </ul>
    </Block>
    <Block>
    <h3>Services</h3>
    <ul>
      <li>FAQ</li>
      <li>Shipping & Returns</li>
    </ul>
    </Block>
    <Block>
    <h3>Newsletter</h3>
    <ul>
      <li>subscribe to our newsletter</li>
    </ul>
    </Block>
    <Block>
    <h3>Terms of Service</h3>
    <ul>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
    </Block>
    </Container>
  )
}

export default Footer
