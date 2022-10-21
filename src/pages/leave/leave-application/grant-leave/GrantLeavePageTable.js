import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { shortObjectWithNUmber } from '../../../../utils/Helpers'
import String from '../../../../utils/String'
import { filterRole, filterStatus } from '../../../user-manage/UserData'
import { grantedLeaveTEmp, grantLeaveAppTable } from './GrantLeaveJson'
import { GetGrantLeave } from '../../../../services/thunk/GetGrantLeaveThunk'
import moment from 'moment'
import { Formate_Date_DD_MM_YYYY } from '../../../../utils/Utils'
import { toastNotify } from '../../../../layout/Index'

function GrantLeavePageTable() {
  const dispatch = useDispatch()
  const { infoList } = useSelector((state) => state.assetsApplication)
  const { grantLeaveAssignList } = useSelector(
    (state) => state.GetGrantLeaveList
  )
  const [actionText, setActionText] = useState('')
  const [onSearch, setonSearch] = useState(true)
  const [onSearchText, setSearchText] = useState('')
  const [tablesm, updateTableSm] = useState(false)
  const [sort, setSortState] = useState('')
  const [data, setData] = useState([])
  const history = useHistory()
  const [currentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = infoList
    ?.filter((data) => data.isDeleted !== 1 && data.isActive === 1)
    ?.slice(indexOfFirstItem, indexOfLastItem)
    ?.sort(shortObjectWithNUmber('seqNo'))
  const [modal, setModal] = useState({ view: false, link: '' })
  const [deleteModal, setDeleteModal] = useState({ status: false, data: '' })
  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })
  useEffect(() => {
    setData(currentItems)
  }, [infoList])

  useEffect(() => {
    dispatch(GetGrantLeave('grantLeaveAssign'))
  }, [])
  const onFormCancel = () => {
    setModal({ view: false, link: '' })
  }
  // useEffect(() => {
  //   console.log(deleteApiCallStatus)
  //   if (deleteApiCallStatus.status === 'success') {
  //     setDeleteModal({ status: false, data: '' })
  //     setDeleteApiCallStatus({
  //       status: '',
  //       message: '',
  //     })
  //   }
  // }, [deleteApiCallStatus])

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
  //   useEffect(() => {
  //     if (onSearchText !== '') {
  //       const filter = props?.json.map((d) => {
  //         return d?.key_name?.map((key) => {
  //           const filteredObject = currentItems?.filter((item) => {
  //             switch (key) {
  //               case 'updatedAt' || 'createdAt':
  //                 let date = item.updatedAt
  //                   ? Formate_Date_DD_MM_YYYY(item.updatedAt)
  //                   : Formate_Date_DD_MM_YYYY(item.createdAt)
  //                 return date
  //                   ?.toString()
  //                   ?.toLowerCase()
  //                   ?.includes(onSearchText?.toString()?.toLowerCase())

  //               default:
  //                 return item[key]
  //                   ?.toString()
  //                   ?.toLowerCase()
  //                   ?.includes(onSearchText?.toString()?.toLowerCase())
  //             }
  //           })
  //           return filteredObject
  //         })
  //       })

  //       const filterNormalized = [
  //         ...new Set(filter?.flat(2)?.map(JSON?.stringify)),
  //       ]?.map(JSON?.parse)

  //       setData([...filterNormalized])
  //     } else {
  //       setData(currentItems)
  //     }
  //   }, [onSearchText])
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
  const callDeleteFormSubmit = async (id) => {
    // deleteEmployee(id)
    console.log('levae delete id', id)
    let callAPI = await dispatch()
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      // dispatch(holidayList('holiday'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  return (
    <>
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
                      onChange={(ev) => setSearchText(ev.target.value)}
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
            <div className={`card-search search-wrap ${!onSearch && 'active'}`}>
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
              {grantLeaveAppTable.map((colum, id) => (
                <DataTableRow size="md" key={id}>
                  <span className="sub-text">{colum.name}</span>
                </DataTableRow>
              ))}
            </DataTableHead>
            {grantLeaveAssignList?.length > 0
              ? grantLeaveAssignList.map((grantLeaveList) => {
                  return (
                    <DataTableItem key={grantLeaveList.id}>
                      <DataTableRow size="sm">
                        <div className="user-card">
                          <div className="user-info">
                            <span className="tb-lead">
                              {grantLeaveList.empName}{' '}
                            </span>
                          </div>
                        </div>
                      </DataTableRow>
                      <DataTableRow size="sm">
                        <div className="user-card">
                          <div className="user-info">
                            <span className="tb-lead">
                              {grantLeaveList.leaveCount}{' '}
                            </span>
                          </div>
                        </div>
                      </DataTableRow>
                      <DataTableRow size="sm">
                        <div className="user-card">
                          <div className="user-info">
                            <span className="tb-lead">
                              {grantLeaveList.createdAt
                                ? Formate_Date_DD_MM_YYYY(
                                    grantLeaveList.createdAt
                                  )
                                : ''}{' '}
                            </span>
                          </div>
                        </div>
                      </DataTableRow>
                      <DataTableRow size="sm">
                        <span>{grantLeaveList.monthYear}</span>
                      </DataTableRow>
                      <DataTableRow size="sm">
                        <span>{grantLeaveList.description}</span>
                      </DataTableRow>
                      <DataTableRow>
                        <ul>
                          <li>
                            <DropdownItem
                              tag="a"
                              href="#edit"
                              onClick={(ev) => {
                                ev.preventDefault()
                                history.push(
                                  `/grantLeaveInfo/grantLeave-view${grantLeaveList.id}`
                                )
                                toggle('edit')
                              }}
                            >
                              <Icon name="eye"></Icon>
                            </DropdownItem>
                          </li>
                          {/* <li>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                tag="a"
                                href="#more"
                                onClick={(ev) => ev.preventDefault()}
                                className="dropdown-toggle btn btn-icon btn-trigger"
                              >
                                <Icon name="more-h"></Icon>
                              </DropdownToggle>
                              <DropdownMenu right>
                                <ul className="link-list-opt no-bdr">
                                 

                                  <li>
                                    <DropdownItem
                                      tag="a"
                                      href="#view"
                                      onClick={(ev) => {
                                        ev.preventDefault()
                                        history.push(
                                          `/grantLeaveInfo/update-grantLeave/${grantLeaveList.id}`
                                        )
                                        // onEditClick(grantLeaveList.id)
                                        toggle('details')
                                      }}
                                    >
                                      <Icon name="edit"></Icon>
                                      <span>{`${String.edit} ${String.granted} ${String.leave}`}</span>
                                    </DropdownItem>
                                  </li>
                                  <li>
                                    <DropdownItem
                                      tag="a"
                                      href="#remove"
                                      onClick={(ev) => {
                                        setDeleteModal({
                                          status: true,
                                          data: grantLeaveList,
                                        })
                                      }}
                                    >
                                      <Icon name="trash"></Icon>
                                      <span>{`${String.delete} ${String.granted} ${String.leave}`}</span>
                                    </DropdownItem>
                                  </li>
                                </ul>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </li> */}
                        </ul>
                      </DataTableRow>
                    </DataTableItem>
                  )
                })
              : null}
          </DataTableBody>
        </DataTable>
      </Block>
      <Modal
        isOpen={deleteModal.status}
        toggle={() => setDeleteModal({ status: false, data: '' })}
        className="modal-dialog-centered delete_policy"
        size="lg"
      >
        <ModalBody>
          <button
            onClick={(ev) => {
              ev.preventDefault()
              setDeleteModal({ status: false, data: '' })
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </button>
          <h2 className="modal_title">{String.delete_confirmation}</h2>
          <p className="alert alert-danger">
            {String.are_you_sure_you_want_to_delete_the}{' '}
            {console.log('deleteModal.data.', deleteModal.data)}
            {`${deleteModal.data.empName} ${String.leave}`} ?
          </p>
          <button
            type="button"
            onClick={(ev) => {
              ev.preventDefault()
              setDeleteModal({ status: false, data: '' })
            }}
            className="Pre btn header_submit_bn"
          >
            {String.cancel}
          </button>
          <button
            type="button"
            className="header_submit_bn btn btn-danger"
            // onClick={() => callDeleteFormSubmit(deleteModal.data.id)}
          >
            {String.delete}
          </button>
        </ModalBody>
      </Modal>
    </>
  )
}

export default GrantLeavePageTable
