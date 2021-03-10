import * as React from "react"
import styled from 'styled-components'

const Container = styled.div`
width: calc(100% - var(--Margin) * 2);
display: flex;
margin: var(--Margin);
position: absolute;
bottom: 0;
background-color: #fff;
border: 2px solid;

div + div{
  border-left: 2px solid;
}
`

const Block = styled.div`
display: flex;
width: 100%;
padding: 20px;
align-items: flex-start;
justify-content: space-between;
h3, ul{
  width: 100%;
}
h3{
  margin: 0;
  font-family: windsor;
}

ul{
  font-family: eurostile;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
}
`

const Footer = () => {
  return(
    <Container>
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
