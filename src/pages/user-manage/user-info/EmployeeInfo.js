import React, { useState, useContext, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
} from '../../../components/Component'
import { UserContext } from '../UserContext'
import { userInfo } from './EmployeeInfoJson'
import PageTable from '../../PageTable'
import { roleString } from '../../Strings'
import { useHistory } from 'react-router-dom'
import String from '../../../utils/String'
import { useSelector } from 'react-redux'
import { fetchData } from '../../../services/thunk/AuthThunk'
import { useDispatch } from 'react-redux'
import { empData } from '../../../services/thunk/GetEmployee'
import Loader from '../../Loader'
import { getCreateNewEmpData } from '../../../services/thunk/CreateNewEmpDataThunk'

const UserInfo = ({ ...props }) => {
  const history = useHistory()
  const { employeeData, isLoading } = useSelector((state) => state.getEmp)
  const dispatch = useDispatch()
  const [employeeDetail, setEmployeeDetail] = useState([])

  // Stats declaration for data
  const [sm, updateSm] = useState(false)
  const { contextData } = useContext(UserContext)
  const [data, setData] = useState()
  // Get current list, pagination
  const [onSearchText] = useState('')
  const [roleTable] = useState(userInfo)

  useEffect(() => {
    dispatch(empData('employee'))
  }, [])
  useEffect(() => {
    setEmployeeDetail(employeeData)
  }, [employeeData])

  return (
    <React.Fragment>
      <Head title="Employee" />
      <Content>
        {/* <Loader /> */}
        {isLoading ? <Loader /> : null}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {String.employee}
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
                      <Button
                        color="primary"
                        className="btn-icon"
                        onClick={() => {
                          dispatch(getCreateNewEmpData())
                          history.push('/employee/employee-creation')
                        }}
                      >
                        <Icon name="plus"></Icon>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <PageTable
          json={roleTable}
          string={roleString}
          employeeData={employeeDetail}
        />
      </Content>
    </React.Fragment>
  )
}

export default UserInfo
