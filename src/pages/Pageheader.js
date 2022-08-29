import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Col, Form, FormGroup, Modal, ModalBody } from 'reactstrap'
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  RSelect,
} from '../components/Component'
import Head from '../layout/head/Head'
import { cloneDeep } from 'lodash'
import strings from './Strings'

function Pageheader(props) {
  const initialState = {}
  props.json.forEach((formFields) => {
    initialState[`${formFields.name}`] = ''
  })
  const [sm, updateSm] = useState(false)
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  })
  const { handleSubmit } = useForm()
  const [validate, setValidate] = useState(false)
  const [Fdata, setFdata] = useState({ ...initialState })
  const [string, setstring] = useState()
  const onFormCancel = () => {
    setModal({ edit: false, add: false })
    resetForm()
  }
  // function to reset the form
  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      type: '',
      active: '',
      content: '',
      isActive: 'Active',
      isDelete: 'No',
    })
  }
  const [setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    type: '',
    active: '',
    content: '',
    isActive: 'Active',
    isDelete: 'No',
  })

  // submit function to add a new item
  const onFormSubmit = (e) => {
    resetForm()
    setValidate(true)
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <Head title="Role Page" />
      <BlockHead size="sm">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h3" page>
              User Role
            </BlockTitle>
            <BlockDes className="text-soft">
              <p>You have total 2,595 users.</p>
            </BlockDes>
          </BlockHeadContent>
          <BlockHeadContent>
            <div className="toggle-wrap nk-block-tools-toggle">
              <Button
                className={`btn-icon btn-trigger toggle-expand mr-n1 ${
                  sm ? 'active' : ''
                }`}
                onClick={() => updateSm(!sm)}
              >
                <Icon name="menu-alt-r"></Icon>
              </Button>
              <div
                className="toggle-expand-content"
                style={{ display: sm ? 'block' : 'none' }}
              >
                <ul className="nk-block-tools g-3">
                  <li>
                    <a
                      href="#export"
                      onClick={(ev) => {
                        ev.preventDefault()
                      }}
                      className="btn btn-white btn-outline-light"
                    >
                      <Icon name="download-cloud"></Icon>
                      <span>Export</span>
                    </a>
                  </li>
                  <li className="nk-block-tools-opt">
                    <Button
                      color="primary"
                      className="btn-icon"
                      onClick={() => setModal({ add: true })}
                    >
                      <Icon name="plus"></Icon>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>
      <Modal
        isOpen={modal.add}
        toggle={() => setModal({ add: false })}
        className="modal-dialog-centered"
        size="lg"
      >
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault()
              onFormCancel()
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">Add Role</h5>
            <div className="mt-4">
              <Form className="row gy-4" onSubmit={handleSubmit(onFormSubmit)}>
                {props.json.map((formFields, id) => {
                  if (
                    (formFields.type !== 'text') &
                    (formFields.type !== 'number') &
                    (formFields.type !== 'date')
                  ) {
                    return (
                      <Col md="6">
                        <FormGroup>
                          <label
                            className={formFields.label_class}
                            style={{ marginBottom: '0px' }}
                          >
                            {formFields.label_name}
                          </label>
                          <RSelect
                            options={formFields.option}
                            defaultValue={{
                              value: formFields.option?.[0]?.value,
                              label: formFields.option?.[0]?.label,
                            }}
                          />
                        </FormGroup>
                      </Col>
                    )
                  } else {
                    return (
                      <Col md="6">
                        <FormGroup>
                          <label className={formFields.label_class}>
                            {formFields.label_name}
                          </label>
                          <input
                            className={formFields.input_class}
                            type={formFields.type}
                            name={formFields.name}
                            placeholder={formFields.placeholder}
                            value={Fdata[`${formFields.name}`]}
                            onChange={(e) => {
                              const oldState = cloneDeep(Fdata)
                              oldState[`${formFields.name}`] = e.target.value
                              setFdata({ ...oldState })
                              setValidate(oldState)
                            }}
                          />
                          {formFields.required &&
                            !Fdata[`${formFields.name}`] &&
                            validate && (
                              <p className="invalid">{formFields.required}</p>
                            )}
                        </FormGroup>
                      </Col>
                    )
                  }
                })}
                <Col size="12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="md" type="submit">
                        Add Role
                      </Button>
                    </li>
                    <li>
                      <a
                        href="#cancel"
                        onClick={(ev) => {
                          ev.preventDefault()
                          onFormCancel()
                        }}
                        className="link link-light"
                      >
                        Cancel
                      </a>
                    </li>
                  </ul>
                </Col>
              </Form>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default Pageheader
