import React from "react"
import SocialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          <span>{new Date().getFullYear()} </span>
          <span>Web_Developer</span>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
