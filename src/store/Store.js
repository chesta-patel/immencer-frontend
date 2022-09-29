import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/slices/Auth'
import dropdown from '../services/slices/Master'
import getEmp from '../services/slices/GetEmployeeSlice'
import getCompanyDocument from './../services/slices/CompanyDocumentSlice'
import CreateNewEmpData from '../services/slices/CreateNewEmpData'
export default configureStore({
  reducer: {
    auth: authReducer,
    dropdown: dropdown,
    getEmp: getEmp,
    companyDocument: getCompanyDocument,
    createNewEmpData: CreateNewEmpData,
  },
})
