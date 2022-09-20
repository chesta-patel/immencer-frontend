import React from 'react'
import immence_logo from '../../../src/assets/images/gfx/immence.svg'
import immence from '../../../src/assets/images/gfx/immence_wordlogo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      <img className="logo-light logo-img" src={immence} alt="logo" />
      <img className="logo-dark logo-img" src={immence} alt="logo" />
    </Link>
  )
}

export default Logo
