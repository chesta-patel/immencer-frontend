import React from 'react'
import { google_file_viewer_link } from '../../utils/constants'

const GoogleFileViewerLink = ({ link }) => {
  return (
    <a
      href={`${google_file_viewer_link}${process.env.REACT_APP_API_URL}upload/${link}`}
      target="_blank"
      rel="noreferrer"
    >
      <em class="icon ni ni-eye"></em>
    </a>
  )
}

export default GoogleFileViewerLink
