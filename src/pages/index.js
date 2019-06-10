import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo/Seo'
import SurveyForm from '../components/SurveyForm/SurveyForm'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p id="description">This is a simple survey form site where I'm testing out Gatsby and Formik.</p>
    <SurveyForm />
  </Layout>
)

export default IndexPage
