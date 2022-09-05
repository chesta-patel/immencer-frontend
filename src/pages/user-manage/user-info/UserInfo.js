import React, { useState, useContext, useEffect } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { userData } from '../UserData'
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
} from '../../../components/Component'
import { UserContext } from '../UserContext'
import { userInfo } from './UserInfoJson'
import PageTable from '../../PageTable'
import { roleString } from '../../Strings'
import { useHistory } from 'react-router-dom'

const UserInfo = ({ ...props }) => {
  // Stats declaration for data
  const [sm, updateSm] = useState(false)
  const [setFormData] = useState({
    role_id: '',
    department: '',
    firstname: '',
    lastname: '',
    blood_group: '',
    height: '',
    gender: '',
    country: '',
    birth_day: '',
    current_add: '',
    permanent_add: '',
    mobile: '',
    parent_mobile: '',
    whatsapp_number: '',
    email: '',
    personal_email: '',
    adhar_card: '',
    pan_card: '',
    registered_at: '',
    last_login: '',
    intro: '',
    avatar: '',
    profile: '',
    swift_time: '',
    education: '',
    isactive: '',
    isdelete: '',
  })
  const { contextData } = useContext(UserContext)
  const [Data, setData] = contextData
  // Get current list, pagination
  const [onSearchText] = useState('')
  const [roleTable] = useState(userInfo)

  const onFormCancel = () => {
    resetForm()
  }
  // function to reset the form
  const resetForm = () => {
    setFormData({
      role_id: '',
      department: '',
      firstname: '',
      lastname: '',
      blood_group: '',
      height: '',
      gender: '',
      country: '',
      birth_day: '',
      current_add: '',
      permanent_add: '',
      mobile: '',
      parent_mobile: '',
      whatsapp_number: '',
      email: '',
      personal_email: '',
      adhar_card: '',
      pan_card: '',
      registered_at: '',
      last_login: '',
      intro: '',
      avatar: '',
      profile: '',
      swift_time: '',
      education: '',
      isactive: '',
      isdelete: '',
    })
  }
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
      setData([...userData])
    }
  }, [onSearchText, setData])
  const history = useHistory()

  return (
    <React.Fragment>
      <Head title="User Profile" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                User Profile
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>This is User Profile Page.</p>
              </BlockDes>
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
                        <span>Export</span>
                      </a>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button
                        color="primary"
                        className="btn-icon"
                        onClick={() => {
                          history.push('/user-manage/user-info/user-detail')
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
