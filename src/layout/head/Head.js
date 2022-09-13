import React from 'react'
import { Helmet } from 'react-helmet'
import commanString from '../../utils/String'

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>
        {props.title ? props.title + ' | ' : null} {commanString.immence}
      </title>
    </Helmet>
  )
}

export default Head
