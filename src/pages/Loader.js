import React from 'react'
import { Button, Spinner } from 'reactstrap'
import './loader.scss'
function Loader() {
  return (
    <>
      <div className="div_spiner">
        <Button disabled className="spiner_button">
          <Spinner type="grow" className="main_spiner" />
          {/* <span> Loading... </span> */}
        </Button>
      </div>
    </>
  )
}

export default Loader
