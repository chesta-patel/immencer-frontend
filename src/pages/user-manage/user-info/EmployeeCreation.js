import React, { useEffect, useState } from 'react'
import { Block, RSelect } from '../../../components/Component'
import { useForm } from 'react-hook-form'
import { Steps, Step } from 'react-step-builder'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import {
  AddressDetailForm,
  tableHeader,
  tableRow,
  userCreate,
} from './EmployeeInfoJson'
import String from '../../../utils/String'
import Content from '../../../layout/content/Content'
import { cloneDeep } from 'lodash'
import { Table } from 'reactstrap'
import Education from './education/Education'
import './employeecreation.scss'
import AvatarCropper from './avatar-crop/AvatarCropper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../services/thunk/AuthThunk'
import {
  CreateNewEmployee,
  getCreateNewEmpData,
} from '../../../services/thunk/CreateNewEmpDataThunk'
import { validateByRegex } from '../../../utils/Helpers'
import { useHistory, useLocation } from 'react-router'
import moment from 'moment'
import { toastNotify } from '../../../layout/Index'
import {
  EmployeeEdit,
  EmployeeUpdate,
} from '../../../services/thunk/EmployeeEditThunk'
import { empDetail } from '../../../services/thunk/EmployeeDetailThunk'

const UserCreate = (props) => {
  const allDropdownState = useSelector((state) => state.dropdown)
  const dispatch = useDispatch()
  const initialState = {}
  userCreate.forEach((formFields) => {
    initialState[`${formFields.key_name}`] = ''
  })
  const [validation, setValidation] = useState(false)
  const { handleSubmit } = useForm()
  const [empCreate, setEmpCreate] = useState({ ...initialState })
  const [fileList, setFileList] = useState([])
  const [invalidFormatError, setInvalidFormatError] = useState([])
  const { formData } = useSelector((state) => state.createNewEmpData)
  const { isSuccess } = useSelector((state) => state.getEmpDetail)
  const location = useLocation()
  let checkValidation = []

  useEffect(() => {
    dispatch(fetchData('master/employmentStatus'))
    dispatch(fetchData('master/department'))
    dispatch(fetchData('master/designation'))
    dispatch(fetchData('master/bloodGroup'))
    dispatch(fetchData('master/gender'))
    dispatch(fetchData('master/nationality'))
  }, [])

  useEffect(() => {
    console.log('isSuccess', isSuccess)
    if (location.pathname !== '/employee/employee-update') {
      setEmpCreate({ ...empCreate, ...formData })
    } else {
      setEmpCreate({ ...empCreate, ...isSuccess })
    }
  }, [location])

  const submitForm = (e) => {
    e.preventDefault()
    setValidation(true)
    userCreate.map((formFields) => {
      if (formFields.required && !empCreate[`${formFields.key_name}`]) {
        checkValidation.push(formFields.key_name)
      } else {
        let filterCheckValidation = checkValidation?.filter(
          (value) => value !== formFields.name
        )
        checkValidation = filterCheckValidation
      }
      // eslint-disable-next-line array-callback-return
      return
    })
    // checkValidate()
    if (checkValidation.length === 0) {
      props.next()
      dispatch(getCreateNewEmpData(empCreate))
      console.log('employe data in redux:', formData)
    }
  }
  const saveEmployeeData = () => {
    dispatch(getCreateNewEmpData(empCreate))
    console.log('employe data in redux:', formData)
  }

  const checkValidate = () => {
    userCreate.map((formFields) => {
      if (formFields.validationType) {
        let checkNumberIsValidate = validateByRegex(
          formFields.validationType,
          empCreate[`${formFields.key_name}`]
        )
        let findCurrentField = checkValidation?.find(
          (value) => value === formFields.name
        )
        if (!findCurrentField && !checkNumberIsValidate) {
          checkValidation.push(formFields.name)
          let findCurrentFieldInInvalidFormatError = invalidFormatError?.find(
            (value) => value === formFields.name
          )
          if (!findCurrentFieldInInvalidFormatError) {
            let tempInvalidFormatError = invalidFormatError
            tempInvalidFormatError.push(formFields.name)
            setInvalidFormatError(tempInvalidFormatError)
          }
        } else if (checkNumberIsValidate) {
          let filterInvalidFormatError = invalidFormatError?.filter(
            (value) => value !== formFields.name
          )
          setInvalidFormatError(filterInvalidFormatError)
          let filterCheckValidation = checkValidation?.filter(
            (value) => value !== formFields.name
          )
          checkValidation = filterCheckValidation
        }
      }
      return
    })
  }

  const handle = (dropdown) => {
    dispatch(fetchData(`master/teamLead/${dropdown.value}`))
  }

  useEffect(() => {
    if (isSuccess?.designation && !allDropdownState?.teamLead?.length) {
      handle({ value: isSuccess?.designation })
    }
  }, [isSuccess?.designation])

  const [
    getMinDateForOnBoardingAndRelieving,
    setGetMinDateForOnBoardingAndRelieving,
  ] = useState(null)

  return (
    <form
      className="content clearfix"
      onSubmit={(e) => {
        handleSubmit(submitForm(e))
      }}
    >
      <Row className="gy-3">
        {userCreate.map((formFields, id) => {
          if (
            (formFields.type !== 'text') &
            (formFields.type !== 'number') &
            (formFields.type !== 'date') &
            (formFields.type !== 'email')
          ) {
            const dropDownData = allDropdownState[
              `${formFields.state_name}`
            ]?.map((data) => {
              if (formFields.state_name !== 'nationality') {
                return {
                  value: `${data.id}`,
                  label: `${data.name}`,
                }
              } else {
                return {
                  value: `${data.id}`,
                  label: `${data.nationality}`,
                }
              }
            })
            return (
              <Col md="4" key={`userCreate-form-fields-${id + 10}`}>
                <FormGroup>
                  <label className="form-label">
                    {formFields.label_name}
                    {formFields.required && (
                      <span className="error-message">*</span>
                    )}
                  </label>
                  <RSelect
                    options={dropDownData?.length > 0 ? dropDownData : []}
                    name={formFields.name}
                    value={dropDownData?.find((data) => {
                      return data.value === empCreate[`${formFields.key_name}`]
                    })}
                    onChange={(e) => {
                      if (formFields.label_name == `${String.designation}`) {
                        handle(e)
                      }
                      saveEmployeeData()
                      const oldState = cloneDeep(empCreate)
                      oldState[`${formFields.key_name}`] = e.value
                      setEmpCreate({ ...oldState })
                      // setValidation(true)
                    }}
                  />
                  {formFields.required &&
                    !empCreate[`${formFields.key_name}`] &&
                    validation && (
                      <span className="error-message">
                        {formFields.required}
                      </span>
                    )}
                </FormGroup>
              </Col>
            )
          } else {
            return (
              <Col md="4">
                <FormGroup>
                  <label className="form-label">
                    {formFields.label_name}
                    {formFields.required && (
                      <span className="error-message">*</span>
                    )}
                  </label>
                  <input
                    id={`empCreate-${formFields.key_name}`}
                    className="form-control"
                    disabled={
                      (formFields.key_name == 'relievingDate' ||
                        formFields.key_name == 'onboardingDate') &&
                      (getMinDateForOnBoardingAndRelieving ? false : true)
                    }
                    type={formFields.type}
                    name={formFields.name}
                    placeholder={formFields.placeholder}
                    value={empCreate[`${formFields.key_name}`]}
                    max={formFields.max}
                    min={
                      (formFields.key_name == 'relievingDate' ||
                        formFields.key_name == 'onboardingDate') &&
                      getMinDateForOnBoardingAndRelieving
                    }
                    onChange={(e) => {
                      const oldState = cloneDeep(empCreate)
                      oldState[`${formFields.key_name}`] = e.target.value
                      setEmpCreate({ ...oldState })
                      saveEmployeeData()
                      if (formFields.key_name === 'joiningDate') {
                        setGetMinDateForOnBoardingAndRelieving(e.target.value)
                      }
                    }}
                    onBlur={(e) => {
                      if (`${formFields.key_name}` == 'mobileNumber') {
                        setEmpCreate({
                          ...empCreate,
                          whatsappNumber: e.target.value,
                        })
                      }
                    }}
                  />
                  {formFields.required &&
                    !empCreate[`${formFields.key_name}`] &&
                    validation && (
                      <span className="error-message">
                        {formFields.required}
                      </span>
                    )}
                  {empCreate[`${formFields.name}`] &&
                    invalidFormatError.find((e) => e === formFields.name) && (
                      <span className="error-message">
                        {formFields.validationMessage}
                      </span>
                    )}
                </FormGroup>
              </Col>
            )
          }
        })}
        <Col md="4">
          <AvatarCropper fileList={fileList} setFileList={setFileList} />
        </Col>
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary">{String.next}</Button>
          </li>
        </ul>
      </div>
    </form>
  )
}

const AddressDetails = (props) => {
  const dispatch = useDispatch()
  const allDropDown = useSelector((state) => state.dropdown)
  const initialState = {}
  AddressDetailForm.forEach((formFields) => {
    initialState[`${formFields.key_name}`] = ''
  })
  const [validate, setValidate] = useState(false)
  const { handleSubmit } = useForm()
  const [currentAddress, setCurrentAddress] = useState({ ...initialState })
  const [permanentAddress, setPermanentAddress] = useState({ ...initialState })
  const [Country, setCountry] = useState([])
  const { formData } = useSelector((state) => state.createNewEmpData)
  const location = useLocation()
  var checkValidate = []

  const submitForm = (e) => {
    e.preventDefault()
    setValidate(true)
    AddressDetailForm.map((formFields, index) => {
      if (formFields.required && !permanentAddress[`${formFields.key_name}`]) {
        checkValidate.push(formFields.key_name)
      } else {
        let filterCheckValidation = checkValidate?.filter(
          (value) => value !== formFields.key_name
        )
        checkValidate = filterCheckValidation
      }
      // eslint-disable-next-line array-callback-return
      return
    })

    if (checkValidate.length === 0) {
      props.next()
      dispatch(getCreateNewEmpData({ currentAddress, permanentAddress }))
      console.log('employe data in redux:', formData)
    }
  }
  const handleChangeAddress = (dropdown, dropDownType) => {
    switch (dropDownType) {
      case 'Country':
        setCountry(dropdown)
        dispatch(fetchData(`master/states/byCountryCode/${dropdown.value}`))
        break
      case 'State/Region':
        dispatch(
          fetchData(`master/cities/${Country.value}/states/${dropdown.value}`)
        )
        break
      default:
        break
    }
    // dispatch(getCreateNewEmpData({ ...formData.permanentAddress }))
    console.log('formData.permanentAddress==>')
  }
  const onChangeAddress = (event) => {
    if (event.target.checked) {
      setCurrentAddress(permanentAddress)
    } else {
      const tempAdata = { ...currentAddress }
      Object.keys(tempAdata).forEach((key) => {
        tempAdata[key] = ''
      })
      setCurrentAddress(tempAdata)
    }
  }
  useEffect(() => {
    dispatch(fetchData('master/countries'))
  }, [])

  useEffect(() => {
    setPermanentAddress({
      ...permanentAddress,
      ...formData?.permanentAddress,
    })
    setCurrentAddress({ ...currentAddress, ...formData?.currentAddress })
  }, [formData])
  useEffect(() => {
    if (location.pathname === '/employee/employee_update') {
      setPermanentAddress({
        ...permanentAddress,
        ...formData?.permanentAddress,
      })
      setCurrentAddress({ ...currentAddress, ...formData?.currentAddress })
    }
  }, [location])

  return (
    <>
      <p className="permenent-address">{String.permanent_address}</p>
      <form
        className="content clearfix"
        onSubmit={(e) => {
          handleSubmit(submitForm(e))
        }}
      >
        <Row className="gy-3">
          {AddressDetailForm.map((formFields, id) => {
            if (
              (formFields.type !== 'text') &
              (formFields.type !== 'number') &
              (formFields.type !== 'date') &
              (formFields.type !== 'email')
            ) {
              const dropDownData = allDropDown[`${formFields.state_name}`]?.map(
                (data) => {
                  if (formFields.state_name === 'countries') {
                    return {
                      value: `${data.iso2}`,
                      label: `${data.name}`,
                    }
                  } else if (formFields.state_name === 'states') {
                    return {
                      value: `${data.iso2}`,
                      label: `${data.name}`,
                    }
                  } else {
                    return {
                      value: `${data.id}`,
                      label: `${data.name}`,
                    }
                  }
                }
              )
              return (
                <Col md="4">
                  <FormGroup>
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <RSelect
                      options={dropDownData?.length > 0 ? dropDownData : []}
                      name={formFields.name}
                      value={dropDownData?.find(
                        (data) =>
                          data.value ===
                          permanentAddress[`${formFields.key_name}`]
                      )}
                      onChange={(e) => {
                        handleChangeAddress(e, formFields.label_name)
                        const oldState = cloneDeep(permanentAddress)
                        oldState[`${formFields.key_name}`] = e.value
                        setPermanentAddress({ ...oldState })
                        // setValidate(true)
                        // handleChangeAddress(e, formFields.label_name)
                        dispatch(
                          getCreateNewEmpData({ ...formData.permanentAddress })
                        )
                      }}
                    />
                    {formFields.required &&
                      !permanentAddress[`${formFields.key_name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
                      )}
                  </FormGroup>
                </Col>
              )
            } else {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <input
                      className="form-control"
                      type={formFields.type}
                      name={formFields.name}
                      placeholder={formFields.placeholder}
                      value={permanentAddress[`${formFields.key_name}`]}
                      onChange={(e) => {
                        const oldState = cloneDeep(permanentAddress)
                        oldState[`${formFields.key_name}`] = e.target.value
                        setPermanentAddress({ ...oldState })
                        // setValidate(true)
                      }}
                      onBlur={(e) => {
                        const oldState = cloneDeep(permanentAddress)
                        oldState[`${formFields.key_name}`] = e.target.value
                        setPermanentAddress({ ...oldState })
                        // setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !permanentAddress[`${formFields.key_name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
                      )}
                  </FormGroup>
                </Col>
              )
            }
          })}
        </Row>
        {'\n'}
        <div className="div-checkbox">
          <label className="label-checkbox">
            <input
              type="checkbox"
              onChange={onChangeAddress}
              className="input-checkbox"
            />{' '}
            {String.same_as_above}
          </label>
        </div>
        <p className="current-address">{String.current_address}</p>
        <Row className="gy-3">
          {AddressDetailForm.map((formFields, id) => {
            if (
              (formFields.type !== 'text') &
              (formFields.type !== 'number') &
              (formFields.type !== 'date') &
              (formFields.type !== 'email')
            ) {
              const dropDownData = allDropDown[`${formFields.state_name}`]?.map(
                (data) => {
                  if (formFields.state_name === 'countries') {
                    return {
                      value: `${data.iso2}`,
                      label: `${data.name}`,
                    }
                  } else if (formFields.state_name === 'states') {
                    return {
                      value: `${data.iso2}`,
                      label: `${data.name}`,
                    }
                  } else {
                    return {
                      value: `${data.id}`,
                      label: `${data.name}`,
                    }
                  }
                }
              )
              return (
                <Col md="4">
                  <FormGroup>
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <RSelect
                      options={dropDownData?.length > 0 ? dropDownData : []}
                      name={formFields.name}
                      value={dropDownData?.find(
                        (ddd) =>
                          ddd.value === currentAddress[`${formFields.key_name}`]
                      )}
                      onChange={(e) => {
                        handleChangeAddress(e, formFields.label_name)
                        const oldState = cloneDeep(currentAddress)
                        oldState[`${formFields.key_name}`] = e.label
                        setCurrentAddress({ ...oldState })
                        onChangeAddress()
                      }}
                    />
                    {formFields.required &&
                      !currentAddress[`${formFields.key_name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
                      )}
                  </FormGroup>
                </Col>
              )
            } else {
              return (
                <Col md="4">
                  <FormGroup>
                    <label className="form-label">
                      {formFields.label_name}
                    </label>
                    <input
                      className="form-control"
                      type={formFields.type}
                      name={formFields.name}
                      placeholder={formFields.placeholder}
                      value={currentAddress[`${formFields.key_name}`]}
                      onChange={(e) => {
                        const oldState = cloneDeep(currentAddress)
                        oldState[`${formFields.key_name}`] = e.target.value
                        setCurrentAddress({ ...oldState })
                        setValidate(true)
                      }}
                      onBlur={(e) => {
                        const oldState = cloneDeep(currentAddress)
                        oldState[`${formFields.key_name}`] = e.target.value
                        setCurrentAddress({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !currentAddress[`${formFields.key_name}`] &&
                      validate && (
                        <span className="error-message">
                          {formFields.required}
                        </span>
                      )}
                  </FormGroup>
                </Col>
              )
            }
          })}
        </Row>
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary" type="submit">
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
      </form>
    </>
  )
}

const Permission = (props) => {
  const [permissionList, setPermissionList] = useState([])
  const [checked] = useState(false)
  const [permissionSt, setPermissionSt] = useState([])
  const dispatch = useDispatch()
  const { formData } = useSelector((state) => state.createNewEmpData)
  // const { isSuccess } = useSelector((state) => state.getEmpDetail)
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  const history = useHistory()
  const location = useLocation()

  tableHeader.map((e, index) => {
    for (const key in e) {
      if (e[key] === '') {
        delete e[key]
      }
    }
  })
  useEffect(() => {
    permissionSt['Leave'] = [false, false, false, false]
    permissionSt['Holiday'] = [false, false, false, false]
    permissionSt['Asset'] = [false, false, false, false]
  }, [])
  const c = tableHeader.filter((value) => Object.keys(value).length !== 0)
  const handlechange = (e) => {
    var value = e.target.checked
    var string = e.target.id[1]
    var rowPointer = parseInt(string) - 1
    switch (true) {
      case e.target.id.startsWith('c'):
        for (var i = 0; i < tableRow.length; i++) {
          var rowCheckbox = `${i}${rowPointer}`
          document.getElementById(rowCheckbox).checked = value
        }
        setPermission(e, value)
        break
      case e.target.id.startsWith('r'):
        for (var j = 0; j < tableHeader.length - 1; j++) {
          var columnCheckbox = `${rowPointer}${j}`
          document.getElementById(columnCheckbox).checked = value
        }
        setPermission(e, value)
        break
      default:
        setPermission(e, value)
        break
    }
    getPermission()
  }
  function getPermission() {
    var per = []
    var temp = []
    let found = Object.entries(permissionSt).find((pair) => pair[0] === 'Leave')
    temp.push({
      view: found[1][0],
      add: found[1][1],
      edit: found[1][2],
      delete: found[1][3],
    })
    per.push({
      leave: temp,
    })
    temp = []
    found = Object.entries(permissionSt).find((pair) => pair[0] === 'Holiday')
    temp.push({
      view: found[1][0],
      add: found[1][1],
      edit: found[1][2],
      delete: found[1][3],
    })
    per.push({
      holiday: temp,
    })
    temp = []
    found = Object.entries(permissionSt).find((pair) => pair[0] === 'Asset')
    temp.push({
      view: found[1][0],
      add: found[1][1],
      edit: found[1][2],
      delete: found[1][3],
    })
    per.push({
      asset: temp,
    })
    return {
      permission: per,
    }
  }
  function setPermission(per, v) {
    switch (per.target.id) {
      case 'r1':
        permissionSt['Leave'] = [v, v, v, v]
        break
      case 'r2':
        permissionSt['Holiday'] = [v, v, v, v]
        break
      case 'r3':
        permissionSt['Asset'] = [v, v, v, v]
        break
      case 'c1':
        permissionSt['Asset'][0] = v
        permissionSt['Leave'][0] = v
        permissionSt['Holiday'][0] = v
        break
      case 'c2':
        permissionSt['Asset'][1] = v
        permissionSt['Leave'][1] = v
        permissionSt['Holiday'][1] = v
        break
      case 'c3':
        permissionSt['Asset'][2] = v
        permissionSt['Leave'][2] = v
        permissionSt['Holiday'][2] = v
        break
      case 'c4':
        permissionSt['Asset'][3] = v
        permissionSt['Leave'][3] = v
        permissionSt['Holiday'][3] = v
        break
      default:
        var chkid = per.target.id
        switch (chkid[0]) {
          case '0':
            permissionSt['Leave'][chkid[1]] = v
            break
          case '1':
            permissionSt['Holiday'][chkid[1]] = v
            break
          case '2':
            permissionSt['Asset'][chkid[1]] = v
            break
          default:
            break
        }
        break
    }
  }
  // const AddPermission = () => {
  //   dispatch(getCreateNewEmpData(getPermission()))
  //   // console.log('formdata', formData)
  // }
  const CreateEmployee = async () => {
    // if (location.pathname == '/employee/employee-update') {
    //   let callAPI = await dispatch(EmployeeUpdate(formData))
    //   if (callAPI?.payload?.data?.isSuccess) {
    //     setApiCallStatus({
    //       status: 'success',
    //       message: callAPI?.payload?.data?.message,
    //     })
    //     toastNotify('success', callAPI?.payload?.data?.message)
    //     // dispatch(empDetail('empDetail'))
    //     history.push('/employee')
    //   } else if (!callAPI?.payload?.response?.data?.isSuccess) {
    //     setApiCallStatus({
    //       status: 'error',
    //       message: callAPI?.payload?.response?.data?.message,
    //     })
    //     // dispatch(empDetail('empDetail'))
    //     toastNotify('error', callAPI?.payload?.response?.data?.message)
    //   }
    // } else {
    dispatch(getCreateNewEmpData(getPermission()))

    let callAPI = await dispatch(CreateNewEmployee(formData))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      history.push('/employee')
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
    // }
  }

  return (
    <>
      <Table>
        <thead>
          {tableHeader.map((head, i) =>
            head.type === 'checkbox' && head.header !== '' ? (
              <th>
                <tr>
                  <input
                    type="checkbox"
                    onChange={(e) => handlechange(e)}
                    id={head.id}
                  />
                </tr>
                <tr>{head.header}</tr>
              </th>
            ) : (
              <th></th>
            )
          )}
        </thead>
        <tbody>
          {tableRow.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handlechange(e)}
                  value={checked}
                  id={row.id}
                />
                {row.name}
              </td>
              {c.map((checkbox, index) => {
                return (
                  <td>
                    <input
                      type={checkbox.type}
                      id={`${i}${index}`}
                      onChange={(e) => handlechange(e)}
                    />
                  </td>
                )
              })}
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary" onClick={CreateEmployee}>
                {String.submit}
              </Button>
            </li>
            {/* <li>
              <Button color="primary" onClick={AddPermission}>
                {String.submit}
              </Button>
            </li> */}
            <li>
              <Button color="primary" onClick={props.prev}>
                {String.previous}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

const Header = (props) => {
  return (
    <div className="steps clearfix">
      <ul>
        <li className={props.current >= 1 ? 'first done' : 'first'}>
          <a href="#wizard-01-h-0" onClick={(ev) => ev.preventDefault()}>
            <span className="number">01</span> <p>{String.employee_detail}</p>
          </a>
        </li>
        <li className={props.current >= 2 ? 'second done' : 'second'}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <span className="number">02</span> <p>{String.address_detail}</p>
          </a>
        </li>
        <li className={props.current >= 3 ? 'third done' : 'third'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="number">03</span> <p>{String.education}</p>
          </a>
        </li>
        <li className={props.current >= 4 ? 'third done' : 'third'}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="number">04</span> <p>{String.permission}</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

const config = {
  before: Header,
}

function UserDetail() {
  const [userCreation, setCreation] = useState([])
  return (
    <React.Fragment>
      <Content>
        <Block>
          <div className="nk-wizard nk-wizard-simple is-alter wizard clearfix">
            <Steps config={config}>
              <Step component={UserCreate} />
              <Step component={AddressDetails} />
              <Step component={Education} />
              <Step component={Permission} />
            </Steps>
          </div>
        </Block>
      </Content>
    </React.Fragment>
  )
}

export default UserDetail
