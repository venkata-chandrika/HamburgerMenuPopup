// Write your code here
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburger-btn"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hamburger" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            className="hamburger-btn"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="close" />
          </button>

          <ul>
            <li className="icon-content-container">
              <AiFillHome />
              <Link className="link" to="/">
                <h1 className="popup">Home</h1>
              </Link>
            </li>

            <li className="icon-content-container">
              <BsInfoCircleFill />
              <Link className="link" to="/about">
                <h1 className="popup">About</h1>
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header
