import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import { Link, withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import { map } from "lodash"
import Pagination from "../../components/pageination/Pagination"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Card
import CardContact from "./card-contact"

//redux
import { useSelector, useDispatch } from "react-redux"

import {
  getAllAttorneys,
  getAttorneysCount,
} from "../../store/contacts/actions"

const ContactsGrid = props => {
  const [searchText, setSearchText] = useState("")

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  // const currentPosts = page.slice(indexOfFirstPost, indexOfLastPost)

  //pagination//
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const dispatch = useDispatch()

  const { attorneys, loading } = useSelector(state => ({
    attorneys: state.contacts.attorneys,
    loading: state.contacts.loading,
  }))

  useEffect(() => {
    dispatch(getAllAttorneys(page, limit, searchText))
  }, [searchText])
  console.log("attorneys", attorneys)

  useEffect(() => {
    dispatch(getAttorneysCount(limit, paginate))
  }, [])

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
                      type="text-success"
                      className="form-control "
                      placeholder="Search for Attorney..."
                      onChange={e => setSearchText(e.target.value)}
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
              <div>
                <Pagination
                  limit={limit}
                  totalPosts={page.length}
                  paginate={paginate}
                  pageNumbers={[1, 2, 3, 4, 5, 6, 7, 8]}
                ></Pagination>
              </div>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ContactsGrid)
