import React, { useState, useRef } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  RSelect,
} from "../../components/Component";
import { useForm } from "react-hook-form";
import { Steps, Step } from "react-step-builder";
import { Row, Col, FormGroup, Button } from "reactstrap";
import { isactive, isdelete, userbloodgroup, usergender, userrole } from "./UserData";

const PersonalForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender:"",
    birthday: "",
    city: "",
    department:"",
    role_id:"",
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { errors, handleSubmit, register } = useForm();

  const submitForm = (data) => {
    props.next();
  };

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-4">
        <Col md="6">
          <FormGroup>
            <label className="form-label" htmlFor="first-name">
              First Name
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Enter your firstname"
                ref={register({ required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.firstName}
              />
              {errors.firstName && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <label className="form-label" htmlFor="last-name">
              Last Name
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
                name="lastName"
                placeholder="Enter your lastname"
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.lastName}
              />
              {errors.lastName && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Gender</label>
                <div className="form-control-wrap">
                    <RSelect
                        options={usergender}
                        defaultValue={{ value: "active", label: "Select Status" }}
                        onChange={(e) => setFormData({ ...formData, status: e.value })}
                        ref={register({ required: "Please Select" })}
                    />
                    {errors.gender && <span className="invalid">{errors.gender.message}</span>}
                </div>
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">BirthDay</label>
                <div className="form-control-wrap">
                <input
                    type="date"
                    id="birth_day"
                    className="form-control"
                    ref={register({ required: true })}
                    name="birthday"
                    onChange={(e) => onInputChange(e)}
                    defaultValue={formData.birthday}
                />
                    {errors.birthday && <span className="invalid">This field is required</span>}
                </div>
            </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <label className="form-label" htmlFor="phone-no">
              Department
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                className="form-control"
                ref={register({ required: true })}
                name="department"
                placeholder="Enter your department"
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.department}
              />
              {errors.department && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Role</label>
                <div className="form-control-wrap">
                    <RSelect
                        options={userrole}
                        defaultValue={{ value: "active", label: "Select Status" }}
                        onChange={(e) => setFormData({ ...formData, status: e.value })}
                        ref={register({ required: "Please Select" })}
                    />
                    {errors.role_id && <span className="invalid">{errors.role_id.message}</span>}
                </div>
            </FormGroup>
        </Col>
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
};

const Personaldetail = (props) => {
  const [formData, setFormData] = useState({
    c_add: "",
    p_add: "",
    education: "",
    country:"",
    height:"",
    blood_group:"",
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { errors, handleSubmit, register, watch } = useForm();

  const submitForm = (data) => {
    props.next();
  };

  const password = useRef();
  password.current = watch("password");

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-4">
        <Col md="6">
            <FormGroup>
                <label className="form-label">Current Address</label>
                <input
                    className="form-control"
                    type="text"
                    name="type"
                    defaultValue={formData.c_add}
                    placeholder="Enter current add"
                    ref={register({ required: "This field is required" })}
                />
                {errors.c_add && <span className="invalid">{errors.c_add.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Permanent Address</label>
                <input
                    className="form-control"
                    type="text"
                    name="type"
                    defaultValue={formData.p_add}
                    placeholder="Enter permenent add"
                    ref={register({ required: "This field is required" })}
                />
                {errors.p_add && <span className="invalid">{errors.p_add.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Education</label>
                <input
                    className="form-control"
                    type="text"
                    name="type"
                    defaultValue={formData.education}
                    placeholder="Enter education detail"
                    ref={register({ required: "This field is required" })}
                />
                {errors.education && <span className="invalid">{errors.education.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Country</label>
                <div className="form-control-wrap">
                    <RSelect
                        defaultValue={formData.country}
                        onChange={(e) => onInputChange(e)}>
                            <option></option>
                        </RSelect>
                    {errors.country && <span className="invalid">This field is required</span>}
                </div>
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Height</label>
                <input
                    className="form-control"
                    type="number"
                    name="type"
                    defaultValue={formData.height}
                    placeholder="Enter height"
                    ref={register({ required: "This field is required" })}
                />
                {errors.height && <span className="invalid">{errors.height.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Status</label>
                <div className="form-control-wrap">
                    <RSelect
                        options={userbloodgroup}
                        defaultValue={{ value: "active", label: "Select Status" }}
                        onChange={(e) => setFormData({ ...formData, status: e.value })}
                        ref={register({ required: "Please Select Status" })}
                    />
                    {errors.blood_group && <span className="invalid">{errors.blood_group.message}</span>}
                </div>
            </FormGroup>
        </Col>
        <Col md="12">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              ref={register({ required: true })}
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
              checked={formData.terms}
              name="terms"
              id="fw-policy"
            />
            {errors.terms && <span className="invalid">This field is required</span>}
            <label className="custom-control-label" htmlFor="fw-policy">
              I agreed Terms and policy
            </label>
          </div>
        </Col>
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
};

const Numberemail = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    personalemail: "",
    mobile: "",
    parent_mobile:"",
    whatsapp_number:"",
    adharcard:"",
    pancard:""
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { errors, handleSubmit, register } = useForm();

  const submitForm = (data) => {
    props.next();
  };

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-3">
      <Col md="6">
            <FormGroup>
                <label className="form-label">Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="type"
                    defaultValue={formData.email}
                    placeholder="Enter Email"
                    ref={register({ required: "This field is required" })}
                />
                {errors.email && <span className="invalid">{errors.email.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Personal Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="type"
                    defaultValue={formData.personalemail}     
                    placeholder="Enter personal Email"
                    ref={register({ required: "This field is required" })}
                />
                {errors.personalemail && <span className="invalid">{errors.personalemail.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Mobile</label>
                <input
                    className="form-control"
                    type="number"
                    name="type"
                    defaultValue={formData.mobile}
                    placeholder="Enter mobile"
                    ref={register({ required: "This field is required" })}
                />
                {errors.mobile && <span className="invalid">{errors.mobile.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Parent Mobile</label>
                <input
                    className="form-control"
                    type="number"
                    name="type"
                    defaultValue={formData.parent_mobile}
                    placeholder="Enter parent mobile"
                    ref={register({ required: "This field is required" })}
                />
                {errors.parent_mobile && <span className="invalid">{errors.parent_mobile.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Whatsapp Number</label>
                <input
                    className="form-control"
                    type="number"
                    name="type"
                    defaultValue={formData.whatsapp_number}
                    placeholder="Enter whatspp number"
                    ref={register({ required: "This field is required" })}
                />
                {errors.whatsapp_number && <span className="invalid">{errors.whatsapp_number.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Adhar Card Number</label>
                <input
                    className="form-control"
                    type="number"
                    name="type"
                    defaultValue={formData.adharcard}
                    placeholder="Enter adharcard number"
                    ref={register({ required: "This field is required" })}
                />
                {errors.adharcard && <span className="invalid">{errors.adharcard.message}</span>}
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <label className="form-label">Pan Card</label>
                <input
                    className="form-control"
                    type="text"
                    name="type"
                    defaultValue={formData.mobile}
                    placeholder="Enter pancard number"
                    ref={register({ required: "This field is required" })}
                />
                {errors.pancard && <span className="invalid">{errors.pancard.message}</span>}
            </FormGroup>
        </Col>
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
};

const Header = (props) => {
  return (
    <div className="steps clearfix">
      <ul>
        <li className={props.current >= 1 ? "first done" : "first"}>
          <a href="#wizard-01-h-0" onClick={(ev) => ev.preventDefault()}>
            <span className="number">01</span> <p>User Detail</p>
          </a>
        </li>
        <li className={props.current >= 2 ? "done" : ""}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <span className="number">02</span> <p>Personal Detail's</p>
          </a>
        </li>
        <li className={props.current >= 3 ? "done" : ""}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">03</span> <p>Number & Email</p>
          </a>
        </li>
        <li className={props.current === 4 ? "done" : ""}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">04</span> <p>Office Detail</p>
          </a>
        </li>
        <li className={props.current === 5 ? "last done" : "last"}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">05</span> <p>Others</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

const Officedetail = (props) => {
    const [formData, setFormData] = useState({
      registerat: "",
      lastlogin: "",
      intro: "",
      avatar:"",
      profile:"",
    });
  
    const onInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const { errors, handleSubmit, register } = useForm();
  
    const submitForm = (data) => {
      props.next();
    };
  
    return (
      <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
        <Row className="gy-3">
        <Col md="6">
              <FormGroup>
                  <label className="form-label">Registered At</label>
                  <input
                      className="form-control"
                      type="text"
                      name="type"
                      defaultValue={formData.registerat}
                      ref={register({ required: "This field is required" })}
                  />
                  {errors.registerat && <span className="invalid">{errors.registerat.message}</span>}
              </FormGroup>
          </Col>
          <Col md="6">
              <FormGroup>
                  <label className="form-label">Last Login</label>
                  <input
                      className="form-control"
                      type="text"
                      name="type"
                      defaultValue={formData.lastlogin}     
                      ref={register({ required: "This field is required" })}
                  />
                  {errors.lastlogin && <span className="invalid">{errors.lastlogin.message}</span>}
              </FormGroup>
          </Col>
          <Col md="6">
              <FormGroup>
                  <label className="form-label">Intro</label>
                  <input
                      className="form-control"
                      type="text"
                      name="type"
                      defaultValue={formData.intro}
                      placeholder="Enter your brief introduction"
                      ref={register({ required: "This field is required" })}
                  />
                  {errors.intro && <span className="invalid">{errors.intro.message}</span>}
              </FormGroup>
          </Col>
          <Col md="6">
              <FormGroup>
                  <label className="form-label">Profile</label>
                  <input
                      className="form-control"
                      type="text"
                      name="type"
                      defaultValue={formData.profile}
                      ref={register({ required: "This field is required" })}
                  />
                  {errors.profile && <span className="invalid">{errors.profile.message}</span>}
              </FormGroup>
          </Col>
        </Row>
        <div className="actions clearfix">
          <ul>
            <li>
              <Button color="primary" type="submit">
                Next
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={props.prev}>
                Previous
              </Button>
            </li>
          </ul>
        </div>
      </form>
    );
  };
  const Others=(props)=>{
    const [formData, setFormData] = useState({
        swifttime: "",
        isactive: "",
        isdelete: "",
      });
    
      const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const { errors, handleSubmit, register } = useForm();
    
      const submitForm = (data) => {
        props.next();
      };
    
      return (
        <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
          <Row className="gy-3">
          <Col md="6">
                <FormGroup>
                    <label className="form-label">Swift Time</label>
                    <input
                        className="form-control"
                        type="text"
                        name="type"
                        defaultValue={formData.swifttime}
                        ref={register({ required: "This field is required" })}
                    />
                    {errors.swifttime && <span className="invalid">{errors.swifttime.message}</span>}
                </FormGroup>
            </Col>
            <Col md="6">
                    <FormGroup>
                      <label className="form-label">IsActive</label>
                      <div className="form-control-wrap">
                        <RSelect
                          options={isactive}
                          defaultValue={{ value: "active", label: "Select" }}
                          onChange={(e) => setFormData({ ...formData, status: e.value })}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">IsDeleted</label>
                      <div className="form-control-wrap">
                        <RSelect
                          options={isdelete}
                          defaultValue={{ value: "delete", label: "Select" }}
                          onChange={(e) => setFormData({ ...formData, status: e.value })}
                        />
                      </div>
                    </FormGroup>
                  </Col>
          </Row>
          <div className="actions clearfix">
            <ul>
              <li>
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </li>
              <li>
                <Button color="primary" onClick={props.prev}>
                  Previous
                </Button>
              </li>
            </ul>
          </div>
        </form>
      );
    
  }

  const Success = (props) => {
    return (
      <div className="d-flex justify-content-center align-items-center p-3">
        <BlockTitle tag="h6" className="text-center">
          Thank you for submitting form
        </BlockTitle>
      </div>
    );
  };
const config = {
  before: Header,
};

function Stepsform() {
  return (
    <Block size="lg">
        <div className="nk-wizard nk-wizard-simple is-vertical is-alter wizard clearfix">
              <Steps config={config}>
                <Step component={PersonalForm} />
                <Step component={Personaldetail} />
                <Step component={Numberemail} />
                <Step component={Officedetail} />
                <Step component={Others}/>
                <Step component={Success}/>
              </Steps>
            </div>
    </Block>
  )
}

export default Stepsform