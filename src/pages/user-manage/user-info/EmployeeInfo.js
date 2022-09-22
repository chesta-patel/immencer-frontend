import React, { useState, useContext, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { userData } from '../UserData'
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
import { useDispatch } from 'react-redux'
import { fetchData } from '../../../services/slices/AuthThunk'

const UserInfo = ({ ...props }) => {
  const dispatch = useDispatch()
  // Stats declaration for data
  const [sm, updateSm] = useState(false)
  const { contextData } = useContext(UserContext)
  const [setData] = contextData
  // Get current list, pagination
  const [onSearchText] = useState('')
  const [roleTable] = useState(userInfo)

  useEffect(() => {
    dispatch(fetchData('employmentStatus'))
    dispatch(fetchData('department'))
    dispatch(fetchData('designation'))
    dispatch(fetchData('bloodGroup'))
    dispatch(fetchData('gender'))
  }, [])
  useEffect(() => {
    if (onSearchText !== '') {
      const filteredObject = userData.filter((item) => {
        return (
          item.name.toLowerCase().includes(onSearchText.toLowerCase()) ||
          item.email.toLowerCase().includes(onSearchText.toLowerCase())
        )
      })
      setData([...filteredObject])
    } else {
    }
  }, [onSearchText, setData])
  const history = useHistory()

  return (
    <React.Fragment>
      <Head title="Employee" />
      <Content>
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
                    <li>
                      <a
                        href="#export"
                        onClick={(ev) => {
                          ev.preventDefault()
                        }}
                        className="btn btn-white btn-outline-light"
                      >
                        <Icon name="download-cloud"></Icon>
                        <span>{String.export}</span>
                      </a>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button
                        color="primary"
                        className="btn-icon"
                        onClick={() => {
                          history.push('/employee/employee_creation')
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
        <PageTable json={roleTable} string={roleString} />
      </Content>
    </React.Fragment>
  )
}

export default UserInfo
