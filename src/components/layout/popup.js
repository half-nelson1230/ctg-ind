import * as React from "react"
import {useState} from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';

//styled
const Container = styled.div`
position: fixed;
bottom: var(--Margin);
left: var(--Margin);
background-color: #fff;
border: 2px solid;
width: 240px;
padding: 30px;
text-align: center;
font-family: eurostile;
z-index: 2;
h2{
  font-weight: 800;
  font-size: 18px;
}

p{
  font-weight: 300;
  font-size: 18px;
}

h3{
  font-size: 14px;
  font-weight: 800;
  margin-bottom: -8px;
}

input, button{
&.box{
  border-radius: 0;
  border: 2px solid;
  width: 100%;
  background: none;
  font-family: eurostile;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  display: block;
  padding: 0;
  box-sizing: inherit;
  margin: 10px 0;
}}

`

const Close = styled.button`
position: absolute;
top: 0;
right: 0;
line-height: 4px;
padding: 14px;
font-size: 14px;
font-family: eurostile;
font-weight: 800;
border: none;
background: #fff;
border-left: 2px solid;
border-bottom: 2px solid;

:focus{
  outline: none;
}

:hover{
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
`


const Signup = (props) =>{

  const [closeBox, checkClosed] = useState(false);
  const clickBox = () => {
    checkClosed(!closeBox);
  }
  return(
      <div>
      {closeBox ? null : <Container>
        <RichText render={props.text}/>
        <h3>{props.emailText}</h3>
        <input className={'box'}></input>
        <button className={'box'}>{props.submitText}</button>
        <Close onClick={clickBox}>X</Close>
      </Container>}

      </div>
  )
}
export const query = graphql`
query EmailQuery {
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

export default Signup
