import React from 'react'
import { Helmet } from 'react-helmet'
import commonString from '../../utils/String'

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>
        {props.title ? props.title + ' | ' : null} {commonString.immence}
      </title>
    </Helmet>
  )
}

export default Head
