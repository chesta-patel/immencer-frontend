import React, { useEffect, useState } from 'react'
import { Block, RSelect } from '../../../components/Component'
import { useForm } from 'react-hook-form'
import { Steps, Step } from 'react-step-builder'
import { Row, Col, FormGroup, Button } from 'reactstrap'
import {
  AddressDetailForm,
  rows,
  cols,
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
import { regex_validate_date_DD_MM_YYYY } from '../../../utils/constants'

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
    if (location.pathname !== '/employee/employee-update') {
      setEmpCreate({ ...empCreate, ...formData })
    } else {
      setEmpCreate({ ...empCreate, ...isSuccess?.[0] })
      console.log('🚀 ~ isSuccess', isSuccess?.[0])
    }
  }, [location])

  const submitForm = (e) => {
    props.next()
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
    if (isSuccess?.[0]?.designation && !allDropdownState?.teamLead?.length) {
      handle({ value: isSuccess?.[0]?.designation })
    }
  }, [isSuccess?.[0]?.designation])

  // const [
  //   getMinDateForOnBoardingAndRelieving,
  //   setGetMinDateForOnBoardingAndRelieving,
  // ] = useState(null)

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
                      return data.value == empCreate[`${formFields.key_name}`]
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
                    // disabled={
                    //   (formFields.key_name == 'relievingDate' ||
                    //     formFields.key_name == 'onboardingDate') &&
                    //   (getMinDateForOnBoardingAndRelieving ? false : true)
                    // }
                    type={formFields.type}
                    name={formFields.name}
                    placeholder={formFields.placeholder}
                    // value={empCreate[`${formFields.key_name}`]}
                    max={formFields.max}
                    value={
                      empCreate[`${formFields.key_name}`] &&
                      formFields.type === 'date' &&
                      regex_validate_date_DD_MM_YYYY.test(
                        empCreate[`${formFields.key_name}`]
                      )
                        ? moment(
                            empCreate[`${formFields.key_name}`],
                            'DD/MM/YYYY'
                          ).format('YYYY-MM-DD')
                        : empCreate[`${formFields.key_name}`]
                    }
                    // min={
                    //   (formFields.key_name == 'relievingDate' ||
                    //     formFields.key_name == 'onboardingDate') &&
                    //   getMinDateForOnBoardingAndRelieving
                    // }
                    onChange={(e) => {
                      const oldState = cloneDeep(empCreate)
                      oldState[`${formFields.key_name}`] = e.target.value
                      setEmpCreate({ ...oldState })
                      saveEmployeeData()
                      // if (formFields.key_name === 'joiningDate') {
                      //   setGetMinDateForOnBoardingAndRelieving(e.target.value)
                      // }
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
  const [countryPermanentAddress, setCountryPermanentAddress] = useState([])
  const [countryCurrentAddress, setCountryCurrentAddress] = useState([])
  const [allDropDownPermanentAddress, setAllDropdownPermanentAddress] =
    useState(allDropDown)
  const [allDropDownCurrentAddress, setAllDropdownCurrentAddress] =
    useState(allDropDown)
  const [addressType, setAddressType] = useState('')
  const { formData } = useSelector((state) => state.createNewEmpData)
  const location = useLocation()
  var checkValidate = []

  useEffect(() => {
    if (addressType === 'currentAddress') {
      setAllDropdownCurrentAddress(allDropDown)
    } else if (addressType === 'permanentAddress') {
      setAllDropdownPermanentAddress(allDropDown)
    } else {
      setAllDropdownCurrentAddress(allDropDown)
      setAllDropdownPermanentAddress(allDropDown)
    }
  }, [allDropDown, addressType, countryCurrentAddress, countryPermanentAddress])

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
        if (addressType === 'currentAddress') {
          setCountryCurrentAddress(dropdown)
          dispatch(fetchData(`master/states/byCountryCode/${dropdown.value}`))
          setAllDropdownCurrentAddress(allDropDown)
        } else if (addressType === 'permanentAddress') {
          setCountryPermanentAddress(dropdown)
          dispatch(fetchData(`master/states/byCountryCode/${dropdown.value}`))
          setAllDropdownPermanentAddress(allDropDown)
        }
        break
      case 'State/Region':
        if (addressType === 'currentAddress') {
          dispatch(
            fetchData(
              `master/cities/${countryCurrentAddress.value}/states/${dropdown.value}`
            )
          )
        } else if (addressType === 'permanentAddress') {
          dispatch(
            fetchData(
              `master/cities/${countryPermanentAddress.value}/states/${dropdown.value}`
            )
          )
        }
        break
      default:
        break
    }
    // dispatch(getCreateNewEmpData({ ...formData.permanentAddress }))
    console.log('formData.permanentAddress==>')
  }
  const onChangeAddress = (event) => {
    if (event?.target?.checked) {
      setCurrentAddress(permanentAddress)
      setCountryPermanentAddress(countryPermanentAddress)
      setAllDropdownCurrentAddress(allDropDownPermanentAddress)
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

    if (formData?.permanentAddress) {
      setAddressType('permanentAddress')
      let findCountryData = allDropDownPermanentAddress?.countries?.find(
        (data) => data?.iso2 == formData?.permanentAddress?.country
      )
      let countryData = {
        value: `${findCountryData?.iso2}`,
        label: `${findCountryData?.name}`,
      }
      handleChangeAddress(countryData, 'Country')
      handleChangeAddress(
        { value: formData?.permanentAddress?.state },
        'State/Region'
      )
    }

    setCurrentAddress({ ...currentAddress, ...formData?.currentAddress })
    if (formData?.currentAddress) {
      setAddressType('currentAddress')
      let findCountryData = allDropDownPermanentAddress?.countries?.find(
        (data) => data?.iso2 == formData?.currentAddress?.country
      )
      let countryData = {
        value: `${findCountryData?.iso2}`,
        label: `${findCountryData?.name}`,
      }
      handleChangeAddress(countryData, 'Country')
      handleChangeAddress(
        { value: formData?.currentAddress?.state },
        'State/Region'
      )
    }
  }, [formData])

  useEffect(() => {
    if (location.pathname === '/employee/employee-update') {
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
              const dropDownData = allDropDownPermanentAddress[
                `${formFields.state_name}`
              ]?.map((data) => {
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
              })
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
                        setAddressType('permanentAddress')
                        const oldState = cloneDeep(permanentAddress)
                        oldState[`${formFields.key_name}`] = e.value
                        setPermanentAddress({ ...oldState })
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
                      }}
                      onBlur={(e) => {
                        const oldState = cloneDeep(permanentAddress)
                        oldState[`${formFields.key_name}`] = e.target.value
                        setPermanentAddress({ ...oldState })
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
              const dropDownData = allDropDownCurrentAddress[
                `${formFields.state_name}`
              ]?.map((data) => {
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
              })
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
                        onChangeAddress()
                        handleChangeAddress(e, formFields.label_name)
                        setAddressType('currentAddress')
                        const oldState = cloneDeep(currentAddress)
                        oldState[`${formFields.key_name}`] = e.label
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
  const history = useHistory()
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const [matrix, setMatrix] = useState(
    new Array(rows.length).fill(new Array(cols.length).fill(false))
  )
  const { formData } = useSelector((state) => state.createNewEmpData)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('fData', formData)
    const apiResponseData = formData?.permission
    if (apiResponseData?.length > 0) {
      const matrixFromResponse = apiResponseData?.map((ard) => {
        const { modalName, ...rObject } = ard
        return Object.keys(rObject).map((key) => rObject[key])
      })
      setMatrix(matrixFromResponse)
    }
  }, [])

  const handleMatrixChange = (matrixRowIndex, matrixColIndex, value) => {
    const clonedMatrix = [...matrix]
    const rowUpdated = [...matrix[matrixRowIndex]]
    rowUpdated[matrixColIndex] = value
    clonedMatrix[matrixRowIndex] = rowUpdated
    setMatrix(clonedMatrix)
    dispatch(getCreateNewEmpData({ permission: clonedMatrix }))
  }
  const handleRowChange = (index, value) => {
    const clonedMatrix = cloneDeep(matrix)
    clonedMatrix[index] = new Array(cols.length).fill(value)
    setMatrix(clonedMatrix)
    dispatch(getCreateNewEmpData({ permission: clonedMatrix }))
  }
  const handleColChange = (index, value) => {
    const clonedMatrix = cloneDeep(matrix)
    clonedMatrix.forEach((matrixRow) => {
      matrixRow[index] = value
    })
    setMatrix(clonedMatrix)
    dispatch(getCreateNewEmpData({ permission: clonedMatrix }))
  }
  const handleSubmit = async () => {
    const finalArray = []

    await rows.forEach(async (row, rowi) => {
      const obj = {
        modalName: row,
      }
      await cols.forEach(async (col, coli) => {
        obj[`${col}`] = matrix[rowi][coli]
      })
      await finalArray.push(obj)
      console.log('🚀 ~ finalArray', finalArray)
      dispatch(getCreateNewEmpData({ permission: finalArray }))
    })
    if (formData.id) {
      // console.log('if id is available call update fun ')
      empUpdateAPICall({ ...formData, permission: finalArray })
    } else {
      // console.log('if id is not available call create fun ')
      empCreateAPICall({ ...formData, permission: finalArray })
    }
  }

  const empCreateAPICall = async (data) => {
    console.log('🚀 ~ data', data)
    let updateFormData = { ...data }

    for (var key in updateFormData) {
      if (updateFormData[key] === '' || updateFormData[key] === undefined) {
        updateFormData[key] = null
      }
    }

    let callAPI = await dispatch(CreateNewEmployee(updateFormData))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      history.push('/employee')
      dispatch(getCreateNewEmpData())
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
  const empUpdateAPICall = async (data) => {
    console.log('🚀 ~ data', data)
    let updateFormData = { ...data }

    for (var key in updateFormData) {
      if (
        updateFormData[key] === '' ||
        updateFormData[key] === undefined ||
        updateFormData[key] === 'Invalid date'
      ) {
        updateFormData[key] = null
      }
    }

    let callAPI = await dispatch(EmployeeUpdate(updateFormData))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      history.push('/employee')
      dispatch(getCreateNewEmpData())
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            flexDirection: 'column',
            width: '200px',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          {rows.map((row, i) => (
            <div key={i}>
              <input
                type="checkbox"
                checked={matrix?.[i].every((v) => v)}
                onChange={(e) => {
                  handleRowChange(i, e.target.checked)
                }}
              />
              {row}
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              width: '200px',
              justifyContent: 'space-between',
            }}
          >
            {cols.map((col, i) => (
              <div style={{ display: 'flex' }} key={i}>
                {col}
                <input
                  type="checkbox"
                  checked={matrix.every((element) => element[i])}
                  onChange={(e) => {
                    handleColChange(i, e.target.checked)
                  }}
                />
              </div>
            ))}
          </div>
          {matrix.map((matrixRow, matrixRowIndex) => (
            <div
              style={{
                display: 'flex',
                width: '200px',
                justifyContent: 'space-between',
              }}
              key={`mr_idx_${matrixRowIndex}`}
            >
              {matrixRow.map((matrixCol, matrixColIndex) => (
                <div key={`mtx_main_${matrixRowIndex}_${matrixColIndex}`}>
                  <input
                    type="checkbox"
                    id={`id_${matrixRowIndex}${matrixColIndex}`}
                    name={`id_${matrixRowIndex}${matrixColIndex}`}
                    checked={matrixCol}
                    onChange={(ev) => {
                      handleMatrixChange(
                        matrixRowIndex,
                        matrixColIndex,
                        ev.target.checked
                      )
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" onClick={handleSubmit}>
              {String.submit}
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
