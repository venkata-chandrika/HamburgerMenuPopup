// Write your code here
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="failure-img"
      />
      <h1 className="heading">Lost Your Way?</h1>
      <p className="fail-msg">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)
export default NotFound
