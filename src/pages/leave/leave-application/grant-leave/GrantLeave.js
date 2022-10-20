import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button, Col, Form, FormGroup } from 'reactstrap'
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  RSelect,
} from '../../../../components/Component'
import Content from '../../../../layout/content/Content'
import { empData } from '../../../../services/thunk/GetEmployee'
import String from '../../../../utils/String'
import { cloneDeep } from 'lodash'
import { toastNotify } from '../../../../layout/Index'
import { useHistory, useParams } from 'react-router'
import { GrantLeaveAssign } from '../../../../services/thunk/GrantLeaveThunk'
import { getFormData } from '../../../../utils/Helpers'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

function GrantLeave() {
  const [toInformEmpList, settoInformEmpList] = useState([])
  const { employeeData } = useSelector((state) => state.getEmp)
  const dispatch = useDispatch()
  const [toInform, setToInform] = useState([])
  const { errors, register, handleSubmit } = useForm()
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  const [grantLeave, setGrantLeave] = useState({
    employee: [],
    monthYear: '',
    leaveCount: '',
    description: '',
  })
  const history = useHistory()
  const { id } = useParams()

  // useEffect(()=>{
  //   console.log('edit grant leave',id)
  // },[id])
  useEffect(() => {
    dispatch(empData('employee'))
  }, [])
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
  // const handleLeaveCount = (e) => {
  //   setGrantLeave({ ...grantLeave, leaveCount: Number(e.value) })
  // }
  const handleInfo = (e) => {
    e.map((empid, index) => {
      if (toInform.includes(empid.value) === false) {
        toInform.push(empid.value)
      }
    })
    const arrOfNum = toInform.map((str) => {
      return Number(str)
    })

    setGrantLeave({ ...grantLeave, employee: arrOfNum })
  }
  const grantLeaveCount = [
    { value: '0.5', label: '0.5' },
    { value: '1', label: '1' },
    { value: '1.5', label: '1.5' },
  ]
  const getGrantLeave = (e) => {}
  const callFormSubmit = async (data) => {
    // const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(GrantLeaveAssign(data))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      history.push('/grantLeaveInfo')
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
  const onFormSubmit = (e) => {
    if (grantLeave !== null) {
      callFormSubmit(grantLeave)
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
                {String.grant_leave}
              </BlockTitle>
              <BlockDes className="text-soft"></BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block size="sm">
          <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
            <Col md="6" className="">
              <FormGroup className="form-group">
                <label className="form-label">{`${String.month_year}`}</label>
                <input
                  ref={register({ required: true })}
                  type="month"
                  className="form-control"
                  name="monthYear"
                  onChange={(e) => {
                    const montAndYear = cloneDeep(grantLeave)
                    montAndYear.monthYear = e.target.value
                    setGrantLeave(montAndYear)
                  }}
                />
                {errors.monthYear && (
                  <span className="error">{String.required}</span>
                )}
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.leave} ${String.count}`}</label>
                {/* <RSelect
                  options={grantLeaveCount}
                  onChange={handleLeaveCount}
                /> */}
                <input
                  ref={register({ required: true })}
                  type="tel"
                  className="form-control"
                  name="leaveCount"
                  onChange={(e) => {
                    const leaveCount = cloneDeep(grantLeave)
                    leaveCount.leaveCount = Number(e.target.value)
                    setGrantLeave(leaveCount)
                  }}
                />
                {errors.leaveCount && (
                  <span className="error">{String.required}</span>
                )}
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.employee}`}</label>
                <RSelect
                  options={toInformEmpList}
                  isMulti
                  onChange={handleInfo}
                  name="topics"
                />
                {errors.leaveCount && (
                  <span className="error">{String.required}</span>
                )}
              </FormGroup>
              <FormGroup className="form-group">
                <label className="form-label">{`${String.note}`}</label>
                <div className="form-control-wrap">
                  <input
                    ref={register({ required: true })}
                    typeof="textarea"
                    className="form-control form-control-sm"
                    id="cf-default-textarea"
                    placeholder="Write your message"
                    name="reason"
                    onChange={(e) => {
                      console.log('e', e.target.value)
                      const textArea = cloneDeep(grantLeave)
                      textArea.description = e.target.value
                      setGrantLeave(textArea)
                    }}
                  />{' '}
                </div>
                {errors.reason && (
                  <span className="error">{String.required}</span>
                )}
              </FormGroup>
              <FormGroup className="form-group">
                <Button type="submit" color="primary" size="lg">
                  {`${String.grant} ${String.leave}`}
                </Button>
              </FormGroup>
            </Col>
          </Form>
        </Block>
      </Content>
    </>
  )
}

export default GrantLeave
