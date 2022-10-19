import React from 'react'
import { Row, Col } from '../../components/Component'
import { Link } from 'react-router-dom'
import String from '../../utils/String'
import './../auth/Footer.scss'

const AuthFooter = () => {
  return (
    <div className="nk-footer nk-auth-footer-full">
      <div className="container wide-lg">
        <Row className="g-3">
          <Col lg={12} className="order-lg-last">
            <ul className="nav nav-sm justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://immence.com/terms-of-use"
                  rel="noreferrer"
                >
                  {String.term_condition}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://immence.com/privacy-policy"
                  rel="noreferrer"
                >
                  {`${String.privacy} ${String.policy}`}
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" target="_blank" to={`/auths/faq`}>
                  {String.help}
                </Link>
              </li> */}
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AuthFooter
