import * as React from "react"
import {useState, useRef} from "react"
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby' 
import { RichText } from 'prismic-reactjs';

import arrow from '~/images/Links/arrow.svg'

const Container = styled.div`
outline: 2px solid;
position: relative;
`

const Sizes = styled.div`
display: flex;
justify-content: space-between;

button{
  outline: 2px solid;
  width: 100%;
  text-align: center;
  font-weight: 900;
  padding: 10px;
  background-color: #fff;
  border: none;
  &.active{
    background-color: #000;
    color: #fff;
    outline-color: #000;
  }
}
`

const SizeImage = styled.img`
width: 100%;
outline: 2px solid;
padding: 20px;
`

const Specs = styled.div`
display: flex;
p{
  width: 100%;
  padding: 10px 20px;
  outline: 2px solid;
  text-align: center;
}
`

const GuideToggle = styled.button`
padding: 0 10px 0 20px;
background: #fff;
border: none;
outline: 2px solid;
width: 100%;
text-align: left;
display: flex;
align-items: center;
height: 40px;
justify-content: space-between;
span{
  width: 40px;
  padding: 9px ;
  margin-right: -10px;
  object-fit: contain;
  height: 40px;
  outline: 2px solid;
  img{
      transform: rotate(180deg);
  }
}
&.active{
  span{
    background-color: #000;
    outline-color: #000;
    img{
      transform: rotate(0deg);
      filter: invert(1);
    }
  }
}
`

const ImgHold = styled.div`
position: relative;

`

const Metrics = styled.div`
display: flex;
position: absolute;
top: 5px;
right: 5px;

button{
  font-family: eurostile-extended;
  font-weight: 800;
  padding: 5px;
  font-size: 14px;
  color: #999;
  background-color: #fff;
  border: none;
  outline: none;

  &.active{
    color: #000;
  }
}
`

const shorts = [
  {title: 's', waistIn: '30in. max', legIn: '5in', waistCm: '76cm max', legCm: '12.7cm'},
  {title: 'm', waistIn: '40in. max', legIn: '6in', waistCm: '86cm max', legCm: '13.7cm'},
  {title: 'l', waistIn: '50in. max', legIn: '7in', waistCm: '96cm max', legCm: '14.7cm'},
  {title: 'xl', waistIn: '60in. max', legIn: '8in', waistCm: '106cm max', legCm: '15.7cm'},
]


const Diagrams = (props, { data }) =>{

  const [size, sizeCheck] = useState(false);
  const [inch, inchCheck] = useState(true);
  const [sizeIndex, checkIndex] = useState(0);
  const scrollo = props.scrolly
  const toggleSize = () => {
    sizeCheck(!size);
    if(size === false){
      scrollo.current?.scrollIntoView({behavior: "smooth", block: "end"})
    }

  }

  const toggleInch = () => {
    inchCheck(true);
  }

  const toggleCm = () => {
    inchCheck(false);
  }

  const toggleIndex = () => {
    checkIndex(2);
  }





  return(
    <>
    <StaticQuery
          query={graphql`
            query DiagramQuery {
              allPrismicProductDiagrams {
    edges {
      node {
        data {
          product
          image {
            url
          }
          body {

            ... on PrismicProductDiagramsBodySize {
              id
              items {
                measurement
                size_cm
                size_in
              }
              primary {
                size
              }
            }
          }
        }
      }
    }
  }

            }
          `}
          render={data => {
            const diagram = data.allPrismicProductDiagrams
            return(
            <>
            {diagram.edges.map(({node}) => {
              const checkName = node.data.product.title
              if(props.testo === checkName){
                return(
              <Container>
              <GuideToggle onClick={toggleSize} className={size === true && 'active'}>sizing guide<span><img src={arrow}/></span></GuideToggle>

                  {size ?
                <>
                <Sizes>

                  {node.data.body.map((slice, index) => <button className={sizeIndex === index && 'active'} onClick={() => checkIndex(index)} >{slice.primary.size}</button>)}
                  </Sizes>
                <ImgHold>
                <Metrics>
                <button className={inch === true && 'active'} onClick={toggleInch}>in.</button>
                <button className={inch === false && 'active'} onClick={toggleCm}>cm.</button>
                </Metrics>
                <SizeImage src={node.data.image.url}/>
                </ImgHold>
                <Specs>
                {node.data.body.map((slice, index) =>
                    <>
                    {index === sizeIndex &&
                      <>
                      {slice.items.map((size, index) =>
                        <p><strong>{size.measurement}</strong> {inch === true ? `${size.size_in}` : `${size.size_cm}`}</p>
                      )}
                      </>
                    }

                    </>
                  )
                }
                </Specs>
                </>
                : null}
                </Container>
                )
              }
              else return null

            })}
            </>
          )}}
        />


    </>
  )
}

export default Diagrams
