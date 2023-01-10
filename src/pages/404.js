import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h2>Opps it's a dead end</h2>
          <Link to="/" className="btn">
            return Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
