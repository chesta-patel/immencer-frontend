import React from 'react'
import { useState } from 'react'
import {
  Button,
  Col,
  Container,
  FormGroup,
  Modal,
  ModalBody,
  Row,
} from 'reactstrap'
import { Icon } from '../../../../components/Component'
import String from '../../../../utils/String'
import '../employeecreation.scss'
import EducationCard from './EducationCard'

function Education(props) {
  const [data, setData] = useState({
    degree: '',
    startdate: new Date(),
    enddate: new Date(),
  })
  const [items, setItems] = useState([])
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
    let tempSetItems = items
    tempSetItems.push(data)
    setItems(tempSetItems)
    setData('')
    setModal({ add: false })
  }
  let name, value
  const handledChange = (event) => {
    name = event.target.name
    value = event.target.value
    setData({ ...data, [name]: value })
  }
  const deleteItem = (index) => {
    setItems((tempItem) => {
      return tempItem.filter((item, id) => {
        return id !== index
      })
    })
  }

  return (
    <React.Fragment>
      <Button
        color="primary"
        className="btn-icon"
        onClick={() => setModal({ add: true })}
      >
        <Icon name="plus"></Icon>
      </Button>
      <Container>
        <Row className="gy-3">
          {items.map((item, index) => (
            <Col md="4">
              <EducationCard
                key={index}
                id={index}
                text={item}
                onclick={(id) => {
                  deleteItem(index)
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>

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
                <label className="form-label">{String.degree}</label>
                <input
                  type="text"
                  className="form-control"
                  name="degree"
                  value={data.degree}
                  onChange={handledChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label className="form-label">{String.start_date}</label>
                <input
                  type="date"
                  className="form-control"
                  name="startdate"
                  value={data.startdate}
                  onChange={handledChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label className="form-label">{String.end_date}</label>
                <input
                  type="date"
                  className="form-control"
                  name="enddate"
                  value={data.enddate}
                  onChange={handledChange}
                  required
                />
              </FormGroup>
              <Button
                color="primary"
                size="md"
                className="education-button"
                type="submit"
              >
                {String.submit}
              </Button>
              <Button
                className="education-button"
                color="primary"
                size="md"
                onClick={(e) => {
                  onFormCancel(e)
                }}
              >
                {String.cancel}
              </Button>
            </form>
          </Col>
        </ModalBody>
      </Modal>
      <div>
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary" onClick={props.next}>
                {String.next}
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={props.prev}>
                {String.previous}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Education
