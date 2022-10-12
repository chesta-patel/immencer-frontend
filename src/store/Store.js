import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/slices/Auth'
import dropdown from '../services/slices/Master'
import getEmp from '../services/slices/GetEmployeeSlice'
import getCompanyDocument from './../services/slices/CompanyDocumentSlice'
import getCompanyPolicy from './../services/slices/CompanyPolicySlice'
import CreateNewEmpData from '../services/slices/CreateNewEmpData'
import CreateEmp from '../services/slices/CreateEmployeeSlice'
import CreateCompanyDoc from '../services/slices/CreateCompanyDocSlice'
import CreatePolicy from '../services/slices/CreateCompanyPolicySlice'
import DeleteCompanyDoc from './../services/slices/DeleteCompanyDocSlice'
import getEmpDetail from '../services/slices/EmployeeDetailSlice'
import empUpdate from '../services/slices/EmployeeEditSlice'
import getHolidayList from './../services/slices/HolidayListSlice'
import DeleteHolidayList from './../services/slices/DeleteHolidayListSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    dropdown: dropdown,
    getEmp: getEmp,
    companyDocument: getCompanyDocument,
    holidayList: getHolidayList,
    DeleteHolidayList: DeleteHolidayList,
    companyPolicy: getCompanyPolicy,
    getEmpDetail: getEmpDetail,
    createNewEmpData: CreateNewEmpData,
    CreateEmp: CreateEmp,
    createCompanyDoc: CreateCompanyDoc,
    createPolicy: CreatePolicy,
    deleteCompanyDoc: DeleteCompanyDoc,
    empUpdate: empUpdate,
  },
})
