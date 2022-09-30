import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import disableDevtool from 'disable-devtool'
import './PdfViewer.scss'

const PdfViewer = ({ url }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  /*To Prevent right click on screen*/
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

  /*When document gets loaded successfully*/
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  disableDevtool()

  return (
    <div
      className="pdf-container"
      onselectstart="return false"
      oncut="return false"
      oncopy="return false"
      onpaste="return false"
      ondrag="return false"
      ondrop="return false"
    >
      <div className="center prev_next">
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </div>
        <div className="buttonc">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="Pre"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
      <Document
        file={`${process.env.REACT_APP_API_URL}upload/${url}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

export default PdfViewer
