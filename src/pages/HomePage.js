import React, { useEffect } from 'react'
import Head from '../layout/head/Head'
import Content from '../layout/content/Content'
import {
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockBetween,
} from '../components/Component'
import String from '../utils/String'
import { tokenValidation } from '../utils/Utils'
import jwtDecode from 'jwt-decode'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { currentEmployee } from '../services/thunk/CurrentEmpPermissionThunk'
import { useSelector } from 'react-redux'

const HomePage = () => {
  useEffect(() => {
    tokenValidation()
  })

  return (
    <React.Fragment>
      <Head title="Home"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockDes className="text-soft">
                <p>{String.welcome_to_immence} </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
    </React.Fragment>
  )
}

export default HomePage
