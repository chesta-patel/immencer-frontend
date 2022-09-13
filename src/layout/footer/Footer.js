import React from 'react'
import commanString from '../../utils/String'

const Footer = () => {
  return (
    <div className="nk-footer">
      <div className="container-fluid">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright">
            &copy; {commanString.immence_2022}.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
