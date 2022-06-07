import React from "react"
import PropTypes from "prop-types"

const Pagination = ({ limit, totalPosts, paginate, pageNumbers }) => {
  for (let i = 1; i <= Math.ceil(totalPosts / limit); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(j => (
          <li key={j} className="page-item">
            <a onClick={() => paginate(j)} className="page-link">
              {j}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  limit: PropTypes.any,
  totalPosts: PropTypes.any,
  paginate: PropTypes.any,
  pageNumbers: PropTypes.any,
}

export default Pagination
