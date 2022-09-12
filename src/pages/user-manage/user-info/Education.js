import React from 'react'
import { useState } from 'react'
import { Button, Col, FormGroup, Modal, ModalBody } from 'reactstrap'
import { Icon } from '../../../components/Component'
import commanString from '../../../utils/CommanString'

function Education(props) {
  const [degree, setdegrre] = useState()
  const [sdate, setsdate] = useState(new Date())
  const [edate, setedate] = useState(new Date())

  //   var today = new Date().toISOString().split('T')[0]
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  })
  const onFormCancel = (e) => {
    e.preventDefault()
    setModal({ edit: false, add: false })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(degree)
    console.log(sdate)
    console.log(edate)
  }
  const handledChange = (e) => {
    setsdate(e.target.value)
  }
  const handleddate = (e) => {
    setedate(e.target.value)
  }
  // const date = (newValue, event) => {
  //   setsdate(newValue({ newValue: event.target.value }))
  // }
  return (
    <React.Fragment>
      <label>{}</label>
      <Button
        color="primary"
        className="btn-icon"
        onClick={() => setModal({ add: true })}
      >
        <Icon name="plus"></Icon>
      </Button>
      <Modal
        isOpen={modal.add}
        toggle={() => setModal({ add: false })}
        className="modal-dialog-centered"
        size="sm"
      >
        <ModalBody>
          <Col lg="12">
            <form
              className="form-group"
              onSubmit={(e) => {
                handlesubmit(e)
              }}
            >
              <FormGroup>
                <label className="form-label">{commanString.degree}</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setdegrre(e.target.value)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label className="form-label">{commanString.start_date}</label>
                <input
                  type="date"
                  className="form-control"
                  value={sdate}
                  onChange={handledChange}
                />
              </FormGroup>
              <FormGroup>
                <label className="form-label">{commanString.end_date}</label>
                <input
                  type="date"
                  className="form-control"
                  value={edate}
                  onChange={handleddate}
                />
              </FormGroup>
              <Button color="primary" size="md" className="education-button">
                {commanString.submit}
              </Button>
              <Button
                className="education-button"
                color="primary"
                size="md"
                onClick={(e) => {
                  onFormCancel(e)
                }}
              >
                {commanString.cancle}
              </Button>
            </form>
          </Col>
        </ModalBody>
      </Modal>
      <div>
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary" onClick={props.prev}>
                {commanString.previous}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Education
