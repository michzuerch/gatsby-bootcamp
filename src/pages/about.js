import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Zurzeit teste ich Gatsby...</p>
      <p>
        <Link to="/contact">Klick hier um mich zu kontaktieren...</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
