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
} from '../../../components/Component'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { shortObjectWithNUmber } from '../../../utils/Helpers'
import String from '../../../utils/String'
import { filterRole, filterStatus } from '../../user-manage/UserData'
import { leaveAppTable } from './LeaveAppJson'
import { GetLeave } from '../../../services/thunk/GetLeaveThunk'
import { Formate_Date_DD_MM_YYYY } from '../../../utils/Utils'
import { deleteLeave } from '../../../services/thunk/DeleteLeaveThunk'
import { toastNotify } from '../../../layout/Index'

function LeaveApplicationPageTable() {
  const dispatch = useDispatch()
  const { infoList } = useSelector((state) => state.assetsApplication)
  const { leaveList } = useSelector((state) => state.GetLeaveList)
  const { leaveStatus } = useSelector((state) => state.dropdown)
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
  const location = useLocation()
  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })

  const callDeleteFormSubmit = async (id) => {
    // deleteEmployee(id)
    console.log('levae delete id', id)
    let callAPI = await dispatch(deleteLeave(id))
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
  useEffect(() => {
    setData(currentItems)
  }, [infoList])
  useEffect(() => {
    console.log(deleteApiCallStatus)
    if (deleteApiCallStatus.status === 'success') {
      setDeleteModal({ status: false, data: '' })
      setDeleteApiCallStatus({
        status: '',
        message: '',
      })
    }
  }, [deleteApiCallStatus])
  const onEditClick = (id) => {
    console.log('leave app id', id)
  }
  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch)
  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value)
  }

  const loadDetail = (id) => {
    history.push({
      pathname: '/leave/leave-view',
      state: { data: id },
    })
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
              {leaveAppTable.map((colum, id) => (
                <DataTableRow size="lg" key={id}>
                  <span className="sub-text">{colum.name}</span>
                </DataTableRow>
              ))}
            </DataTableHead>
            {leaveList?.length > 0
              ? leaveList.map((item) => {
                  return item.datesDetails.map((date) => {
                    return (
                      <DataTableItem key={item.id}>
                        <DataTableRow size="lg">
                          <div className="user-card">
                            <div className="user-info">
                              <span className="tb-lead">
                                {item.employeeName}{' '}
                              </span>
                            </div>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <div className="user-card">
                            <div className="user-info">
                              <span className="tb-lead">
                                {date.date
                                  ? Formate_Date_DD_MM_YYYY(date.date)
                                  : ''}{' '}
                              </span>
                            </div>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <div className="user-card">
                            <div className="user-info">
                              <span className="tb-lead">
                                {item.leaveTypeName}
                              </span>
                            </div>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <div className="user-card">
                            <div className="user-info">
                              <span className="tb-lead">
                                {item.description}{' '}
                              </span>
                            </div>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <span
                            className={`tb-status text-${
                              date.statusName === 'Approved'
                                ? 'success'
                                : date.statusName === 'Applied'
                                ? 'info'
                                : 'danger'
                            }`}
                          >
                            {date.statusName}
                          </span>
                          {date.statusName !== 'Pending' && (
                            <span
                              icon="info"
                              direction="top"
                              // id={item.id + 'pendingless'}
                              // text={`${item.status} at Dec 18, 2019 01:02 am`}
                            ></span>
                          )}
                          {!date.statusName === 'Pending' && (
                            <span>
                              <span
                                icon="info"
                                direction="top"
                                // text={item.date}
                                // id={item.id}
                              />
                            </span>
                          )}
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{date.dayTypeName}</span>
                        </DataTableRow>

                        <DataTableRow className="nk-tb-col-tools">
                          <ul className="nk-tb-actions gx-1">
                            <li
                              className="nk-tb-action-hidden"
                              onClick={() => {
                                // loadDetail(item.id)
                                // setViewModal(true)
                              }}
                            >
                              <span
                                tag="a"
                                containerClassName="btn btn-trigger btn-icon"
                                id={'view' + item.id}
                                icon="eye-fill"
                                direction="top"
                                text="Quick View"
                              />
                            </li>
                            {item.status === 'Rejected' ? null : item.status ===
                              'Approved' ? (
                              <li
                                className="nk-tb-action-hidden"
                                // onClick={() => onRejectClick(item.id)}
                              >
                                <span
                                  tag="a"
                                  containerClassName="btn btn-trigger btn-icon"
                                  id={'reject' + item.id}
                                  icon="cross-fill-c"
                                  direction="top"
                                  text="Reject"
                                />
                              </li>
                            ) : (
                              <React.Fragment>
                                <li
                                  className="nk-tb-action-hidden"
                                  // onClick={() => onApproveClick(item.id)}
                                >
                                  <span
                                    tag="a"
                                    containerClassName="btn btn-trigger btn-icon"
                                    id={'approve' + item.id}
                                    icon="check-fill-c"
                                    direction="top"
                                    text="Approve"
                                  />
                                </li>
                                <li
                                  className="nk-tb-action-hidden"
                                  // onClick={() => onRejectClick(item.id)}
                                >
                                  <span
                                    tag="a"
                                    containerClassName="btn btn-trigger btn-icon"
                                    id={'reject' + item.id}
                                    icon="cross-fill-c"
                                    direction="top"
                                    text="Reject"
                                  />
                                </li>
                              </React.Fragment>
                            )}
                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  tag="a"
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
                                          loadDetail(item.id)
                                        }}
                                      >
                                        <Icon name="eye"></Icon>
                                        <span>{String.view}</span>
                                      </DropdownItem>
                                    </li>

                                    {item.status ===
                                    'Rejected' ? null : item.status ===
                                      'Approved' ? (
                                      <li
                                      // onClick={() => onRejectClick(item.id)}
                                      >
                                        <DropdownItem
                                          tag="a"
                                          href="#reject"
                                          onClick={(ev) => {
                                            ev.preventDefault()
                                          }}
                                        >
                                          <Icon name="na"></Icon>
                                          <span>Reject User</span>
                                        </DropdownItem>
                                      </li>
                                    ) : (
                                      <React.Fragment>
                                        <li
                                        // onClick={() => onApproveClick(item.id)}
                                        >
                                          <DropdownItem
                                            tag="a"
                                            href="#approve"
                                            onClick={(ev) => {
                                              ev.preventDefault()
                                            }}
                                          >
                                            <Icon name="check-thick"></Icon>
                                            <span>Approve</span>
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            tag="a"
                                            href="#details"
                                            onClick={(ev) => {
                                              ev.preventDefault()
                                              // history.push(
                                              //   `${process.env.PUBLIC_URL}/kyc-details-regular/${item.id}`
                                              // )
                                            }}
                                          >
                                            <Icon name="edit"></Icon>
                                            <span>{String.edit}</span>
                                          </DropdownItem>
                                        </li>
                                        <li
                                        // onClick={() => onRejectClick(item.id)}
                                        >
                                          <DropdownItem
                                            tag="a"
                                            href="#suspend"
                                            onClick={(ev) => {
                                              ev.preventDefault()
                                              setDeleteModal({
                                                status: true,
                                                data: item,
                                              })
                                            }}
                                          >
                                            <Icon name="na"></Icon>
                                            <span>{`${String.delete}`}</span>
                                          </DropdownItem>
                                        </li>
                                      </React.Fragment>
                                    )}
                                  </ul>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </DataTableRow>
                      </DataTableItem>
                    )
                  })
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
            {`${deleteModal.data.employeeName} ${String.leave}`} ?
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
            onClick={() => callDeleteFormSubmit(deleteModal.data.id)}
          >
            {String.delete}
          </button>
        </ModalBody>
      </Modal>
    </>
  )
}

export default LeaveApplicationPageTable
