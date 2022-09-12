import React from 'react'
import { useState } from 'react'
// import { Cropper } from 'react-cropper'
import Dropzone from 'react-dropzone'
import { Button, Col, Modal, ModalBody } from 'reactstrap'
import commanString from '../../../../utils/CommanString'

function AvatarCropper() {
  const [files, setFiles] = useState([])
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  })

  const onFormCancel = (e) => {
    e.preventDefault()
    setModal({ edit: false, add: false })
  }
  const handleDropChange = (acceptedFiles) => {
    setModal({ add: true })

    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }
  return (
    <React.Fragment>
      <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <label className="form-label">{commanString.profile_picture}</label>
            <div {...getRootProps()} className="drop-zone">
              <input {...getInputProps()} />
              {files.length === 0 && (
                <div className="dz-message">
                  <Button color="primary">{commanString.select}</Button>
                </div>
              )}
              {files.map((file) => (
                <div
                  key={file.name}
                  className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                >
                  <div className="dz-image">
                    <img src={file.preview} alt="preview" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </Dropzone>
      <Modal
        isOpen={modal.add}
        toggle={() => setModal({ add: false })}
        className="modal-dialog-centered"
        size="sm"
      >
        <ModalBody>
          <div></div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default AvatarCropper
