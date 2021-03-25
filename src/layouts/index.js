
import React, { useContext } from 'react'

import Nav from '~/components/layout/nav.js'
import Footer from '~/components/layout/footer.js'

import GlobalStyle from '~/styles/globalStyles.js'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

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
    <StaticQuery
        query={graphql`
          query siteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>

                    <Container>
                    <GlobalStyle/>
                    <Nav />
                      {children}
                      <Footer/>
                    </Container>
          </>
        )}
      />


    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
