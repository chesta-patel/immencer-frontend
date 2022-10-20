import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
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
import { getCreateNewEmpData } from '../../../../services/thunk/CreateNewEmpDataThunk'
import commonString from '../../../../utils/String'
import EducationCard from './EducationCard'
import { isEqual } from 'lodash'

function Education(props) {
  const dispatch = useDispatch()
  const { isSuccess } = useSelector((state) => state.getEmpDetail)
  const { formData } = useSelector((state) => state.createNewEmpData)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const [data, setData] = useState({
    degree: '',
    startDate: new Date(),
    endDate: new Date(),
  })
  const [items, setItems] = useState([])
  const [educationList, setEducationList] = useState([])
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  })

  const onFormCancel = (e) => {
    e.preventDefault()
    setModal({ edit: false, add: false })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let tempSetItems = items?.length ? [...items] : []
    tempSetItems.push(data)
    dispatch(
      getCreateNewEmpData({
        education: tempSetItems,
      })
    )
    setItems(tempSetItems)
    setData('')
    setModal({ add: false })
  }
  useEffect(() => {
    if (!isSuccess?.[0]?.education) {
      setItems(formData?.education)
    } else {
      let checkIsSame = isEqual(formData?.education, isSuccess?.[0].education)
      if (checkIsSame) {
        setItems(isSuccess?.[0].education)
      } else {
        setItems(formData?.education)
      }
    }
  }, [isSuccess, formData])

  let name, value
  const handledChange = (event) => {
    name = event.target.name
    value = event.target.value
    setData({ ...data, [name]: value })
  }

  const displaydata = () => {
    setEducationList(items)
  }

  const senData = () => {
    console.log('🚀 ~ items', items)
    if (!items || items.length === 0) {
      setShowErrorMessage(true)
    } else {
      setShowErrorMessage(false)
      props.next()
    }
  }

  useEffect(() => {
    if (items?.length > 0) {
      setShowErrorMessage(false)
    }
  }, [items])

  return (
    <React.Fragment>
      <div className="btn_right">
        <Button
          color="primary"
          className="btn-icon"
          onClick={() => setModal({ add: true })}
        >
          <Icon name="plus"></Icon>
        </Button>
      </div>
      <Container>
        <Row className="gy-3">
          <EducationCard item={items} setItems={setItems} />
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
                handleSubmit(e)
              }}
            >
              <FormGroup>
                <label className="form-label">{commonString.degree}</label>
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
                <label className="form-label">{commonString.start_date}</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={data.startDate}
                  onChange={handledChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label className="form-label">{commonString.end_date}</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={data.endDate}
                  onChange={handledChange}
                  required
                />
              </FormGroup>
              <Button
                color="primary"
                size="md"
                className="education-button"
                type="submit"
                onClick={displaydata}
              >
                {commonString.submit}
              </Button>
              <Button
                className="education-button"
                color="primary"
                size="md"
                onClick={(e) => {
                  onFormCancel(e)
                }}
              >
                {commonString.cancel}
              </Button>
            </form>
          </Col>
        </ModalBody>
      </Modal>
      <div>
        {showErrorMessage && (
          <span className="error-message">
            Add At Least one Education Information
          </span>
        )}
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary" onClick={senData}>
                {commonString.next}
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={props.prev}>
                {commonString.previous}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Education
