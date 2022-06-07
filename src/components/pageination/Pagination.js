import React from "react"
import PropTypes from "prop-types"

const Pagination = ({
  limit,
  totalPosts,
  paginate,
  pageNumbers,
  currentPage,
}) => {
  for (let i = 1; i <= Math.ceil(totalPosts / limit); i++) {
    pageNumbers.push(i)
  }

  if (currentPage === 0 || pageNumbers.length < 2) {
    return null
  }

  const onNext = () => {
    paginate(currentPage => currentPage + 1)
  }

  const onPrevious = () => {
    paginate(currentPage => currentPage - 1)
  }

  return (
    <nav aria-label="Page navigation ">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={onPrevious}>
            Previous
          </a>
        </li>
        {pageNumbers.map(j => (
          <li key={j} className="page-item">
            <a onClick={() => paginate(j)} className="page-link">
              {j}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" onClick={onNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  limit: PropTypes.any,
  totalPosts: PropTypes.any,
  paginate: PropTypes.any,
  pageNumbers: PropTypes.any,
  currentPage: PropTypes.any,
}

export default Pagination
