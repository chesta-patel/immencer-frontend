import React, { useEffect, useState } from 'react'
import { filterStatus, filterRole, userData } from './user-manage/UserData'
import { findUpper } from '../utils/Utils'
import {
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  UncontrolledDropdown,
  DropdownItem,
} from 'reactstrap'
import {
  Block,
  Icon,
  Button,
  RSelect,
  Row,
  Col,
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  UserAvatar,
} from '../components/Component'
import { Link, useHistory } from 'react-router-dom'
import String from '../utils/String'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { empDetail } from '../services/thunk/EmployeeDetailThunk'
import { toastNotify } from '../layout/Index'

function PageTable(props) {
  const [currentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = props?.employeeData?.slice(
    indexOfFirstItem,
    indexOfLastItem
  )
  const [actionText, setActionText] = useState('')
  const [onSearch, setonSearch] = useState(true)
  const [onSearchText, setSearchText] = useState('')
  const [tablesm, updateTableSm] = useState(false)
  const [sort, setSortState] = useState('')
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const history = useHistory()
  const [apiCallStatus, setApiCallStatus] = useState({
    status: '',
    message: '',
  })
  const { isSuccess } = useSelector((state) => state.getEmpDetail)

  // function which selects all the items
  const selectorCheck = (e) => {
    let newData
    newData = data.map((item) => {
      item.checked = e.currentTarget.checked
      return item
    })
    setData([...newData])
  }
  // function to change the selected property of an item
  const onSelectChange = (e, id) => {
    let newData = data
    let index = newData.findIndex((item) => item.id === id)
    newData[index].checked = e.currentTarget.checked
    setData([...newData])
  }
  // function to set the action to be taken in table header
  const onActionText = (e) => {
    setActionText(e.value)
  }
  // function which fires on applying selected action
  const onActionClick = (e) => {
    if (actionText === 'suspend') {
      let newData = data.map((item) => {
        if (item.checked === true) item.status = 'Suspend'
        return item
      })
      setData([...newData])
    } else if (actionText === 'delete') {
      let newData
      newData = data.filter((item) => item.checked !== true)
      setData([...newData])
    }
  }
  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch)
  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value)
  }
  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== '') {
      const filter = props?.json.map((d) => {
        return d?.key_name?.map((key) => {
          const filteredObject = currentItems?.filter((item) => {
            if (key === 'firstName' || key === 'lastName') {
              let name = `${item.firstName} ${item.lastName}`
              return name?.toLowerCase()?.includes(onSearchText?.toLowerCase())
            } else {
              return item[key]
                ?.toLowerCase()
                ?.includes(onSearchText?.toLowerCase())
            }
          })
          return filteredObject
        })
      })
      const filterNormalized = [
        ...new Set(filter?.flat(2)?.map(JSON?.stringify)),
      ]?.map(JSON?.parse)

      setData([...filterNormalized])
    } else {
      setData(currentItems)
    }
  }, [onSearchText])
  useEffect(() => {
    setData(currentItems)
  }, [props?.employeeData])
  useEffect(() => {}, [])
  // Sorting data
  const sortFunc = (params) => {
    let defaultData = currentItems
    if (params === 'asc') {
      let sortedData = defaultData.sort((a, b) =>
        (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName)
      )
      setData([...sortedData])
    } else if (params === 'dsc') {
      let sortedData = defaultData.sort(
        (a, b) =>
          b.firstName + b.lastName.localeCompare(a.firstName + a.lastName)
      )
      setData([...sortedData])
    }
  }

  const handleChange = async (id) => {
    // const dataAsFormData = getFormData(data)
    let callAPI = await dispatch(empDetail(`employee/${id}`))
    if (callAPI?.payload?.data?.isSuccess) {
      setApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      history.push('/employee/employee-update')
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
      history.push('/employee')
    }
  }

  return (
    <React.Fragment>
      <Block>
        <DataTable className="card-stretch">
          <div className="card-inner position-relative card-tools-toggle">
            <div className="card-title-group">
              <div className="card-tools">
                {/* <div className="form-inline flex-nowrap gx-3">
                  <div className="form-wrap">
                    <RSelect
                      options={bulkActionOptions}
                      className="w-130px"
                      placeholder="Bulk Action"
                      onChange={(e) => onActionText(e)}
                    />
                  </div>
                  <div className="btn-wrap">
                    <span className="d-none d-md-block">
                      <Button
                        disabled={actionText !== '' ? false : true}
                        color="light"
                        outline
                        className="btn-dim"
                        onClick={(e) => onActionClick(e)}
                      >
                        {String.apply}
                      </Button>
                    </span>
                    <span className="d-md-none">
                      <Button
                        color="light"
                        outline
                        disabled={actionText !== '' ? false : true}
                        className="btn-dim  btn-icon"
                        onClick={(e) => onActionClick(e)}
                      >
                        <Icon name="arrow-right"></Icon>
                      </Button>
                    </span>
                  </div>
                </div> */}
                <div
                  id="DataTables_Table_0_filter"
                  className="dataTables_filter form-inline flex-nowrap gx-3"
                >
                  <label>
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder="Search..."
                      onChange={(ev) => setSearchText(ev.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="card-tools mr-n1">
                <ul className="btn-toolbar gx-1">
                  {/* <li>
                    <a
                      href="#search"
                      onClick={(ev) => {
                        ev.preventDefault()
                        toggle()
                      }}
                      className="btn btn-icon search-toggle toggle-search"
                    >
                      <Icon name="search"></Icon>
                    </a>
                  </li> */}
                  <li className="btn-toolbar-sep"></li>
                  <li>
                    <div className="toggle-wrap">
                      <Button
                        className={`btn-icon btn-trigger toggle ${
                          tablesm ? 'active' : ''
                        }`}
                        onClick={() => updateTableSm(true)}
                      >
                        <Icon name="menu-right"></Icon>
                      </Button>
                      <div
                        className={`toggle-content ${
                          tablesm ? 'content-active' : ''
                        }`}
                      >
                        <ul className="btn-toolbar gx-1">
                          <li className="toggle-close">
                            <Button
                              className="btn-icon btn-trigger toggle"
                              onClick={() => updateTableSm(false)}
                            >
                              <Icon name="arrow-left"></Icon>
                            </Button>
                          </li>
                          <li>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                tag="a"
                                className="btn btn-trigger btn-icon dropdown-toggle"
                              >
                                <div className="dot dot-primary"></div>
                                <Icon name="filter-alt"></Icon>
                              </DropdownToggle>
                              <DropdownMenu
                                right
                                className="filter-wg dropdown-menu-xl"
                                style={{ overflow: 'visible' }}
                              >
                                <div className="dropdown-head">
                                  <span className="sub-title dropdown-title">
                                    {`${String.filter} ${String.user}`}
                                  </span>
                                  <div className="dropdown">
                                    <DropdownItem
                                      href="#more"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                      }}
                                      className="btn btn-sm btn-icon"
                                    >
                                      <Icon name="more-h"></Icon>
                                    </DropdownItem>
                                  </div>
                                </div>
                                <div className="dropdown-body dropdown-body-rg">
                                  <Row className="gx-6 gy-3">
                                    <Col size="6">
                                      <div className="custom-control custom-control-sm custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input form-control"
                                          id="hasBalance"
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="hasBalance"
                                        >
                                          {' '}
                                          {String.have_balance}
                                        </label>
                                      </div>
                                    </Col>
                                    <Col size="6">
                                      <div className="custom-control custom-control-sm custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input form-control"
                                          id="hasKYC"
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="hasKYC"
                                        >
                                          {' '}
                                          {String.kyc_verified}
                                        </label>
                                      </div>
                                    </Col>
                                    <Col size="6">
                                      <FormGroup>
                                        <label className="overline-title overline-title-alt">
                                          {String.role}
                                        </label>
                                        <RSelect
                                          options={filterRole}
                                          placeholder="Any Role"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col size="6">
                                      <FormGroup>
                                        <label className="overline-title overline-title-alt">
                                          {String.status}
                                        </label>
                                        <RSelect
                                          options={filterStatus}
                                          placeholder="Any Status"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col size="12">
                                      <FormGroup className="form-group">
                                        <Button color="secondary">
                                          {String.filter}
                                        </Button>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </div>
                                <div className="dropdown-foot between">
                                  <a
                                    href="#reset"
                                    onClick={(ev) => {
                                      ev.preventDefault()
                                    }}
                                    className="clickable"
                                  >
                                    {`${String.reset} ${String.filter}`}
                                  </a>
                                  <a
                                    href="#save"
                                    onClick={(ev) => {
                                      ev.preventDefault()
                                    }}
                                  >
                                    {`${String.save} ${String.filter}`}
                                  </a>
                                </div>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </li>
                          <li>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                tag="a"
                                className="btn btn-trigger btn-icon dropdown-toggle"
                              >
                                <Icon name="setting"></Icon>
                              </DropdownToggle>
                              <DropdownMenu right className="dropdown-menu-xs">
                                <ul className="link-check">
                                  <li>
                                    <span>{String.show}</span>
                                  </li>
                                  <li
                                    className={
                                      itemPerPage === 10 ? 'active' : ''
                                    }
                                  >
                                    <DropdownItem
                                      tag="a"
                                      href="#dropdownitem"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                        setItemPerPage(10)
                                      }}
                                    >
                                      10
                                    </DropdownItem>
                                  </li>
                                  <li
                                    className={
                                      itemPerPage === 15 ? 'active' : ''
                                    }
                                  >
                                    <DropdownItem
                                      tag="a"
                                      href="#dropdownitem"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                        setItemPerPage(15)
                                      }}
                                    >
                                      15
                                    </DropdownItem>
                                  </li>
                                </ul>
                                <ul className="link-check">
                                  <li>
                                    <span>{String.order}</span>
                                  </li>
                                  <li
                                    className={sort === 'dsc' ? 'active' : ''}
                                  >
                                    <DropdownItem
                                      tag="a"
                                      href="#dropdownitem"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                        setSortState('dsc')
                                        sortFunc('dsc')
                                      }}
                                    >
                                      {String.asc}
                                    </DropdownItem>
                                  </li>
                                  <li
                                    className={sort === 'asc' ? 'active' : ''}
                                  >
                                    <DropdownItem
                                      tag="a"
                                      href="#dropdownitem"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                        setSortState('asc')
                                        sortFunc('asc')
                                      }}
                                    >
                                      {String.desc}
                                    </DropdownItem>
                                  </li>
                                </ul>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className={`card-search search-wrap ${!onSearch && 'active'}`}>
              <div className="card-body">
                <div className="search-content">
                  <Button
                    className="search-back btn-icon toggle-search active"
                    onClick={() => {
                      setSearchText('')
                      toggle()
                    }}
                  >
                    <Icon name="arrow-left"></Icon>
                  </Button>
                  <input
                    type="text"
                    className="border-transparent form-focus-none form-control"
                    value={onSearchText}
                    onChange={(e) => onFilterChange(e)}
                  />
                  <Button className="search-submit btn-icon">
                    <Icon name="search"></Icon>
                  </Button>
                </div>
              </div>
            </div> */}
          </div>
          <DataTableBody compact>
            <DataTableHead>
              {/* <DataTableRow className="nk-tb-col-check">
                <div className="custom-control custom-control-sm custom-checkbox notext">
                  <input
                    type="checkbox"
                    className="custom-control-input form-control"
                    onChange={(e) => selectorCheck(e)}
                    id="uid"
                  />
                  <label className="custom-control-label" htmlFor="uid"></label>
                </div>
              </DataTableRow> */}
              {props.json.map((colum, id) => (
                <DataTableRow size="md" key={id}>
                  <span className="sub-text">{colum.name}</span>
                </DataTableRow>
              ))}
            </DataTableHead>
            {/*Head*/}
            {data?.length > 0
              ? data.map((item) => {
                  return (
                    <DataTableItem key={item.id}>
                      {props?.json.map((d) => {
                        if (
                          d?.key_name?.[0] === 'firstName' ||
                          d?.key_name?.[0] === 'lastName'
                        ) {
                          return (
                            <DataTableRow size="sm">
                              <Link
                                to={`${process.env.PUBLIC_URL}/employee/employee-detail/${item.id}`}
                              >
                                <div className="user-card">
                                  <UserAvatar
                                    theme={item.avatarBg}
                                    text={findUpper(
                                      `${item.firstName} ${item.lastName}`
                                    )}
                                    image={item.image}
                                  ></UserAvatar>
                                  <div className="user-info">
                                    <span className="tb-lead">
                                      {`${item.firstName} ${item.lastName}`}
                                      <span
                                        className={`dot dot-${
                                          item.status === 'Active'
                                            ? 'success'
                                            : item.status === 'Pending'
                                            ? 'warning'
                                            : 'danger'
                                        } d-md-none ml-1`}
                                      ></span>
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            </DataTableRow>
                          )
                        } else {
                          return (
                            <DataTableRow size="sm">
                              <span>{item[d?.key_name?.[0]]}</span>
                            </DataTableRow>
                          )
                        }
                      })}
                      <DataTableRow className="nk-tb-col-tools" size="sm">
                        <ul className="nk-tb-actions gx-1">
                          <li>
                            <DropdownItem
                              tag="a"
                              href="#edit"
                              onClick={(ev) => {
                                ev.preventDefault()
                                handleChange(item.id)
                              }}
                            >
                              <Icon name="edit"></Icon>
                              {/* <span>{String.edit}</span> */}
                            </DropdownItem>
                          </li>
                        </ul>
                      </DataTableRow>
                    </DataTableItem>
                  )
                })
              : null}
          </DataTableBody>
        </DataTable>
      </Block>
    </React.Fragment>
  )
}

export default PageTable
