// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import './index.css'

const Header = () => {
  const onClickHamburger = () => (
    <Popup
      modal
      trigger={
        <button type="button">
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
    >
      <IoMdClose data-testid="closeButton" />
      <div>
        <AiFillHome />
        <h1>Home</h1>
      </div>
      <div>
        <BsInfoCircleFill />
        <h1>About</h1>
      </div>
    </Popup>
  )

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <button type="button" data-testid="hamburgerIconButton">
        <GiHamburgerMenu />
      </button>
    </div>
  )
}
export default Header
