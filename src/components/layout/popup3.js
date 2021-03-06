import * as React from "react"
import {useState, useEffect} from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Draggable from 'react-draggable'; // The default
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


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

:hover{
  cursor: move;
}

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
  text-align: center;
}}

button{
  :hover{
    cursor: pointer;
  }
}

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


const Signup3 = (props) =>{

  const [closeBox, checkClosed] = useState(false);
  const [closed, toggleClosed] = useState(false)



  const [email, checkEmail] = useState(null);
  const [result, checkResult] = useState(null);

  const [closeTemp, setCloseTemp] = useState(undefined)

  const clickBox = () => {
    checkClosed(!closeBox);
    sessionStorage.setItem('tempClose', true);
  }


  useEffect(() => {
    setCloseTemp(sessionStorage.getItem('tempClose'))
  }, [])

  console.log(closeTemp);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email, {
      FROM: 'footer'
    })
    checkResult({result: result})
    }

  const handleChange = e => {
    checkEmail(e.target.value)
  }


  let peepResult;
  let resultMessage;
  let hideform;
  let delayform;

  if(result === null){
    peepResult = 'default'
  }else {
    peepResult = result.result.result
    resultMessage = result.result.msg
  }

  if(peepResult === 'success'){
    setTimeout(() => {checkClosed(true)}, 2000);
  }


  const submitClose = () => {
    if(peepResult === 'success'){
      setTimeout(() => {checkClosed(true)}, 2000);
    }
  }



  return(
    <>
    {closeBox ? null :

      <form onSubmit={handleSubmit} className={`form ${hideform}`}>
      {isMobile ?

        <Container className="">
        <>
        <h2>{props.title}</h2>
        {peepResult === 'success' ? <RichText render={props.successText}/>
        : peepResult === 'error' ? <p>{resultMessage}</p>
        :
        <RichText render={props.text}/>
        }
        <h3>{props.emailText}</h3>
           <input
           className={'box'}
           type="text"
           value={email}
           onChange={handleChange}
           />
       <button className={'box'} onClick={submitClose}  type="submit">{props.submitText}</button>
       </>
        <Close onClick={props.closer} onTouchStart={props.closer}>X</Close>
        </Container>

        :


        <Draggable>
        <Container className="">
        <>
        <h2>{props.title}</h2>
        {peepResult === 'success' ? <RichText render={props.successText}/>
        : peepResult === 'error' ? <p>{resultMessage}</p>
        :
        <RichText render={props.text}/>
        }
        <h3>{props.emailText}</h3>
           <input
           className={'box'}
           type="text"
           value={email}
           onChange={handleChange}
           />
       <button className={'box'} onClick={submitClose}  type="submit">{props.submitText}</button>
       </>
        <Close onClick={props.closer} onTouchStart={props.closer}>X</Close>
        </Container>
        </Draggable>
      }
      </form>

    }

    </>

  )
}
export const query = graphql`
query EmailQuery3 {
  allPrismicEmailSignup {
    edges {
      node {
        data {
          default_text {
          raw
        }
        success_text {
          raw
        }
        email_field
        submit_text
        title
        }
      }
    }
  }
}
`

export default Signup3
