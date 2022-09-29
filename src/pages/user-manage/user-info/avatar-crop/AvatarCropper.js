import React, { useState } from 'react'
import ImgCrop from 'antd-img-crop'
import { Upload } from 'antd'
import 'antd/dist/antd.min.css'

const getSrcFromFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsDataURL(file.originFileObj)
    reader.onload = () => resolve(reader.result)
  })
}
function AvatarCropper({ fileList, setFileList }) {
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    console.log(fileList)
  }
  const onPreview = async (file) => {
    const src = file.url || (await getSrcFromFile(file))
    const imgWindow = window.open(src)

    if (imgWindow) {
      const image = new Image()
      image.src = src
      imgWindow.document.write(image.outerHTML)
    } else {
      window.location.href = src
    }
  }
  return (
    <ImgCrop grid rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

export default AvatarCropper
