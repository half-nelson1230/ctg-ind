
import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import Nav from './layout/nav.js'
import Footer from './layout/footer.js'
import GlobalStyle from '../styles/globalStyles.js'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import ProductLabels from '~/components/layout/productLabels'
import ContextProvider from '~/provider/ContextProvider'

import PropTypes from 'prop-types'

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
}
}
`



const Layout = ({ children }) => {

  return (
    <ContextProvider>
      <GlobalStyle />

          <Container>
          <GlobalStyle/>
          <Nav />
            {children}
            <Footer/>
          </Container>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
