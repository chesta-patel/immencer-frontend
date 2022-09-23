import React, { Suspense, useLayoutEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserContextProvider } from '../pages/user-manage/UserContext'
import { RedirectAs404 } from '../utils/Utils'
import EmployeeInfo from '../pages/user-manage/user-info/EmployeeInfo'
import Employee from '../pages/user-manage/user-info/EmployeeInfo'
import AssetsType from '../pages/assets/asset-type/AssetsType'
import AssetApplication from '../pages/assets/assets-application/AssetsApplication'
import LeaveType from '../pages/leave/leave-type/LeaveType'
import LeaveApplication from '../pages/leave/leave-application/LeaveApplication'
import HolidayType from '../pages/holiday/holiday-type/HolidayType'
import HolidayList from '../pages/holiday/holiday-list/HolidayList'
import CompanyDocument from '../pages/company-info/company-documents/CompanyDocument'
import CompanyPolicy from '../pages/company-info/company-policy/CompanyPolicy'
import EmployeeCreation from '../pages/user-manage/user-info/EmployeeCreation'
import HomePage from '../pages/HomePage'

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Dashboards*/}
        <Route
          exact
          path={`/employee`}
          render={() => (
            <UserContextProvider>
              <EmployeeInfo />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/employee/employee_creation`}
          render={() => (
            <UserContextProvider>
              <EmployeeCreation />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/user-manage/employee`}
          render={() => (
            <UserContextProvider>
              <Employee />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/assets/assets-type`}
          render={() => (
            <UserContextProvider>
              <AssetsType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/assets/assets-application`}
          render={() => (
            <UserContextProvider>
              <AssetApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/leave/leave-type`}
          render={() => (
            <UserContextProvider>
              <LeaveType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/leave/leave-application`}
          render={() => (
            <UserContextProvider>
              <LeaveApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/holiday/holiday-type`}
          render={() => (
            <UserContextProvider>
              <HolidayType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/holiday/holiday-list`}
          render={() => (
            <UserContextProvider>
              <HolidayList />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/company-info/company-document`}
          render={() => (
            <UserContextProvider>
              <CompanyDocument />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/company-info/company-policy`}
          render={() => (
            <UserContextProvider>
              <CompanyPolicy />
            </UserContextProvider>
          )}
        ></Route>
        <Route exact path={`/`} component={HomePage}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  )
}

export default Pages
