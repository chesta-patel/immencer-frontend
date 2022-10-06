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

export default configureStore({
  reducer: {
    auth: authReducer,
    dropdown: dropdown,
    getEmp: getEmp,
    companyDocument: getCompanyDocument,
    companyPolicy: getCompanyPolicy,
    getEmpDetail: getEmpDetail,
    createNewEmpData: CreateNewEmpData,
    CreateEmp: CreateEmp,
    createCompanyDoc: CreateCompanyDoc,
    createPolicy: CreatePolicy,
    deleteCompanyDoc: DeleteCompanyDoc,
  },
})
