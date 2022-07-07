import React from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags'

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
// import "./datatables.scss"

const ManageFirm = () => {

  const columns = [{
    dataField: 'id',
    text: 'Id',
    sort: true,
  }, {
    dataField: 'name',
    text: 'Name',
    sort: true
  }, {
    dataField: 'position',
    text: 'Position',
    sort: true
  }, {
    dataField: 'office',
    text: 'Office',
    sort: true
  },
  {
    dataField: 'startdate',
    text: 'Start Date',
    sort: true
  }, 
  ];

  // Table Data
  const productData = [
    { "id": 1, "name": "Harish", "position": "Attorney", "office": "Tokyo", "startdate": "2008/11/28"},

    { "id": 2, "name": "Kalyan Raman", "position": "Attorney", "office": "London", "startdate": "2009/10/09"},

    { "id": 3, "name": "Ashok", "position": "Junior Attorney", "office": "San Francisco", "startdate": "2009/01/12" },

    { "id": 4, "name": "Brade David", "position": "Attorney", "office": "London", "startdate": "2012/10/13" },

    { "id": 5, "name": "Brenden Wagner", "position": "Attorney", "office": "San Francisco", "startdate": "2011/06/07" },

    { "id": 6, "name": "Williamson", "position": "Attorney", "office": "New York", "startdate": "2012/12/02" },

    { "id": 7, "name": "Bruno ", "position": "Attorney", "office": "London", "startdate": "2011/05/03" },

    { "id": 8, "name": "Caesar Vance", "position": "Attorney", "office": "New York", "startdate": "2011/12/12" },

    { "id": 9, "name": "Stevens", "position": "Attorney", "office": "New York",  "startdate": "2011/12/06" },

    { "id": 10, "name": "Kelly Baily", "position": "Attorney", "office": "Edinburgh", "startdate": "2012/03/29" },

    { "id": 11, "name": "Marshall", "position": "Attorney", "office": "San Francisco",  "startdate": "2008/10/16" },

    { "id": 12, "name": "Bechakam", "position": "Attorney", "office": "San Francisco",  "startdate": "2009/09/15" },

    { "id": 13, "name": "Rios Randalf", "position": "Attorney", "office": "Edinburgh",  "startdate": "2012/09/26" },

    { "id": 14, "name": "Snipe", "position": "Attorney", "office": "New York", "startdate": "2011/01/25" },

    { "id": 15, "name": "Walter Vetrivel", "position": "Attorney", "office": "Sidney",  "startdate": "2010/09/20" },

    { "id": 16, "name": "Sajay Dath", "position": "Attorney", "office": "San Francisco", "startdate": "2009/07/07" },

    { "id": 17, "name": "Dumbuldoor", "position": "Attorney", "office": "San Francisco",  "startdate": "2010/03/11" },

    { "id": 18, "name": "Willilamsom", "position": "Attorney", "office": "Tokyo",  "startdate": "2011/07/25" },

    { "id": 19, "name": "Charles", "position": "Attorney", "office": "San Francisco",  "startdate": "2008/10/26" },

    { "id": 20, "name": "Joy David", "position": "Attorney", "office": "Edinburgh",  "startdate": "2010/12/22" },

   
  ];

  const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: productData.length, // replace later with size(customers),
    custom: true,
  }

  // Custom Pagination Toggle
  const sizePerPageList = [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '15', value: 15 },
    { text: '20', value: 20 },
    { text: '25', value: 25 },
    { text: 'All', value: (productData).length }];


  // Select All Button operation
  const selectRow = {
    mode: 'checkbox'
  }

  const { SearchBar } = Search;

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>MANAGE ATTORNEY | Rain - Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="MANAGE ATTORNEY " />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Manage AttorneyTable </CardTitle>
                  <p className="card-title-desc">
                    Attorneys are Refer to get the link to Add Firm Group.
                    This Group Use to Discuss about the our process:{" "}
                    <code>Click to Get Link </code>.
                  </p>

                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField='id'
                    columns={columns}
                    data={productData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField='id'
                        columns={columns}
                        data={productData}
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>

                            <Row className="mb-2">
                              <Col md="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar
                                      {...toolkitProps.searchProps}
                                    />
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
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
                                    headerWrapperClasses={"thead-light"}
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
                        )
                        }
                      </ToolkitProvider>
                    )
                    }</PaginationProvider>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ManageFirm
