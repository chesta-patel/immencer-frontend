import React, { useState } from 'react'
import Content from '../../../layout/content/Content'
import Head from '../../../layout/head/Head'
import PageHeader from '../../PageHeader'
import PageTable from '../../PageTable'
import { assetTypeForm, assetTypeTable } from './AssetTypeJson'
import { assetsTypeString } from '../../Strings'

const AssetsType = ({ ...props }) => {
  const [roleForm] = useState(assetTypeForm)
  const [roleTable] = useState(assetTypeTable)

  return (
    <React.Fragment>
      <Head title="Assets Type" />
      <Content>
        <PageHeader json={roleForm} string={assetsTypeString} />
        <PageTable json={roleTable} string={assetsTypeString} />
      </Content>
    </React.Fragment>
  )
}

export default AssetsType
