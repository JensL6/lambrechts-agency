import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Joe de mannen</h1>
    <p>Kzou zeggen welkom boys.</p>
    <p>Jaja.</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>Boeit me nieee</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
