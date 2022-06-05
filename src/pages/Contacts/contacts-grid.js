import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import { Link, withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Card
import CardContact from "./card-contact"

//redux
import { useSelector, useDispatch } from "react-redux"

import { getAllAttorneys } from "../../store/contacts/actions"

const ContactsGrid = props => {
  const dispatch = useDispatch()
  const { attorneys, loading } = useSelector(state => ({
    attorneys: state.contacts.attorneys,
    loading: state.contacts.loading,
  }))

  useEffect(() => {
    dispatch(getAllAttorneys(1, 20, "A"))
  }, [])
  console.log("attorneys", attorneys)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Raincomputing | Homepage</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          {/* <Breadcrumbs title="Contacts" breadcrumbItem="User Grid" /> */}

          {loading ? (
            <Row>
              <Col xs="12">
                <div className="text-center my-3">
                  <Link to="#" className="text-success">
                    <i className="bx bx-hourglass bx-spin me-2" />
                    Load more
                  </Link>
                </div>
              </Col>
            </Row>
          ) : (
            <>
              <div className="mb-2">
                <form className="app-search  ">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for Attorney..."
                    />
                    <span className="bx bx-search-alt" />
                  </div>
                </form>
              </div>

              <Row>
                {map(attorneys, (user, key) => (
                  <CardContact user={user} key={"_user_" + key} />
                ))}
              </Row>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ContactsGrid)
