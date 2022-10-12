import React, { useEffect, useState } from 'react'
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
import { cloneDeep } from 'lodash'
import './pageheader.scss'
import String from '../utils/String'
import { checkIsEmptyObjectKey } from '../utils/Helpers'
import moment from 'moment'

function PageHeader(props) {
  const initialState = {}
  props.json.forEach((formFields) => {
    initialState[`${formFields.key_name}`] = ''
  })
  const [sm, updateSm] = useState(false)
  const { handleSubmit } = useForm()
  const [validate, setValidate] = useState(false)
  const [Fdata, setFdata] = useState({ ...initialState })
  const [strings, setStrings] = useState('')
  useEffect(() => {
    if (props?.modal?.data) {
      if (props?.modal?.data?.attachment) {
        let refactorModalData = {
          title: props?.modal?.data?.title,
          description: props?.modal?.data?.description,
          seqNo: props?.modal?.data?.seqNo,
          attachment: {
            name: props?.modal?.data?.attachment?.split('/')[
              props?.modal?.data?.attachment?.split('/')?.length - 1
            ],
            path: props?.modal?.data?.attachment,
          },
        }
        setFdata(refactorModalData)
      } else {
        let updateData = moment(props?.modal?.data?.date).format('L')
        let refactorModalData = {
          title: props?.modal?.data?.title,
          description: props?.modal?.data?.description,
          date: moment(props?.modal?.data?.date).format('YYYY-DD-MM'),
          // date: moment(props?.modal?.data?.date).format('L'),
          type: props?.modal?.data?.type,
        }
        setFdata(refactorModalData)
      }
    }
  }, [props?.modal?.data])

  const onFormCancel = () => {
    props.setModal({
      edit: false,
      add: false,
      data: '',
    })
  }

  // submit function to add a new item
  const onFormSubmit = async (e) => {
    // setValidate(true)
    e.preventDefault()

    const isEmpty = checkIsEmptyObjectKey(Fdata, 'every')

    let formData = { ...Fdata }

    if (formData.attachment) {
      if (!formData?.attachment?.size) {
        formData = { ...Fdata, attachment: Fdata?.attachment?.path }
      } else {
        formData = { ...Fdata }
      }
    }

    if (!isEmpty) {
      if (props.modal.edit) {
        props.updateFormSubmit(formData, props.modal?.data?.id)
      } else {
        props.callFormSubmit(formData)
      }
    }
  }

  useEffect(() => {
    var string = props.string.find(function (element) {
      return element
    })
    setStrings(string)
  }, [props.string])

  useEffect(() => {
    if (props.apiCallStatus.status === 'success') {
      props.setModal({
        edit: false,
        add: false,
        data: '',
      })
      setValidate(false)
      setFdata({ ...initialState })
      props.setApiCallStatus({
        status: '',
        message: '',
      })
      props.setModal({
        edit: false,
        add: false,
        data: '',
      })
    }
  }, [props])

  return (
    <React.Fragment>
      <BlockHead size="sm">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h3" page>
              {strings.head_title}
            </BlockTitle>
            <BlockDes className="text-soft"></BlockDes>
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
                      {' '}
                      <Icon name="download-cloud"></Icon>
                      <span>{String.export}</span>
                    </a>
                  </li>
                  <li className="nk-block-tools-opt">
                    <Button
                      color="primary"
                      className="btn-icon"
                      onClick={() => props.setModal({ add: true })}
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
        isOpen={props.modal.add || props.modal.edit}
        toggle={() =>
          props.setModal({
            edit: false,
            add: false,
            data: '',
          })
        }
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
          <div className="p-3">
            <h5 className="title">{strings.form_title}</h5>
            <div className="mt-2">
              <Form
                className="row gy-3"
                onSubmit={(e) => handleSubmit(onFormSubmit(e))}
              >
                {props.json.map((formFields, id) => {
                  let selectOptionData = formFields?.option?.map((data) => {
                    let dataObj = {
                      value: data?.id,
                      label: data?.holiday_type,
                    }
                    return dataObj
                  })

                  let selectOptionValueData = formFields?.option?.filter(
                    (data) => data.id == props?.modal?.data?.type
                  )

                  if (
                    (formFields.type !== 'text') &
                    (formFields.type !== 'number') &
                    (formFields.type !== 'date') &
                    (formFields.type !== 'file')
                  ) {
                    return (
                      <Col md="6">
                        <FormGroup>
                          <label className="form-label">
                            {formFields.label_name}
                          </label>
                          <RSelect
                            options={
                              selectOptionData?.length > 0
                                ? selectOptionData
                                : []
                            }
                            defaultValue={{
                              value: selectOptionValueData?.[0]?.id,
                              label: selectOptionValueData?.[0]?.holiday_type,
                            }}
                            onChange={(e) => {
                              const oldState = cloneDeep(Fdata)
                              oldState[`${formFields.key_name}`] = e.value
                              setFdata({ ...oldState })
                            }}
                          />
                          {formFields.required &&
                            !Fdata[`${formFields.key_name}`] &&
                            validate && (
                              <p className="file-upload-error">
                                {formFields.required}
                              </p>
                            )}
                        </FormGroup>
                      </Col>
                    )
                  } else {
                    if (formFields.type === 'file') {
                      return (
                        <Col md="6">
                          <div className="form-group">
                            <label className="form-label">
                              {formFields.label_name}
                            </label>
                            <div className="form-control-wrap">
                              <div className="custom-file">
                                <input
                                  type={formFields.type}
                                  className="custom-file-input"
                                  id="customMultipleFiles"
                                  onChange={(e) => {
                                    const oldState = cloneDeep(Fdata)
                                    oldState[`${formFields.key_name}`] =
                                      e.target.files[0]
                                    setFdata({ ...oldState })
                                    // setValidate(true)
                                  }}
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="customMultipleFiles"
                                >
                                  {Fdata?.attachment?.name
                                    ? Fdata?.attachment?.name
                                    : formFields.placeholder}
                                </label>
                              </div>
                            </div>
                            {formFields.required &&
                              !Fdata[`${formFields.key_name}`] &&
                              validate && (
                                <p className="file-upload-error">
                                  {formFields.required}
                                </p>
                              )}
                          </div>
                        </Col>
                      )
                    } else {
                      return (
                        <Col md="6">
                          <FormGroup>
                            <label className="form-label">
                              {formFields.label_name}
                            </label>
                            <input
                              className="form-control"
                              type={formFields.type}
                              name={formFields.key_name}
                              placeholder={formFields.placeholder}
                              value={Fdata[`${formFields.key_name}`]}
                              onChange={(e) => {
                                const oldState = cloneDeep(Fdata)
                                oldState[`${formFields.key_name}`] =
                                  e.target.value
                                setFdata({ ...oldState })
                                // setValidate(true)
                              }}
                            />
                            {formFields.required &&
                              !Fdata[`${formFields.key_name}`] &&
                              validate && (
                                <p className="invalid">{formFields.required}</p>
                              )}
                          </FormGroup>
                        </Col>
                      )
                    }
                  }
                })}
                <Col size="4">
                  <Button
                    color="primary"
                    type="submit"
                    className="header_submit_bn"
                  >
                    {String.submit}
                  </Button>
                </Col>
              </Form>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default PageHeader
