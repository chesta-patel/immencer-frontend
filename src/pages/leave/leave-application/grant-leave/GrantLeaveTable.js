import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  UncontrolledDropdown,
  DropdownItem,
  Modal,
  ModalBody,
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
} from '../../../../components/Component'
import { filterRole, filterStatus } from '../../../user-manage/UserData'

function GrantLeaveTable({}) {
  const { infoList } = useSelector((state) => state.companyDocument)
  const [actionText, setActionText] = useState('')
  const [onSearch, setonSearch] = useState(true)
  const [onSearchText, setSearchText] = useState('')
  const [tablesm, updateTableSm] = useState(false)
  const [sort, setSortState] = useState('')
  const [data, setData] = useState([])
  const [currentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage
  // const indexOfFirstItem = indexOfLastItem - itemPerPage
  // const currentItems = infoList
  //   ?.filter((data) => data.isDeleted !== 1 && data.isActive === 1)
  //   ?.slice(indexOfFirstItem, indexOfLastItem)
  //   ?.sort(shortObjectWithNUmber('seqNo'))
  const [deleteModal, setDeleteModal] = useState({ status: false, data: '' })
  const history = useHistory()
  // useEffect(() => {
  //   setData(currentItems)
  // }, [infoList])

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
  // useEffect(() => {
  //   if (onSearchText !== '') {
  //     const filter = props?.json.map((d) => {
  //       return d?.key_name?.map((key) => {
  //         const filteredObject = currentItems?.filter((item) => {
  //           if (key === 'updatedAt' || key === 'createdAt') {
  //             let date = item.updatedAt
  //               ? Formate_Date_DD_MM_YYYY(item.updatedAt)
  //               : Formate_Date_DD_MM_YYYY(item.createdAt)
  //             return date?.toLowerCase()?.includes(onSearchText?.toLowerCase())
  //           } else {
  //             return item[key]
  //               ?.toLowerCase()
  //               ?.includes(onSearchText?.toLowerCase())
  //           }
  //         })
  //         return filteredObject
  //       })
  //     })

  //     const filterNormalized = [
  //       ...new Set(filter?.flat(2)?.map(JSON?.stringify)),
  //     ]?.map(JSON?.parse)

  //     setData([...filterNormalized])
  //   } else {
  //     setData(currentItems)
  //   }
  // }, [onSearchText])
  // Sorting data
  const sortFunc = (params) => {
    let defaultData = data
    if (params === 'asc') {
      let sortedData = defaultData.sort((a, b) => a.name.localeCompare(b.name))
      setData([...sortedData])
    } else if (params === 'dsc') {
      let sortedData = defaultData.sort((a, b) => b.name.localeCompare(a.name))
      setData([...sortedData])
    }
  }

  // useEffect(() => {
  //   if (props.deleteApiCallStatus.status === 'success') {
  //     setDeleteModal({ status: false, data: '' })
  //     props.setDeleteApiCallStatus({
  //       status: '',
  //       message: '',
  //     })
  //   }
  // }, [props])
  return (
    <React.Fragment>
      <React.Fragment>
        <Block>
          <DataTable className="card-stretch">
            <div className="card-inner position-relative card-tools-toggle padding_btm_0">
              <div className="card-title-group">
                <div className="card-tools">
                  <div
                    id="DataTables_Table_0_filter"
                    className="dataTables_filter form-inline flex-nowrap gx-3"
                  >
                    <label>
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder="Search..."
                        // onChange={(ev) => setSearchText(ev.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <div className="card-tools mr-n1">
                  <ul className="btn-toolbar gx-1">
                    <li className="btn-toolbar-sep"></li>
                    <li>
                      <div className="toggle-wrap">
                        <Button
                          className={`btn-icon btn-trigger toggle ${
                            tablesm ? 'active' : ''
                          }`}
                          // onClick={() => updateTableSm(true)}
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
                                <DropdownMenu
                                  right
                                  className="dropdown-menu-xs"
                                >
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
              <div
                className={`card-search search-wrap ${!onSearch && 'active'}`}
              >
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
              </div>
            </div>
            <DataTableBody compact>
              <DataTableHead>
                {/* {props.json.map((colum, id) => (
                  <DataTableRow size="md" key={id}>
                    <span className="sub-text">{colum.name}</span>
                  </DataTableRow>
                ))} */}
              </DataTableHead>
            </DataTableBody>
          </DataTable>
        </Block>
      </React.Fragment>
    </React.Fragment>
  )
}

export default GrantLeaveTable
