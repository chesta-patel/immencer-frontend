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
import { useLocation } from 'react-router'

function PageHeader(props) {
  const location = useLocation()
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
        // console.log('first', refactorModalData)
        setFdata(refactorModalData)
      } else {
        let refactorModalData = {
          title: props?.modal?.data?.title,
          description: props?.modal?.data?.description,
          date: moment(props?.modal?.data?.date, 'DD/MM/YYYY').format(
            'YYYY-MM-DD'
          ),
          type: props?.modal?.data?.type,
        }
        setFdata(refactorModalData)
      }
    }
  }, [props?.modal?.data])

  useEffect(() => {
    if (
      location.pathname === '/assets-application/create' &&
      props?.modal?.data
    ) {
      let refactorModalData = {
        type: props?.modal?.data?.type,
        name: props?.modal?.data?.name,
        code: props?.modal?.data?.code,
        serialNumber: props?.modal?.data?.serialNumber,
        description: props?.modal?.data?.description,
        status: props?.modal?.data?.status,
        assignee: props?.modal?.data?.assignee,
        assignDate: props?.modal?.data?.assignDate,
        notes: props?.modal?.data?.notes,
      }

      setFdata(refactorModalData)
    }
  }, [location])

  const onFormCancel = () => {
    props.setModal({
      edit: false,
      add: false,
      data: '',
    })
  }

  useEffect(() => {
    if (Object.keys(Fdata).length === 0 && !props?.modal?.data) {
      props.json.forEach((formFields) => {
        initialState[`${formFields.key_name}`] = ''
      })
      setFdata({ ...initialState })
    }
  }, [props, Fdata])

  // submit function to add a new item
  const onFormSubmit = async (e) => {
    setValidate(true)
    e.preventDefault()

    const tempRequiredFromDataFilter = props?.json
      ?.map((info) => {
        const FdataKeys = Object.keys(Fdata)
        const currentKey = FdataKeys?.find((key) => key === info?.key_name)
        const currentKeyData = currentKey ? Fdata[currentKey] : ''
        const data = { [`${currentKey}`]: currentKeyData }
        return info?.required ? data : null
      })
      ?.filter((info) => info !== null)

    const tempRequiredFromDataObject = Object.assign(
      {},
      ...tempRequiredFromDataFilter?.map((item) => {
        const itemKey = Object.keys(item)

        return { [`${itemKey?.[0]}`]: item[`${itemKey?.[0]}`] }
      })
    )

    const isEmpty = checkIsEmptyObjectKey(tempRequiredFromDataObject, 'every')

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
                  label:
                    data?.firstName || data?.lastName
                      ? `${data?.firstName} ${data?.lastName}`
                      : data?.holiday_type
                      ? data?.holiday_type
                      : data.name,
                }
                return dataObj
              })

              let selectOptionValueData = formFields?.option
                ?.map((data) => {
                  let checkId
                  switch (location.pathname) {
                    case '/holiday/create-holiday':
                      let checkHolidayType = data.id == props?.modal?.data?.type
                      checkId = checkHolidayType ? data.id : null
                      break
                    case '/assets-application/create':
                      if (formFields?.key_name === 'type') {
                        let check = data.id === props?.modal?.data?.type
                        checkId = check ? data.id : null
                      } else if (formFields?.key_name === 'status') {
                        let check = data.id === props?.modal?.data?.status
                        checkId = check ? data.id : null
                      } else if (formFields?.key_name === 'assignee') {
                        let check = data.id === props?.modal?.data?.assignee
                        checkId = check ? data.id : null
                      }
                      break

                    default:
                      checkId = null
                      break
                  }

                  let defaultSelect
                  if (checkId) {
                    defaultSelect = selectOptionData?.find(
                      (ope) => ope.value == checkId
                    )
                  }
                  return defaultSelect
                })
                ?.filter((data) => data !== undefined)
              if (
                (formFields.type !== 'text') &
                (formFields.type !== 'number') &
                (formFields.type !== 'date') &
                (formFields.type !== 'file') &
                (formFields.type !== 'textarea')
              ) {
                return (
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">
                        {formFields.label_name}
                        {formFields.required && (
                          <span className="error-message">*</span>
                        )}
                      </label>
                      <RSelect
                        options={
                          selectOptionData?.length > 0 ? selectOptionData : []
                        }
                        defaultValue={{
                          value: selectOptionValueData?.[0]?.value,
                          label: selectOptionValueData?.[0]?.label,
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
                          {formFields.required && (
                            <span className="error-message">*</span>
                          )}
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
                          {formFields.required && (
                            <span className="error-message">*</span>
                          )}
                        </label>
                        <input
                          type={formFields.type}
                          className="form-control"
                          value={Fdata[`${formFields.key_name}`]}
                          onChange={(e) => {
                            const oldState = cloneDeep(Fdata)
                            oldState[`${formFields.key_name}`] = e.target.value
                            setFdata({ ...oldState })
                            // setValidate(true)
                          }}
                        />
                        {/* <label
                              className="custom-file-label"
                              htmlFor="customMultipleFiles"
                            > */}
                        {/* {Fdata?.attachment?.name
                                ? Fdata?.attachment?.name
                                : formFields.placeholder} */}
                        {/* </label> */}
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
                }
              }
            })}
            <Col size="4" className="col-lg-12">
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
    </React.Fragment>
  )
}

export default PageHeader
