import * as React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';
import CustomLink from '~/templates/utilities/customLink'

const Container = styled.div`
width: ${props => props.full ? '100%' : 'calc(100% - var(--Margin) * 2)'};
display: flex;
margin: var(--Margin);
background-color: #fff;

&.yes{
  position: absolute;
  bottom: 0;
  width: calc(100% - var(--Margin) * 2);
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
@media(max-width: 500px){
  display: flex;
  padding: 10px;
  height: auto;
  justify-content: flex-start;
  ul{
    display: flex;
    li{
      padding-right: 20px;
    }
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
    <Container className='fixfoot'
    full={props.full}>
    <StaticQuery
        query={graphql`
          query footerQuery {
            prismicFooter {
    data {
      section {
        links {
          raw
        }
        category
      }
    }
  }
          }
        `}
        render={data => (
          <>
              {data.prismicFooter.data.section.map((block, i) => (
                <Block key={`block-${i}`}>
                <h3>{block.category}</h3>
                <ul>
                <RichText render={block.links.raw} serializeHyperlink={CustomLink}/>
                </ul>
                </Block>
              ))}

          </>
        )}
      />
    </Container>
  )
}

export default Footer
