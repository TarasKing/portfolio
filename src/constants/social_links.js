import React from "react"
import {
  FaFacebook,
  FaLinkedin,
  FaGithubSquare,
  FaTelegram,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.facebook.com/taras.ivanov.338",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/taras-ivanov/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/TarasKing",
  },
  {
    id: 5,
    icon: <FaTelegram className="social-icon"></FaTelegram>,
    url: "https://t.me/taraslord",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
