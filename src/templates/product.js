import React, { useState, useEffect, useRef } from 'react';
import Layout from "~/components/layout"
import GlobalStyle from '../styles/globalStyles.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { graphql, Link } from "gatsby";
import styled from 'styled-components'
import Footer from '../components/layout/footer.js'
import Client from 'shopify-buy'
import ProductForm from '../components/ProductForm/index'
import { MainFixed, LabelsFixed, PicHold, Spacer, Info, Select, Atc} from './utilities/productStyles'
import {Labels, Label} from '~/pages/products'
import Helmet from 'react-helmet'
import Diagrams from '~/components/layout/diagram'
import Signup from '../components/layout/popup2.js'

const Clear = styled.div``

const ProductTemplate = ({ data }) => {
    const breakpoints = useBreakpoint();
    const [whatIndex, setIndex] = useState(0);
    const [sizeIndex, checkIndex] = useState(0);

    const clearRef = useRef(null);

    const product=data.shopifyProduct
    const allproduct=data.allShopifyProduct
    const diagram=data.allPrismicProductDiagrams
    const diagramSlice = data.allPrismicProductDiagramsBodySize
    const emaildoc = data.allPrismicEmailSignup.edges[0].node.data


    const productList = data.allShopifyProduct.edges.map(({node}) =>
    <Link to={`/products/${node.handle}`} >

    <Label
    key={node.shopifyId}
    className={whatIndex === node.shopifyId ? 'testLink' : ''}
    onMouseEnter={() => setIndex(node.shopifyId)}
    onMouseLeave={() => setIndex(0)}>
    <span/>
    <h3>{node.title}</h3>
    {breakpoints.md ?  null : <p>{node.productType}</p> }
    </Label>
    </Link>
    )

  return (
  <>
    <Helmet>
    <body class='nav-switch' />
</Helmet>
    <GlobalStyle/>

      <MainFixed>

      {breakpoints.sm ? null : <LabelsFixed>
        {productList[2]}
        {productList[0]}
        {productList[1]}
      </LabelsFixed>}



      <PicHold>
              <Spacer/>
        {product.images.map(pic => (
          <img src={pic.originalSrc}/>
        ))}
      </PicHold>

      <Info>

      <div className='outliner'>
      <h2>{product.title}</h2>
      <p>{product.productType}</p>
      </div>

      <div className='outliner' dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}/>
      <Diagrams
      scrolly={clearRef}
        testo={product.title}
      />
      <div className='outliner' >
      <h3>${product.variants[0].price}</h3>
       <ProductForm product={product} />

      </div>
      </Info>

      <Clear ref={clearRef}/>
      </MainFixed>
  </>
  )
}

export const query = graphql`
  query($handle: String!) {
    allPrismicProductDiagrams {
   edges {
     node {
       data {
         product
         image {
           url
         }
       }
     }
   }
 }
 allPrismicProductDiagramsBodySize {
   edges {
     node {
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

    allShopifyProduct(sort: { fields: [title] }) {
  edges {
    node {
      id
      handle
      title
      productType
      shopifyId
    }
  }
}
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
      }
    }
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


export default ProductTemplate
