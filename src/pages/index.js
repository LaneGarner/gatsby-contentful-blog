import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Lane, a full-stack developer living in Austin, Texas.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link> </p>
    </Layout>
  )
}

export default indexPage