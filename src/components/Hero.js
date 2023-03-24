import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"
import TypedText from "./TypedText"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Taras</h1>
            <h4>
              <TypedText />
            </h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="hero"
          className="hero-img"
        />
      </div>
    </header>
  )
}

export default Hero
