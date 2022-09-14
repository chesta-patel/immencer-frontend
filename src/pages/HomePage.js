import React from 'react'
import Head from '../layout/head/Head'
import Content from '../layout/content/Content'
import {
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockBetween,
} from '../components/Component'
import commonString from '../utils/String'

const HomePage = () => {
  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockDes className="text-soft">
                <p>{commonString.welcome_to_immence} </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
    </React.Fragment>
  )
}

export default HomePage
