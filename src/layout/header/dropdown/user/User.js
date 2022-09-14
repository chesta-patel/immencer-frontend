import React, { useState } from 'react'
import UserAvatar from '../../../../components/user/UserAvatar'
import { DropdownToggle, DropdownMenu, Dropdown } from 'reactstrap'
import { Icon } from '../../../../components/Component'
import { LinkList, LinkItem } from '../../../../components/links/Links'
import commonString from '../../../../utils/String'

const User = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prevState) => !prevState)

  const handleSignout = () => {
    localStorage.removeItem('accessToken')
  }

  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault()
        }}
      >
        <div className="user-toggle">
          <UserAvatar icon="user-alt" className="sm" />
          <div className="user-info d-none d-md-block">
            <div className="user-status">{commonString.administrator}</div>
            <div className="user-name dropdown-indicator">
              {commonString.abu_bin_ishityak}
            </div>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-md dropdown-menu-s1">
        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
          <div className="user-card sm">
            <div className="user-avatar">
              <span>AB</span>
            </div>
            <div className="user-info">
              <span className="lead-text">{commonString.abu_bin_ishityak}</span>
              <span className="sub-text">user@immence.in</span>
            </div>
          </div>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <LinkItem
              link="/user-profile-regular"
              icon="user-alt"
              onClick={toggle}
            >
              {`${commonString.view}${commonString.profile}`}
            </LinkItem>
            <LinkItem
              link="/user-profile-setting"
              icon="setting-alt"
              onClick={toggle}
            >
              {`${commonString.account_setting}`}
            </LinkItem>
            <LinkItem
              link="/user-profile-activity"
              icon="activity-alt"
              onClick={toggle}
            >
              {commonString.login_activity}
            </LinkItem>
          </LinkList>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <a
              href={`${process.env.PUBLIC_URL}/auth-login`}
              onClick={handleSignout}
            >
              <Icon name="signout"></Icon>
              <span>{commonString.sign_out}</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  )
}

export default User
