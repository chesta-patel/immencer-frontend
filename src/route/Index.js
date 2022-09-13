import React, { Suspense, useLayoutEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserContextProvider } from '../pages/user-manage/UserContext'
import { RedirectAs404 } from '../utils/Utils'
import Homepage from '../pages/HomePage'
import Role from '../pages/user-manage/user-role/Role'
import UserPermission from '../pages/user-manage/user-permission/UserPermission'
import SetupRolePermission from '../pages/user-manage/userpermission-role/SetupRolePermission'
import UserInfo from '../pages/user-manage/user-info/UserInfo'
import Employee from '../pages/user-manage/user-employee/Employee'
import AssetsType from '../pages/assets/asset-type/AssetsType'
import AssetApplication from '../pages/assets/assets-application/AssetsApplication'
import LeaveType from '../pages/leave/leave-type/LeaveType'
import LeaveApplication from '../pages/leave/leave-application/LeaveApplication'
import HolidayType from '../pages/holiday/holiday-type/HolidayType'
import HolidayList from '../pages/holiday/holiday-list/HolidayList'
import CompanyDocument from '../pages/company-info/company-documents/CompanyDocument'
import CompanyPolicy from '../pages/company-info/company-policy/CompanyPolicy'
import UserDetail from '../pages/user-manage/user-info/UserDetail'
const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Dashboards*/}
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-manage/role`}
          render={() => (
            <UserContextProvider>
              <Role />
            </UserContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-manage/user-permission`}
          render={() => (
            <UserContextProvider>
              <UserPermission />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-manage/setup-role-permission`}
          render={() => (
            <UserContextProvider>
              <SetupRolePermission />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-manage/user-info`}
          render={() => (
            <UserContextProvider>
              <UserInfo />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-manage/user-info/user-detail`}
          render={() => (
            <UserContextProvider>
              <UserDetail />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-manage/employee`}
          render={() => (
            <UserContextProvider>
              <Employee />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/assets/assets-type`}
          render={() => (
            <UserContextProvider>
              <AssetsType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/assets/assets-application`}
          render={() => (
            <UserContextProvider>
              <AssetApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/leave/leave-type`}
          render={() => (
            <UserContextProvider>
              <LeaveType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/leave/leave-application`}
          render={() => (
            <UserContextProvider>
              <LeaveApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/holiday/holiday-type`}
          render={() => (
            <UserContextProvider>
              <HolidayType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/holiday/holiday-list`}
          render={() => (
            <UserContextProvider>
              <HolidayList />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/company-info/company-document`}
          render={() => (
            <UserContextProvider>
              <CompanyDocument />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/company-info/company-policy`}
          render={() => (
            <UserContextProvider>
              <CompanyPolicy />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={Homepage}
        ></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  )
}

export default Pages
