import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import PropTypes  from "prop-types"

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
  Button,
  CardTitle,
} from "reactstrap"

import { getFirmreg } from "helpers/backend_helper"
import classnames from "classnames"
import { Link } from "react-router-dom"
import Switch from "react-switch";


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"
import ManageFirm from "./managefirm"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"


const FirmRegistration = () => {

  const [ switch1, setswitch] = useState(true);

  const Enablesymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2
        }}
      >
        {" "}
        Yes
      </div>
    );
  };
  
  const DisableSymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2
        }}
      >
        {" "}
         No
      </div>
    );
  };
  
  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "position",
      text: "Position",
      sort: true,
    },
    {
      dataField: "startdate",
      text: "startdate",
      sort: true,
    },
    {
      dataField: "Action",
      text: "Action",
      sort: true,
      formatter: (cellContent, order) => (
        <>
          <div className="d-flex gap-3">
            </div>
            <Switch
      uncheckedIcon={<Enablesymbol />}
      checkedIcon={<DisableSymbol />}
      className="me-1 mb-sm-8 mb-2"
      onColor="#626ed4"
      onChange={() => {
        setswitch(!switch1);
      }}
      checked={switch1}
    />
            </>
      )
    },
  ]

  // Table Data
  const productData = [
    {
      id: 1,
      name: "Harish",
      position: "Attorney",
      office: "Tokyo",
      startdate: "2008/11/28",
    },

    {
      id: 2,
      name: "Kalyan Raman",
      position: "Attorney",
      office: "London",
      startdate: "2009/10/09",
    },

    {
      id: 3,
      name: "Ashok",
      position: "Junior Attorney",
      office: "San Francisco",
      startdate: "2009/01/12",
    },

    {
      id: 4,
      name: "Brade David",
      position: "Attorney",
      office: "London",
      startdate: "2012/10/13",
    },

    {
      id: 5,
      name: "Brenden Wagner",
      position: "Attorney",
      office: "San Francisco",
      startdate: "2011/06/07",
    },

    {
      id: 6,
      name: "Williamson",
      position: "Attorney",
      office: "New York",
      startdate: "2012/12/02",
    },

    {
      id: 7,
      name: "Bruno ",
      position: "Attorney",
      office: "London",
      startdate: "2011/05/03",
    },

    {
      id: 8,
      name: "Caesar Vance",
      position: "Attorney",
      office: "New York",
      startdate: "2011/12/12",
    },

    {
      id: 9,
      name: "Stevens",
      position: "Attorney",
      office: "New York",
      startdate: "2011/12/06",
    },

    {
      id: 10,
      name: "Kelly Baily",
      position: "Attorney",
      office: "Edinburgh",
      startdate: "2012/03/29",
    },

    {
      id: 11,
      name: "Marshall",
      position: "Attorney",
      office: "San Francisco",
      startdate: "2008/10/16",
    },

    {
      id: 12,
      name: "Bechakam",
      position: "Attorney",
      office: "San Francisco",
      startdate: "2009/09/15",
    },

    {
      id: 13,
      name: "Rios Randalf",
      position: "Attorney",
      office: "Edinburgh",
      startdate: "2012/09/26",
    },

    {
      id: 14,
      name: "Snipe",
      position: "Attorney",
      office: "New York",
      startdate: "2011/01/25",
    },

    {
      id: 15,
      name: "Walter Vetrivel",
      position: "Attorney",
      office: "Sidney",
      startdate: "2010/09/20",
    },

    {
      id: 16,
      name: "Sajay Dath",
      position: "Attorney",
      office: "San Francisco",
      startdate: "2009/07/07",
    },

    {
      id: 17,
      name: "Dumbuldoor",
      position: "Attorney",
      office: "San Francisco",
      startdate: "2010/03/11",
    },

    {
      id: 18,
      name: "Willilamsom",
      position: "Attorney",
      office: "Tokyo",
      startdate: "2011/07/25",
    },

    {
      id: 19,
      name: "Charles",
      position: "Attorney",
      office: "San Francisco",
      startdate: "2008/10/26",
    },

    {
      id: 20,
      name: "Joy David",
      position: "Attorney",
      office: "Edinburgh",
      startdate: "2010/12/22",
    },
  ]

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ]

  const pageOptions = {
    sizePerPage: 10,
    totalSize: productData.length, // replace later with size(customers),
    custom: true,
  }

  // Custom Pagination Toggle
  const sizePerPageList = [
    { text: "5", value: 5 },
    { text: "10", value: 10 },
    { text: "15", value: 15 },
    { text: "20", value: 20 },
    { text: "25", value: 25 },
    { text: "All", value: productData.length },
  ]

  // Select All Button operation
  const selectRow = {
    mode: "checkbox",
  }

  // const [activeTab, setactiveTab] = useState(1)

  const [passedSteps, setPassedSteps] = useState([1])

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

  const { SearchBar } = Search

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
                      {/* <div className="actions clearfix">
                      </div> */}
                      <div className="">
                        <Row>
                          <Col className="col-12">
                            {/* <Card> */}
                            {/* <CardBody> */}
                            <CardTitle className="h4 mt-5 ">
                              Manage Attorney Table{" "}
                            </CardTitle>
                            <PaginationProvider
                              pagination={paginationFactory(pageOptions)}
                              keyField="id"
                              columns={columns}
                              data={productData}
                            >
                              {({ paginationProps, paginationTableProps }) => (
                                <ToolkitProvider
                                  keyField="id"
                                  columns={columns}
                                  data={productData}
                                  search
                                >
                                  {toolkitProps => (
                                    <React.Fragment>
                                      <Row className="mb-2">
                                        <Col md="4">
                                          <div className=" mt-2 search-box me-2 mb-2 d-inline-block">
                                            <div className="position-relative">
                                              <SearchBar
                                                {...toolkitProps.searchProps}
                                              />
                                              <i className="bx bx-search-alt search-icon" />
                                            </div>
                                          </div>
                                        </Col>
                                        <Col sm="8">
                                          <div className="text-sm-end">
                                            <Button
                                              type="button"
                                              color="success"
                                              className="btn-rounded  mb-2 me-2"
                                              onClick={""}
                                            >
                                              <i className="mdi mdi-plus me-1" />
                                              Invite Link
                                            </Button>
                                          </div>
                                        </Col>
                                      </Row>

                                      <Row>
                                        <Col xl="12">
                                          <div className="table-responsive">
                                            <BootstrapTable
                                              keyField={"id"}
                                              responsive
                                              bordered={false}
                                              striped={false}
                                              defaultSorted={defaultSorted}
                                              selectRow={selectRow}
                                              classes={
                                                "table align-middle table-nowrap"
                                              }
                                              headerWrapperClasses={
                                                "thead-light"
                                              }
                                              {...toolkitProps.baseProps}
                                              {...paginationTableProps}
                                            />
                                          </div>
                                        </Col>
                                      </Row>

                                      <Row className="align-items-md-center mt-30">
                                        <Col className="inner-custom-pagination d-flex">
                                          <div className="d-inline">
                                            <SizePerPageDropdownStandalone
                                              {...paginationProps}
                                            />
                                          </div>
                                          <div className="text-md-right ms-auto">
                                            <PaginationListStandalone
                                              {...paginationProps}
                                            />
                                          </div>
                                        </Col>
                                      </Row>
                                    </React.Fragment>
                                  )}
                                </ToolkitProvider>
                              )}
                            </PaginationProvider>

                            {/* </CardBody> */}
                            {/* </Card> */}
                          </Col>
                        </Row>
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

FirmRegistration.propTypes = {
  users: PropTypes.object,
}


export default FirmRegistration
