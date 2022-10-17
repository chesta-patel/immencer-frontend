import React, { useState, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { holidayListTable } from './HolidayListJson'
import { holidayList } from '../../../services/thunk/HolidayListThunk'
import { useDispatch } from 'react-redux'
import { toastNotify } from '../../../layout/Index'
import HolidayPageTable from './HolidayPageTable'
import { deleteHolidayData } from './../../../services/thunk/DeleteHolidayListThunk'
import { fetchData } from '../../../services/thunk/AuthThunk'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
} from '../../../components/Component'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router'
import { permissions } from '../../../layout/header/dropdown/PermissionJson'
import String from '../../../utils/String'
var hasHolidayAddPermissions = false
const token = localStorage.getItem('navyblue')
if (token == 'navyblue') {
  permissions.map((permissionLIst, index) => {
    if (permissionLIst.modalName == 'Holiday') {
      hasHolidayAddPermissions = permissionLIst.add
    }
  })
}
const HolidayList = ({ ...props }) => {
  const [roleTable] = useState(holidayListTable)
  const [sm, updateSm] = useState(false)
  const history = useHistory()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(holidayList('holiday'))
    dispatch(fetchData('master/holidayType'))
  }, [])
  const [deleteApiCallStatus, setDeleteApiCallStatus] = useState({
    status: '',
    message: '',
  })
  const [modal, setModal] = useState({
    edit: false,
    add: false,
    data: '',
  })

  const callDeleteFormSubmit = async (id) => {
    let callAPI = await dispatch(deleteHolidayData(id))
    if (callAPI?.payload?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'success',
        message: callAPI?.payload?.data?.message,
      })
      toastNotify('success', callAPI?.payload?.data?.message)
      dispatch(holidayList('holiday'))
    } else if (!callAPI?.payload?.response?.data?.isSuccess) {
      setDeleteApiCallStatus({
        status: 'error',
        message: callAPI?.payload?.response?.data?.message,
      })
      toastNotify('error', callAPI?.payload?.response?.data?.message)
    }
  }

  return (
    <React.Fragment>
      <Head title="Holiday List" />
      <Content>
        {/* <PageHeader
          json={roleFormData}
          string={holidayListString}
          callFormSubmit={callFormSubmit}
          apiCallStatus={apiCallStatus}
          setApiCallStatus={setApiCallStatus}
          setModal={setModal}
          modal={modal}
          updateFormSubmit={updateFormSubmit}
        /> */}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {String.holiday_type}
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${
                    sm ? 'active' : ''
                  }`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div
                  className="toggle-expand-content"
                  style={{ display: sm ? 'block' : 'none' }}
                >
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      {hasHolidayAddPermissions && (
                        <Button
                          color="primary"
                          className="btn-icon"
                          onClick={() => {
                            history.push({
                              pathname: '/holiday/create-holiday',
                              state: { add: true, edit: false, data: '' },
                            })
                          }}
                        >
                          <Icon name="plus"></Icon>
                        </Button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <HolidayPageTable
          json={roleTable}
          callDeleteFormSubmit={callDeleteFormSubmit}
          deleteApiCallStatus={deleteApiCallStatus}
          setDeleteApiCallStatus={setDeleteApiCallStatus}
          setModal={setModal}
          modal={modal}
        />
      </Content>
    </React.Fragment>
  )
}

export default HolidayList
