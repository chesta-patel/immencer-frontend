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

const HomePage = () => {
  useEffect(() => {
    tokenValidation()
  })
  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
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
