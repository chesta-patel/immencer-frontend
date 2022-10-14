import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, FormGroup, Row } from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Col,
  Icon,
  PreviewCard,
  RSelect,
} from '../../../components/Component'
import Content from '../../../layout/content/Content'
import { fetchData } from '../../../services/thunk/AuthThunk'
import { empData } from '../../../services/thunk/GetEmployee'
import String from '../../../utils/String'
import { leaveAppString } from '../../Strings'
import { defaultOptions, leaveAppForm } from './LeaveAppJson'
import './leaveapplication.scss'

function ApplyLeave() {
  const [strings, setStrings] = useState('')
  const [leaveForm] = useState(leaveAppForm)
  const history = useHistory()
  const dispatch = useDispatch()
  const { leaveType } = useSelector((state) => state.dropdown)
  const { leaveDayType } = useSelector((state) => state.dropdown)
  const { employeeData } = useSelector((state) => state.getEmp)
  // const { errors, register, handleSubmit } = useForm()
  const [leaveData, setLeaveData] = useState({
    leaveType: '',
    toInform: [],
    reason: '',
  })
  const [dates, setDate] = useState([])
  const [isShow, setisShow] = useState(false)

  useEffect(() => {
    dispatch(fetchData('master/leaveType'))
    dispatch(fetchData('master/leaveDayType'))
    dispatch(empData('employee'))
  }, [])
  useEffect(() => {
    var string = leaveAppString.find(function (element) {
      return element
    })
    setStrings(string)
  }, [strings])
  let name, value
  const handledChange = (e) => {
    name = e.target.name
    value = e.target.value
    setDate({ ...dates, [name]: value })
  }
  const handle = (e) => {
    name = e.target.name
    value = e.target.value
    setLeaveData({ ...leaveData, [name]: value })
  }
  const handleLeaveType = (e) => {
    setLeaveData({ ...leaveData, leaveType: e.value })
  }
  const handleInfo = (e) => {
    setLeaveData({ ...leaveData, toInform: e })
  }
  const applyLeave = (e) => {
    e.preventDefault()
  }
  const setDates = () => {
    setisShow(true)
    setLeaveData({ ...leaveData, ...dates })
  }
  console.log(employeeData)
  // const employeeList = employeeData.map((empList, index) => {
  //   return {
  //     value: `${empList.id}`,
  //     label: `${empList.firstName} ${empList.lastName}`,
  //   }
  // })
  const leaveOption = leaveType.map((list, index) => {
    return {
      value: `${list.id}`,
      label: `${list.name}`,
    }
  })

  return (
    <>
      <Content>
        <BlockHead>
          <BlockBetween className="detail-card">
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {strings.form_title}
              </BlockTitle>
              <BlockDes className="text-soft"></BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block size="lg">
          <PreviewCard>
            <form onSubmit={applyLeave}>
              <Row className="gy-3">
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label">
                      {`${String.leave_type}`}
                    </label>
                    <div className="form-control-wrap">
                      <RSelect
                        options={leaveOption}
                        onChange={handleLeaveType}
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="gy-3">
                <Col lg="6">
                  <FormGroup className="form-group">
                    <label className="form-label">{`${String.date}`}</label>
                    <div className="form-control-wrap">
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={dates.date}
                        onChange={handledChange}
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-label">{`${String.day_type}`}</label>
                    <ul className="custom-control-group g-3 align-center flex-wrap">
                      {leaveDayType.map((dt, index) => {
                        return (
                          <li>
                            <div className="custom-control custom-checkbox">
                              <label>
                                <input
                                  className="custom-control custom-checkbox"
                                  type="radio"
                                  id="html"
                                  name={`${dt.name}`}
                                  value={`${dt.value}`}
                                  onChange={handledChange}
                                />
                              </label>
                              <label for="html">{`${dt.name}`}</label>
                            </div>
                          </li>
                        )
                      })}
                      {/* {console.log(leaveDayType)} */}
                      <Button
                        color="primary"
                        size="sm"
                        onClick={setDates}
                        className="add_date"
                      >
                        <Icon name="plus" />
                      </Button>
                    </ul>
                  </FormGroup>
                </Col>
                {/* {isShow && (
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <span>
                          <h6>
                            Date:-{`${dates.date}`} Day Type:
                            {`${dates.value}`}
                          </h6>
                        </span>
                      </CardTitle>
                    </CardBody>
                  </Card>
                )} */}
              </Row>
              <Row className="gy-3">
                <Col sm={6}>
                  <div className="form-group">
                    <label className="form-label">{String.i_want}</label>
                    <RSelect
                      options={defaultOptions}
                      isMulti
                      onChange={handleInfo}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="gy-3">
                <Col md={12}>
                  <FormGroup className="form-group">
                    <label className="form-label" htmlFor="cf-default-textarea">
                      {String.reason}
                    </label>
                    <div className="form-control-wrap">
                      <textarea
                        // value={leaveData.reason}
                        // name={leaveData.reason}
                        name="reason"
                        value={leaveData.reason}
                        className="form-control form-control-sm"
                        id="cf-default-textarea"
                        placeholder="Write your message"
                        onChange={handle}
                      ></textarea>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="gy-3">
                <Col sm={6}>
                  <Button color="primary">
                    <Icon name="check" />
                    <span>{String.apply}</span>
                  </Button>
                </Col>
              </Row>
            </form>
          </PreviewCard>
        </Block>
      </Content>
    </>
  )
}

export default ApplyLeave
