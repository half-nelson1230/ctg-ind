import React, { useState, useEffect, useRef, Suspense } from 'react';
import Layout from "~/components/layout"
import GlobalStyle from '../styles/globalStyles.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { graphql, Link } from "gatsby";
import styled from 'styled-components'
import Footer from '../components/layout/footer.js'
import Client from 'shopify-buy'
import ProductForm from '../components/ProductForm/index'
import { MainFixed, LabelsFixed, PicHold, Spacer, Info, Select, Atc, ThreeDModel} from './utilities/productStyles'
import {Labels, Label} from '~/pages/products'
import Helmet from 'react-helmet'
import Diagrams from '~/components/layout/diagram'
import Signup from '../components/layout/popup2.js'
import ScriptTag from 'react-script-tag';


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
  {console.log(node, 'checky')}
    </Link>


    )

    let modelSwitch
    let hasModel
    console.log(product.title)
    const checkShirtModel = product.tags.includes('shirt_model')
    const checkShortsModel = product.tags.includes('shorts_model')
    console.log('shirt model' + checkShirtModel)
    console.log('shorts model' + checkShortsModel)

    if(checkShirtModel === true){
      modelSwitch = "https://storage.googleapis.com/titanpointe/thirdaxis/CTG/CTG_IND_SHIRT_1018_1731.glb"
      hasModel = true;
    }else if(checkShortsModel === true){
      modelSwitch = "https://storage.googleapis.com/titanpointe/thirdaxis/CTG/CTG_IND_SHORTS_draco_1008_1800.glb"
      hasModel = true;
    }else{
      hasModel = false
    }

  return (
  <>
    <Helmet>
    <body class='nav-switch' />
</Helmet>
    <GlobalStyle/>

      <MainFixed>

      {breakpoints.sm ? null : <LabelsFixed>

        {productList}

      </LabelsFixed>}


      <PicHold>
              <Spacer/>
              <ScriptTag type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></ScriptTag>

        {product.images.map(pic => (
          <img src={pic.originalSrc}/>
        ))}

        {hasModel ?
        <ThreeDModel className='outliner'>
        <model-viewer
      seamless-poster camera-orbit="108.5deg 93.4deg auto" style={{height: 500, width: 100 + "%", 'outline': '2px solid'}}  src={modelSwitch} ar ar-modes="webxr scene-viewer quick-look" camera-controls></model-viewer>
        </ThreeDModel>
        :

        null
        }
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

    allShopifyProduct(sort: { fields: [createdAt] }) {
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
      tags
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
