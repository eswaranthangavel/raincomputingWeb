import MetaTags from "react-meta-tags";
import React, { useState, useEffect } from "react";
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
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-2.jpg";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

const UserProfile = props => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [idx, setidx] = useState(1);

  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }));

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName);
        setemail(obj.email);
        setidx(obj.uid);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username);
        setemail(obj.email);
        setidx(obj.uid);
      }
      setTimeout(() => {
        dispatch(resetProfileFlag());
      }, 3000);
    }
  }, [dispatch, success]);


   // Form validation 
   const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
                    firstname: '',
                    lastname: '',
                    city: '',
                    state: '',
                    zip: '',
                    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter Your First Name"),
      lastname: Yup.string().required("Please Enter Your Last Name"),
      city: Yup.string().required("Please Enter Your City"),
      state: Yup.string().required("Please Enter Your State"),
      zip: Yup.string().required("Please Enter Your Zip"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

 
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Rain - Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
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
                        <h5>{name}</h5>
                        <p className="mb-1">{email}</p>
                        <p className="mb-0">Id no: #{idx}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Change User Details</h4>

          <Card>
             <CardBody>
                <Form className="needs-validation"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
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
                              validation.touched.firstname && validation.errors.firstname ? true : false
                            }
                          />
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
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
                              validation.touched.lastname && validation.errors.lastname ? true : false
                            }
                          />
                          {validation.touched.lastname && validation.errors.lastname ? (
                            <FormFeedback type="invalid">{validation.errors.lastname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">City</Label>
                          <Input
                            name="city"
                            placeholder="City"
                            type="text"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.city || ""}
                            invalid={
                              validation.touched.city && validation.errors.city ? true : false
                            }
                          />
                          {validation.touched.city && validation.errors.city ? (
                            <FormFeedback type="invalid">{validation.errors.city}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom04">State</Label>
                          <Input
                            name="state"
                            placeholder="State"
                            type="text"
                            className="form-control"
                            id="validationCustom04"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.state || ""}
                            invalid={
                              validation.touched.state && validation.errors.state ? true : false
                            }
                          />
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">Zip</Label>
                          <Input
                            name="zip"
                            placeholder="Zip Code"
                            type="text"
                            className="form-control"
                            id="validationCustom05"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.zip || ""}
                            invalid={
                              validation.touched.zip && validation.errors.zip ? true : false
                            }
                          />
                          {validation.touched.zip && validation.errors.zip ? (
                            <FormFeedback type="invalid">{validation.errors.zip}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup className="mb-3">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              {" "}
                              Agree to terms and conditions
                            </Label>
                          </div>
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
  );
};

export default withRouter(UserProfile);
