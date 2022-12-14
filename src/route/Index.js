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
import EmployeeDetail from '../pages/user-manage/user-info/employee-detail/EmployeeDetail'
import ApplyLeave from '../pages/leave/leave-application/ApplyLeave'
import CreateAssetsType from '../pages/assets/asset-type/CreateAssetsType'
import CreateAssetsApplication from './../pages/assets/assets-application/CreateAssetsApplication'
// import CreateHoliday from '../pages/holiday/holiday-list/CreateHoliday'
import CreateHolidayType from '../pages/holiday/holiday-type/CreateHolidayType'
import CreateCompanyDocument from '../pages/company-info/company-documents/CreateCompanyDocument'
import CreateCompanyPolicy from '../pages/company-info/company-policy/CreateCompanyPolicy'
import CreateLeaveType from '../pages/leave/leave-type/CreateLeaveType'
import CreateHoliday from '../pages/holiday/holiday-list/CreateHoliday'
import GrantLeave from '../pages/leave/leave-application/grant-leave/GrantLeave'
import GrantLeaveInfo from '../pages/leave/leave-application/grant-leave/GrantLeaveInfo'
import LevaeView from '../pages/leave/leave-application/LeaveView'
import LeaveView from '../pages/leave/leave-application/LeaveView'
import GrantLeaveView from '../pages/leave/leave-application/grant-leave/GrantLeaveView'

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
          path={`/employee/employee-creation`}
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
          path={`/employee/employee-detail/:id`}
          render={() => <EmployeeDetail />}
        ></Route>
        <Route
          exact
          path={`/employee/employee-update`}
          render={() => (
            <UserContextProvider>
              <EmployeeCreation />
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
          path={`/assets/create-assetsType`}
          render={() => (
            <UserContextProvider>
              <CreateAssetsType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/assets`}
          render={() => (
            <UserContextProvider>
              <AssetApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/assets/create`}
          render={() => (
            <UserContextProvider>
              <CreateAssetsApplication />
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
          path={`/leave/leave-type/create`}
          render={() => (
            <UserContextProvider>
              <CreateLeaveType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/leave`}
          render={() => (
            <UserContextProvider>
              <LeaveApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/leave/apply-leave`}
          render={() => (
            <UserContextProvider>
              <ApplyLeave />
            </UserContextProvider>
          )}
        ></Route>

        <Route
          exact
          path={`/grantLeaveInfo`}
          render={() => (
            <UserContextProvider>
              <GrantLeaveInfo />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/grantLeaveInfo/grant-leave`}
          render={() => (
            <UserContextProvider>
              <GrantLeave />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/grantLeaveInfo/update-grantLeave/:id`}
          render={() => (
            <UserContextProvider>
              <GrantLeave />
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
          path={`/holiday`}
          render={() => (
            <UserContextProvider>
              <HolidayList />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/holiday/create-holiday`}
          render={() => (
            <UserContextProvider>
              <CreateHoliday />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/holiday/create-holiday-type`}
          render={() => (
            <UserContextProvider>
              <CreateHolidayType />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/company-document`}
          render={() => (
            <UserContextProvider>
              <CompanyDocument />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/assets-application`}
          render={() => (
            <UserContextProvider>
              <AssetApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/assets-application/create`}
          render={() => (
            <UserContextProvider>
              <CreateAssetsApplication />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/company-document/create`}
          render={() => (
            <UserContextProvider>
              <CreateCompanyDocument />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/company-policy`}
          render={() => (
            <UserContextProvider>
              <CompanyPolicy />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/company-policy/create`}
          render={() => (
            <UserContextProvider>
              <CreateCompanyPolicy />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/leave/leave-view`}
          render={() => (
            <UserContextProvider>
              <LeaveView />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/grantLeaveInfo/grantLeave-view:id`}
          render={() => (
            <UserContextProvider>
              <GrantLeaveView />
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
