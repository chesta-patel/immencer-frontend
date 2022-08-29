import React, { useState } from 'react'
import Head from '../layout/head/Head'
import Content from '../layout/content/Content'
import {
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockBetween,
} from '../components/Component'

const Homepage = () => {
  const [sm, updateSm] = useState(false)
  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Sales Overview
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to DashLite Dashboard Template</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
    </React.Fragment>
  )
}
export default Homepage
