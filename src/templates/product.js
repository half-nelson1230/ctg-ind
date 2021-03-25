import React, { useState } from 'react';
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

const ProductTemplate = ({ data }) => {
    const breakpoints = useBreakpoint();
    const [whatIndex, setIndex] = useState(0);

    const product=data.shopifyProduct
    const allproduct=data.allShopifyProduct


  return (
  <>
    <Helmet>
    <body class='nav-switch' />
</Helmet>
    <GlobalStyle/>

      <MainFixed>
      {breakpoints.sm ? null : <LabelsFixed>
      {allproduct.edges.map(({node}) =>
      <Link to={`/products/${node.handle}`} activeClassName="active">
      <Label
      key={node.shopifyId}
      className={whatIndex === node.shopifyId ? 'testLink' : ''}
      onMouseEnter={() => setIndex(node.shopifyId)}
      onMouseLeave={() => setIndex(0)}>
      <h3>{node.title}</h3>
      {breakpoints.md ?  null : <p>{node.productType}</p> }
      </Label>
      </Link>
    )}
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

      <div className='outliner' >
        <h3>${product.priceRange.minVariantPrice.amount}</h3>
        <p>Tax Incl.</p>
        <p>Free shipping over 200$</p>
       <ProductForm product={product} />
      </div>
      </Info>


      </MainFixed>
  </>
  )
}

export const query = graphql`
  query($handle: String!) {
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
  }
`


export default ProductTemplate
