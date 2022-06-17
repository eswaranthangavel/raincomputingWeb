import MetaTags from "react-meta-tags"
import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  FormGroup,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter } from "react-router-dom"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"

import avatar from "../../assets/images/users/avatar-2.jpg"
// actions
import { updateProfile, resetProfileFlag } from "../../store/actions"

const UserProfile = props => {
  const dispatch = useDispatch()
  

  const { error, success,userid,firstName,lastName,state } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
    userid:state.Login.authUser.userId,
    firstName:state.Login.authUser.firstName,
    lastName:state.Login.authUser.lastName,
    state:state,
  }))
  

  const [idx, setidx] = useState(userid)
  const [firstname, setfirstname] = useState(firstName)
  const [lastname, setlastname] = useState(lastName)
  

  useEffect(() => {
    console.log(state,"before state")
    setfirstname(firstname)
    setlastname(lastname)
  }, [])

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firstname: firstName,
      lastname: lastName,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter Your First Name"),
      lastname: Yup.string().required("Please Enter Your Last Name"),
    }),
    onSubmit: values => {
      console.log({ ...values, id: idx })
      dispatch(updateProfile({ ...values, id: idx }));

      console.log(state,'after state')
    },
  })

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Rain - Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumb title="Rain" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
            {error && error ? <Alert color="danger">{error}</Alert> : null}
              {success ? <Alert color="success">{success}</Alert> : null}
              
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>{firstname +""+ lastname}</h5>
                        <p className="mb-1">{}</p>
                        {/* <p className="mb-0">Id no: #{idx}</p> */}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Update User Details</h4>

          <Card>
            <CardBody>
              <Form
                className="needs-validation"
                onSubmit={e => {
                  e.preventDefault()
                  validation.handleSubmit()
                  return false
                }}
              >
                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom01">First name</Label>
                      <Input
                        name="firstname"
                        placeholder="First name"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.firstname || ""}
                        invalid={
                          validation.touched.firstname &&
                          validation.errors.firstname
                            ? true
                            : false
                        }
                      />
                      {validation.touched.firstname &&
                      validation.errors.firstname ? (
                        <FormFeedback type="invalid">
                          {validation.errors.firstname}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <FormGroup className="mb-3">
                      <Label htmlFor="validationCustom02">Last name</Label>
                      <Input
                        name="lastname"
                        placeholder="Last name"
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.lastname || ""}
                        invalid={
                          validation.touched.lastname &&
                          validation.errors.lastname
                            ? true
                            : false
                        }
                      />
                      {validation.touched.lastname &&
                      validation.errors.lastname ? (
                        <FormFeedback type="invalid">
                          {validation.errors.lastname}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <Button color="primary" type="submit">
                  SUBMIT
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(UserProfile)
