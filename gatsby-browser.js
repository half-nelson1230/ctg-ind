/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider initialEnabled={true}>{element}</PreviewStoreProvider>
)
