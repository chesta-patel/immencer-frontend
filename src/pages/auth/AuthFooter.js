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
                <Link className="nav-link" target="_blank" to={`/`}>
                  {String.term_condition}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" target="_blank" to={`/`}>
                  {`${String.privacy} ${String.policy}`}
                </Link>
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
