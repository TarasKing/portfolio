import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="This is contact page. Here you can send me a message"
      />
      <secion className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form action="https://formspree.io/f/mrgvgdad" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message me"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
      </secion>
    </Layout>
  )
}

export default contact
