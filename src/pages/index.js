import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p id="description">This is a simple survey form site.</p>
    <Form />
  </Layout>
)

export default IndexPage
