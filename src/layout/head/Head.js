import React from 'react'
import { Helmet } from 'react-helmet'
import String from '../../utils/String'

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>
        {props.title ? props.title + ' | ' : null} {String.immence}
      </title>
    </Helmet>
  )
}

export default Head
