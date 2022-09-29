import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/slices/Auth'
import dropdown from '../services/slices/Master'
import getEmp from '../services/slices/GetEmployeeSlice'
import setEmployee from '../services/slices/SaveEmpSlice'
import getCompanyDocument from './../services/slices/CompanyDocumentSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    dropdown: dropdown,
    getEmp: getEmp,
    setEmployee: setEmployee,
    companyDocument: getCompanyDocument,
  },
})
