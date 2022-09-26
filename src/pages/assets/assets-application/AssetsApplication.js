import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import { assetAppForm, assetAppTable } from './AssetsAppJson'
import Pageheader from '../../PageHeader'
import Pagetable from '../../PageTable'
import { assetsAppString } from '../../Strings'

const AssetApplication = ({ ...props }) => {
  const [roleForm] = useState(assetAppForm)
  const [roleTable] = useState(assetAppTable)
  return (
    <React.Fragment>
      <Head title="Assets Appliaction" />
      <Content>
        <Pageheader json={roleForm} string={assetsAppString} />
        <Pagetable json={roleTable} />
      </Content>
    </React.Fragment>
  )
}

export default AssetApplication
