
import React, { useContext, useState } from 'react'

import Nav from '~/components/layout/nav.js'
import Footer from '~/components/layout/footer.js'

import GlobalStyle from '~/styles/globalStyles.js'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import ContextProvider from '~/provider/ContextProvider'
import Signup3 from '~/components/layout/popup3'

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
  const [closed, toggleClosed] = useState(true)
  const closer = () => {
    toggleClosed(true);
  }

  const opener = () => {
    toggleClosed(false);
  }

  const delayClose = () => {
    setTimeout(() => {toggleClosed(true)}, 2000);
  }

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
        `}
        render={data => {
          const emaildoc = data.allPrismicEmailSignup.edges[0].node.data
          return(
          <>

                    <Container>
                    <GlobalStyle/>
                    <Nav />
                      {children}
                      {closed ? null :
                        <Signup3
                        title={emaildoc.title}
                        text={emaildoc.default_text.raw}
                        successText={emaildoc.success_text.raw}
                        emailText={emaildoc.email_field}
                        submitText={emaildoc.submit_text}
                        closer={closer}
                        submitter={delayClose}/>

                      }

                      <Footer
                      popup={opener}/>
                    </Container>
          </>
        )}}
      />


    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
