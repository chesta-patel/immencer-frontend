import React from 'react'
import commonString from '../../utils/String'

const Footer = () => {
  return (
    <div className="nk-footer">
      <div className="container-fluid">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright">
            &copy; {commonString.immence_2022}.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
