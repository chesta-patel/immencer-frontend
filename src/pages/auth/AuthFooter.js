import React from 'react'
import { Row, Col } from '../../components/Component'
import { Link } from 'react-router-dom'
import commonString from '../../utils/String'

const AuthFooter = () => {
  return (
    <div className="nk-footer nk-auth-footer-full">
      <div className="container wide-lg">
        <Row className="g-3">
          <Col lg={6} className="order-lg-last">
            <ul className="nav nav-sm justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  target="_blank"
                  to={`${process.env.PUBLIC_URL}/auths/terms`}
                >
                  {commonString.term_condition}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  target="_blank"
                  to={`${process.env.PUBLIC_URL}/auths/terms`}
                >
                  {`${commonString.privacy} ${commonString.policy}`}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  target="_blank"
                  to={`${process.env.PUBLIC_URL}/auths/faq`}
                >
                  {commonString.help}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AuthFooter
