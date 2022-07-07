import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

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
} from "reactstrap"
//from API
import { getAttorneyreg } from "helpers/backend_helper"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

const AttorneyRegistration = () => {
  const [activeTab, setactiveTab] = useState(1)

  const [passedSteps, setPassedSteps] = useState([1])

  const user = JSON.parse(localStorage.getItem('authUser'));

//   console.log("user",user);
  const handleAttorneyReg = async values => {
    const res = await getAttorneyreg({ ...values, aflag: true,attorney:user.userID})
    // console.log("getAttorneyreg : ", res)
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 3) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      attorneybarnumber: "",
      baradmitdate: "",
      phonenumber: "",
      email: "",
    },
    validationSchema: Yup.object({
      attorneybarnumber: Yup.string().required(
        "Please Enter Your Attorney BarNumber"
      ),
      baradmitdate: Yup.string().required("Please Enter Your Bar Admit Date"),
      phonenumber: Yup.string().required("Please Enter Your Phone Number"),
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: values => {
      handleAttorneyReg(values)
    },
  })

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
                    <h4 className="card-title mb-4">
                      {" "}
                      Attorney Registration Details
                    </h4>
                    <div className="wizard clearfix">
                       <div className="steps clearfix">
                                                    <ul>
                                                        <NavItem
                                                        >
                                                            <NavLink
                                                            >
                                                                <span className="number">1</span> Attorney Registration
                                                            </NavLink>
                                                        </NavItem>
                                                    </ul>
                                                </div> 
                      <div className="content clearfix mt-4">
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom01">
                                    Attorney BarNumber
                                  </Label>
                                  <Input
                                    name="attorneybarnumber"
                                    type="text"
                                    className="form-control"
                                    id="validationCustom01"
                                    placeholder="Enter Your Attorney BarNumber"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.attorneybarnumber || ""
                                    }
                                    invalid={
                                      validation.touched.attorneybarnumber &&
                                      validation.errors.attorneybarnumber
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.attorneybarnumber &&
                                  validation.errors.attorneybarnumber ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.attorneybarnumber}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom02">
                                    Bar Admit Date
                                  </Label>
                                  <Input
                                    name="baradmitdate"
                                    type="text"
                                    className="form-control"
                                    id="validationCustom02"
                                    placeholder="Enter Your Bar Admit Date"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.baradmitdate || ""}
                                    invalid={
                                      validation.touched.baradmitdate &&
                                      validation.errors.baradmitdate
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.baradmitdate &&
                                  validation.errors.baradmitdate ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.baradmitdate}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom03">
                                    Phone Number
                                  </Label>
                                  <Input
                                    type="text"
                                    name="phonenumber"
                                    className="form-control"
                                    id="validationCustom03"
                                    placeholder="Enter Your Phone No."
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.phonenumber || ""}
                                    invalid={
                                      validation.touched.phonenumber &&
                                      validation.errors.phonenumber
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.phonenumber &&
                                  validation.errors.phonenumber ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.phonenumber}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom04">
                                    Email
                                  </Label>
                                  <Input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="validationCustom04"
                                    placeholder="Enter Your Email ID"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.email || ""}
                                    invalid={
                                      validation.touched.email &&
                                      validation.errors.email
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.email &&
                                  validation.errors.email ? (
                                    <FormFeedback type="invalid">
                                      {validation.errors.email}
                                    </FormFeedback>
                                  ) : null}
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="validationCustom05">
                                    Address
                                  </Label>
                                  <textarea
                                    name="address"
                                    id="validationCustom05"
                                    className="form-control"
                                    rows="2"
                                    placeholder="Enter Your Address"
                                    onChange={validation.handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                          <Button color="primary" type="submit">
                            SUBMIT
                          </Button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AttorneyRegistration
