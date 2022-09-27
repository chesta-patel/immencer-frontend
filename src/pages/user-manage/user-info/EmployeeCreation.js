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
import {
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import Education from './education/Education'
import './employeecreation.scss'
import AvatarCropper from './avatar-crop/AvatarCropper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../services/thunk/AuthThunk'
import { setEmp } from '../../../services/thunk/SaveEmp'

const UserCreate = (props) => {
  const allDropdownState = useSelector((state) => state.dropdown)
  const dispatch = useDispatch()
  const initialState = {}
  userCreate.forEach((formFields) => {
    initialState[`${formFields.name}`] = ''
  })
  const [validation, setValidation] = useState(false)
  const { handleSubmit } = useForm()
  const [empCreate, setEmpCreate] = useState({ ...initialState })

  useEffect(() => {
    dispatch(fetchData('master/employmentStatus'))
    dispatch(fetchData('master/department'))
    dispatch(fetchData('master/designation'))
    dispatch(fetchData('master/bloodGroup'))
    dispatch(fetchData('master/gender'))
    dispatch(fetchData('master/nationality'))
  }, [])
  const submitForm = (e) => {
    e.preventDefault()
    setValidation(true)
    let checkValidation = []
    userCreate.map((formFields) => {
      if (formFields.required && !empCreate[`${formFields.name}`]) {
        checkValidation.push(formFields.name)
      } else {
        let filterCheckValidation = checkValidation?.filter(
          (value) => value !== formFields.name
        )
        checkValidation = filterCheckValidation
      }
      // eslint-disable-next-line array-callback-return
      return
    })
    if (checkValidation.length === 0) {
      props.next()
      dispatch(setEmp(empCreate))
    }
  }
  const handle = (dropdown) => {
    dispatch(fetchData(`teamLead/${dropdown.value}`))
  }

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
                  value: `${data.code}`,
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
                  <label className="form-label">{formFields.label_name}</label>
                  <RSelect
                    options={dropDownData?.length > 0 ? dropDownData : []}
                    name={formFields.name}
                    Value={empCreate[`${formFields.name}`]}
                    onChange={(e) => {
                      const oldState = cloneDeep(empCreate)
                      oldState[`${formFields.name}`] = e.label
                      setEmpCreate({ ...oldState })
                      setValidation(true)
                    }}
                  />
                  {formFields.required &&
                    !empCreate[`${formFields.name}`] &&
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
                  <label className="form-label">{formFields.label_name}</label>
                  <input
                    className="form-control"
                    type={formFields.type}
                    name={formFields.name}
                    placeholder={formFields.placeholder}
                    value={empCreate[`${formFields.name}`]}
                    onChange={(e) => {
                      const oldState = cloneDeep(empCreate)
                      oldState[`${formFields.name}`] = e.target.value
                      setEmpCreate({ ...oldState })
                      setValidation(true)
                    }}
                    onBlur={(e) => {
                      const oldState = cloneDeep(empCreate)
                      oldState[`${formFields.name}`] = e.target.value
                      setEmpCreate({ ...oldState })
                      setValidation(true)
                    }}
                    max={formFields.today}
                  />
                  {formFields.required &&
                    !empCreate[`${formFields.name}`] &&
                    validation && (
                      <span className="error-message">
                        {formFields.required}
                      </span>
                    )}
                </FormGroup>
              </Col>
            )
          }
        })}
        <Col md="4">
          <AvatarCropper />
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
  // const allDropdown=
  const initialState = {}
  AddressDetailForm.forEach((formFields) => {
    initialState[`${formFields.name}`] = ''
  })
  const [validate, setValidate] = useState(false)
  const { handleSubmit } = useForm()
  const [Adata, setAdata] = useState({ ...initialState })
  const [Fdata, setFdata] = useState({ ...initialState })
  const [Country, setCountry] = useState([])

  var checkValidate = []
  const submitForm = (e) => {
    e.preventDefault()
    setValidate(true)
    AddressDetailForm.map((formFields, index) => {
      if (formFields.required && !Fdata[`${formFields.name}`]) {
        checkValidate.push(formFields.name)
      } else {
        let filterCheckValidation = checkValidate?.filter(
          (value) => value !== formFields.name
        )
        checkValidate = filterCheckValidation
      }
      // eslint-disable-next-line array-callback-return
      return
    })
    if (checkValidate.length === 0) {
      props.next()
      dispatch(setEmp({ Fdata, Adata }))
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
  }
  const onChangeAddress = (event) => {
    if (event.target.checked) {
      setAdata(Fdata)
    } else {
      const tempAdata = { ...Adata }
      Object.keys(tempAdata).forEach((key) => {
        tempAdata[key] = ''
      })
      setAdata(tempAdata)
    }
    console.log(Adata)
  }
  useEffect(() => {
    dispatch(fetchData('master/countries'))
  }, [])

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
                      value: `${data.iso2}`,
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
                      Value={Fdata[`${formFields.name}`]}
                      onChange={(e) => {
                        handleChangeAddress(e, formFields.label_name)
                        const oldState = cloneDeep(Fdata)
                        oldState[`${formFields.name}`] = e.label
                        setFdata({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
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
                      value={Fdata[`${formFields.name}`]}
                      onChange={(e) => {
                        const oldState = cloneDeep(Fdata)
                        oldState[`${formFields.name}`] = e.target.value
                        setFdata({ ...oldState })
                        setValidate(true)
                      }}
                      onBlur={(e) => {
                        const oldState = cloneDeep(Fdata)
                        oldState[`${formFields.name}`] = e.target.value
                        setFdata({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
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
                      value: `${data.iso2}`,
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
                      Value={Fdata[`${formFields.name}`]}
                      onChange={(e) => {
                        handleChangeAddress(e, formFields.label_name)
                        const oldState = cloneDeep(Fdata)
                        oldState[`${formFields.name}`] = e.label
                        setFdata({ ...oldState })
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
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
                      value={Adata[`${formFields.name}`]}
                      onChange={(e) => {
                        const oldState = cloneDeep(Adata)
                        oldState[`${formFields.name}`] = e.target.value
                        setAdata({ ...oldState })
                        setValidate(true)
                      }}
                      onBlur={(e) => {
                        const oldState = cloneDeep(Adata)
                        oldState[`${formFields.name}`] = e.target.value
                        setAdata({ ...oldState })
                        setValidate(true)
                      }}
                    />
                    {formFields.required &&
                      !Fdata[`${formFields.name}`] &&
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
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [checked] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)
  tableHeader.map((e, index) => {
    for (const key in e) {
      if (e[key] === '') {
        delete e[key]
      }
    }
  })
  const c = tableHeader.filter((value) => Object.keys(value).length !== 0)
  const handlechange = (e) => {
    var value = e.target.checked
    var string = e.target.id[1]
    var pointer = parseInt(string) - 1
    if (e.target.id.startsWith('c')) {
      for (var i = 0; i < tableRow.length; i++) {
        var rowcheckbox = `${i}${pointer}`
        document.getElementById(rowcheckbox).checked = value
      }
    } else {
      for (var j = 0; j < tableHeader.length; j++) {
        var columncheckbox = `${pointer}${j}`
        document.getElementById(columncheckbox).checked = value
      }
    }
  }

  return (
    <>
      <div style={{ float: 'right' }}>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>{String.role}</DropdownToggle>
          <DropdownMenu left>
            <DropdownItem>{String.employee}</DropdownItem>
            <DropdownItem>{String.admin}</DropdownItem>
            <DropdownItem>{String.hr}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
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
                    <input type={checkbox.type} id={`${i}${index}`} />
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
