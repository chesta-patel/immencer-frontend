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
import { cloneDeep } from 'lodash'
import { LeaveApply } from '../../../services/thunk/LeaveApplyThunk'
import { toastNotify } from '../../../layout/Index'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

const initialLeaveDate = {
  date: '',
  dayType: '',
}

function ApplyLeave() {
  const [strings, setStrings] = useState('')
  // const [leaveForm] = useState(leaveAppForm)
  const history = useHistory()
  const dispatch = useDispatch()
  const { leaveType } = useSelector((state) => state.dropdown)
  const { leaveDayType } = useSelector((state) => state.dropdown)
  const { employeeData } = useSelector((state) => state.getEmp)
  const { errors, register, handleSubmit } = useForm()
  const [leaveData, setLeaveData] = useState({
    leaveType: '',
    inform: [],
    description: '',
  })
  const [leaveDates, setLeaveDates] = useState([{ ...initialLeaveDate }])
  const [isShow, setisShow] = useState(false)
  const [toInformEmpList, settoInformEmpList] = useState([])
  const [toInform, setToInform] = useState([])
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })

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
  useEffect(() => {
    if (employeeData !== undefined) {
      const employeeList = employeeData.map((empList, index) => {
        return {
          value: `${empList.id}`,
          label: `${empList.firstName} ${empList.lastName}`,
        }
      })
      settoInformEmpList(employeeList)
    }
  }, [employeeData])
  let name, value
  const handle = (e) => {
    name = e.target.name
    value = e.target.value
    setLeaveData({ ...leaveData, [name]: value })
  }
  const handleLeaveType = (e) => {
    setLeaveData({ ...leaveData, leaveType: e.value })
  }
  const handleInfo = (e) => {
    e.map((empid, index) => {
      if (toInform.includes(empid.value) === false) {
        toInform.push(empid.value)
      }
    })
    setLeaveData({ ...leaveData, inform: toInform })
  }
  const apply = () => {}
  const onFormSubmit = (e) => {
    const requestBody = {
      ...leaveData,
      dates: leaveDates,
    }
    if (requestBody !== null) {
      callFormSubmit(requestBody)
    }
  }
  const leaveOption = leaveType.map((list, index) => {
    return {
      value: `${list.id}`,
      label: `${list.name}`,
    }
  })
  const callFormSubmit = async (data) => {
    // const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(LeaveApply(data))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      // dispatch(companyDocument('companyDocument'))
      history.push('/leave')
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  const formClass = classNames({
    'form-validate': true,
    'is-alter': 1,
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
          <form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
            <Row className="gy-3">
              <Col lg="6">
                <FormGroup className="form-group">
                  <div className="form-control-wrap">
                    <label className="form-label">{`${String.leave_type}`}</label>

                    <RSelect
                      ref={register({ required: true })}
                      options={leaveOption}
                      onChange={handleLeaveType}
                      name="date"
                    />
                    {errors.date && (
                      <p className="error">{String.required_field}</p>
                    )}
                  </div>
                </FormGroup>
              </Col>
            </Row>
            {leaveDates.map((leaveDate, index) => (
              <Row className="gy-3">
                <Col lg="6">
                  <FormGroup className="form-group">
                    <div className="form-control-wrap">
                      <label className="form-label">{`${String.date}`}</label>
                      <input
                        ref={register({ required: true })}
                        type="date"
                        className="form-control"
                        name="date"
                        value={leaveDate.date}
                        onChange={(e) => {
                          const existingLeaveDates = cloneDeep(leaveDates)
                          existingLeaveDates[index].date = e.target.value
                          setLeaveDates(existingLeaveDates)
                        }}
                      />
                      {errors.date && (
                        <p className="error">{String.required_field}</p>
                      )}
                    </div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup className="flex_box">
                    <label className="form-label">{`${String.day_type}`}</label>
                    <ul className="custom-control-group g-3 align-center flex-wrap">
                      {leaveDayType.map((dt, ind) => {
                        return (
                          <li key={ind}>
                            <div className="custom-control custom-checkbox">
                              <label>
                                <input
                                  required
                                  className="custom-control custom-checkbox"
                                  type="radio"
                                  id="html"
                                  name={`daytype${index}`}
                                  value={`${dt.id}`}
                                  checked={`${dt.id}` === leaveDate.dayType}
                                  onChange={(e) => {
                                    const existingLeaveDates =
                                      cloneDeep(leaveDates)

                                    existingLeaveDates[index].dayType =
                                      e.target.value
                                    setLeaveDates(existingLeaveDates)
                                  }}
                                />
                                {/* {errors.date && (
                                  <p className="error">
                                    {String.required_field}
                                  </p>
                                )} */}
                              </label>
                              <label for="html">{`${dt.name}`}</label>
                            </div>
                          </li>
                        )
                      })}

                      {index + 1 === leaveDates.length ? (
                        <li>
                          <span style={{ display: 'flex' }}>
                            {index !== 0 && (
                              <Button
                                color="primary"
                                size="sm"
                                onClick={() => {
                                  const existingLeaveDates =
                                    cloneDeep(leaveDates)

                                  setLeaveDates(
                                    existingLeaveDates.filter(
                                      (_leaveDate, i) => i !== index
                                    )
                                  )
                                }}
                                className="add_date"
                              >
                                <Icon name="cross" />
                              </Button>
                            )}
                            <Button
                              color="primary"
                              size="sm"
                              onClick={() => {
                                setLeaveDates([
                                  ...leaveDates,
                                  { ...initialLeaveDate },
                                ])
                              }}
                              className="add_date"
                            >
                              <Icon name="plus" />
                            </Button>
                          </span>
                        </li>
                      ) : (
                        <Button
                          color="primary"
                          size="sm"
                          onClick={() => {
                            const existingLeaveDates = cloneDeep(leaveDates)

                            setLeaveDates(
                              existingLeaveDates.filter(
                                (_leaveDate, i) => i !== index
                              )
                            )
                          }}
                          className="add_date"
                        >
                          <Icon name="cross" />
                        </Button>
                      )}
                    </ul>
                  </FormGroup>
                </Col>
              </Row>
            ))}

            <Row className="gy-3">
              <Col lg={6}>
                <div className="form-group flex_box">
                  <label className="form-label">{String.i_want}</label>
                  <RSelect
                    ref={register({ required: true })}
                    options={toInformEmpList}
                    isMulti
                    onChange={handleInfo}
                  />
                </div>
              </Col>
            </Row>
            <Row className="gy-3">
              <Col lg={12}>
                <FormGroup className="form-group reason_box">
                  <label className="form-label" htmlFor="cf-default-textarea">
                    {String.reason}
                  </label>
                  <div className="form-control-wrap">
                    <textarea
                      ref={register({ required: true })}
                      // value={leaveData.reason}
                      // name={leaveData.reason}
                      name="description"
                      value={leaveData.description}
                      className="form-control form-control-sm"
                      id="cf-default-textarea"
                      placeholder="Write your message"
                      onChange={handle}
                    />
                    {errors.date && (
                      <p className="error">{String.required_field}</p>
                    )}
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row className="gy-3">
              <Col sm={6}>
                <Button
                  className="mrt_20"
                  color="primary"
                  type="submit"
                  onClick={apply}
                >
                  <Icon name="check" />
                  <span>{String.apply}</span>
                </Button>
              </Col>
            </Row>
          </form>
        </Block>
      </Content>
    </>
  )
}

export default ApplyLeave
