import React from 'react'
import { useState } from 'react'
import { Button, Col, FormGroup, Modal, ModalBody, Row } from 'reactstrap'
import { Icon } from '../../../components/Component'
import commanString from '../../../utils/CommanString'

function Education() {
  const [data, setdata] = useState({
    degree: '',
    start_date: '',
    end_date: '',
  })
  //   var today = new Date().toISOString().split('T')[0]
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  })
  const onFormCancel = (props) => {
    setModal({ edit: false, add: false })
  }

  const onsubmit = (e) => {
    e.preventDefault()

    setdata({ ...data, [e.target.name]: e.target.value })
  }
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
        size="md"
      >
        <ModalBody>
          <a
            href="#cancel"
            onClick={(e) => {
              e.preventDefault()
              onFormCancel()
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>

          <Row className="gy-3">
            <Col md="12">
              <FormGroup>
                <form
                  onSubmit={(e) => {
                    onsubmit(e)
                  }}
                >
                  <div>
                    <label className="form-label">{commanString.degree}</label>
                    <input
                      className="form-control"
                      type="text"
                      name="degree"
                      value={data.degree}
                      onChange={(e) => {
                        onchange(e)
                      }}
                    />
                    <label className="form-label">
                      {commanString.start_date}
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="degree"
                      value={data.start_date}
                      onChange={(e) => {
                        onchange(e)
                      }}
                    />
                    <label className="form-label">
                      {commanString.end_date}
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="degree"
                      value={data.end_date}
                      onChange={(e) => {
                        onchange(e)
                      }}
                    />
                  </div>
                </form>
              </FormGroup>
              <Button type="submit">{commanString.add} </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default Education
