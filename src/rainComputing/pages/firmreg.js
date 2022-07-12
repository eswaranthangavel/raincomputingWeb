import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  FormFeedback,
  TabContent,
  TabPane,
  Button,
  Table,
  Alert,
} from "reactstrap"

import { getFirmreg } from "helpers/backend_helper"
import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

//reg users

import { post } from "helpers/api_helper"
import { GET_ALLUSER } from "helpers/url_helper"

const FirmRegistration = () => {
  // const [activeTab, setactiveTab] = useState(1)

  const [passedSteps, setPassedSteps] = useState([1])

  const [allUser, setAllUser] = useState([])
  const [selectedUser, setSelectedUser] = useState({})
  

  const user = JSON.parse(localStorage.getItem("authUser"))

  const handleFirmReg = async values => {
    const res = await getFirmreg({
      ...values,
      aflag: true,
      attorney: user.userID,
    })
    // console.log("getFirmreg : ", res);
  }

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firmname: "",
      firmaddress: "",
      llcno: "",
      category: "",
      firmid: "",
    },
    validationSchema: Yup.object({
      firmname: Yup.string().required("Please Enter Your Firm Name"),
      firmaddress: Yup.string().required("Please Enter Your Firm Address"),
      llcno: Yup.string().required("Please Enter Your LLC No"),
      category: Yup.string().required("Please Enter Your Category"),
      firmid: Yup.string().required("Please Enter Your  Firm ID"),
    }),
    onSubmit: values => {
      handleFirmReg(values)
    },
  })

  useEffect(() => {
    const payload = { userID: user.userID }
    console.log("payload", payload)

    const getAllUser = async () => {
      const res = await post(GET_ALLUSER, payload)
      const { users } = res

      if (users) {
        setAllUser(users)
        setSelectedUser(users[0])
      }
    }
    getAllUser()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>RainComputing | Rain - Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Rain" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Form
                    className="needs-validation"
                    onSubmit={e => {
                      e.preventDefault()
                      console.log("values")

                      validation.handleSubmit()
                    }}
                  >
                    {/* {user && (
                      <Alert
                        className="fw-bolder text-center"
                        color={user.success ? "success" : "danger"}
                      >
                        {user.msg}
                      </Alert>
                    )} */}
                    <h4 className="card-title mb-4">
                      {" "}
                      Firm Registration Details
                    </h4>
                    <div className="wizard clearfix">
                      <div className="steps clearfix">
                        <ul>
                          <NavItem className={classnames({})}>
                            <NavLink>
                              <span className="number">2</span> Firm
                              Registration
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                      <div className="content clearfix mt-4">
                        <div>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom06">
                                    Firm Name
                                  </Label>
                                  <Input
                                    name="firmname"
                                    type="text"
                                    className="form-control"
                                    id="validationCustom06"
                                    placeholder="Enter Your Firm Name"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.firmname || ""}
                                    invalid={
                                      validation.touched.firmname &&
                                      validation.errors.firmname
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.firmname &&
                                  validation.errors.firmname ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.firmname}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom07">
                                    Firm Address
                                  </Label>
                                  <Input
                                    name="firmaddress"
                                    type="text"
                                    className="form-control"
                                    id="validationCustom07"
                                    placeholder="Enter Your  Firm Address"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.firmaddress || ""}
                                    invalid={
                                      validation.touched.firmaddress &&
                                      validation.errors.firmaddress
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.firmaddress &&
                                  validation.errors.firmaddress ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.firmaddress}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom08">
                                    LLC No.
                                  </Label>
                                  <Input
                                    name="llcno"
                                    type="text"
                                    className="form-control"
                                    id="validationCustom08"
                                    placeholder="Enter Your LLC No."
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.llcno || ""}
                                    invalid={
                                      validation.touched.llcno &&
                                      validation.errors.llcno
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.llcno &&
                                  validation.errors.llcno ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.llcno}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom09">
                                    Category
                                  </Label>
                                  <Input
                                    name="category"
                                    type="text"
                                    className="form-control"
                                    id="validationCustom09"
                                    placeholder="Enter Your Category"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.category || ""}
                                    invalid={
                                      validation.touched.category &&
                                      validation.errors.category
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.category &&
                                  validation.errors.category ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.category}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom10">
                                    Firm ID
                                  </Label>
                                  <Input
                                    name="firmid"
                                    type="text"
                                    className="form-control"
                                    id="validationCustom10"
                                    placeholder="Enter Your   Firm ID"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.firmid || ""}
                                    invalid={
                                      validation.touched.firmid &&
                                      validation.errors.firmid
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.firmid &&
                                  validation.errors.firmid ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.firmid}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label for="basicpill-declaration-input10">
                                    Declaration
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-Declaration-input10"
                                    placeholder="Declaration Details"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                        <Button color="primary" type="submit">
                          SUBMIT
                        </Button>
                      </div>
                      <div className="actions clearfix"></div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table className="table table-striped table-bordered mb-0">
                  <thead>
                    <tr>
                      <th className="font-size-18">S.No</th>
                      <th className="font-size-18">First Name</th>
                      <th className="font-size-18">Last Name</th>
                      <th className="font-size-18">E-mail</th>
                      <th className="font-size-18">Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUser &&
                      allUser.map((users, i) => (
                        <tr key={i}>
                          <th className="font-size-14" scope="row">
                            {i + 1}
                          </th>
                          <td className="font-size-14 ">{users.firstname}</td>
                          <td className="font-size-14 ">
                            {users.lastname}
                            {/* <Button className="bg-primary ms-5">Submit</Button> */}
                          </td>
                          <td className="font-size-14">{users.email}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

FirmRegistration.propTypes = {
  users: PropTypes.object,
}

export default FirmRegistration
