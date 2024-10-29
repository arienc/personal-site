import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>test example learning React</p>
      <StaticImage
        alt="ramona flowers"
        src="../images/icon.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage