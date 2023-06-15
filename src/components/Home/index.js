// Write your code here

import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <Link to="/" className="link">
    <Header />
    <div className="sm-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="sm-img"
      />
    </div>
    <div className="lg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="lg-img"
      />
    </div>
  </Link>
)
export default Home
