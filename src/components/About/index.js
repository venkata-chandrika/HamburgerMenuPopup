// Write your code here
import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const About = () => (
  <Link to="/" className="link">
    <Header />
    <div className="sm-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="sm-img"
      />
    </div>
    <div className="lg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="lg-img"
      />
    </div>
  </Link>
)
export default About
