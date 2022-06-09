import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Pagination,
  UncontrolledTooltip,
} from "reactstrap"
import images from "assets/images"
import { isEmpty, size, map } from "lodash"
import { attImages } from "../../helpers/mockData"

const CardContact = props => {
  const imgIndex = Math.floor(Math.random() * 8)
  const { user } = props

  return (
    <React.Fragment>
      <Col xl="3" sm="6">
        <Card className="text-center">
          <Link to={`/projects-overview?uid=${user._id}`}>
            <CardBody>
              <div>
                <div>
                  <img
                    className="avatar-xl1"
                    src={user.img ? user.img : attImages[imgIndex].url}
                    alt=""
                  />

                  {/* <img className="avatar-xl1"  src={attImages[imgIndex].url}alt="" /> */}
                </div>
                <div className="mt-3">
                  <h5 className="font-size-16 mb-1 text-dark">
                    {user.firstname} {user.lastname} {user.initial}
                  </h5>
                </div>
                <p className="font-size-10 text-muted">{user.firm}</p>
                <p className="text-muted">{user.type}</p>
              </div>

              {/* {!user.img ? (
              <div className="avatar-xl mx-auto mb-4">
                <span
                  className={
                    "avatar-title bg-soft bg-" +
                    user.color +
                    " text-" +
                    user.color +
                    " font-size-16"
                  }
                >
                  {user.name.charAt(0)}
                </span>
              </div>
            ) : (
              <div className="mb-4">
                <img className="avatar-xl" src={images[user.img]} alt="" />
              </div>
            )}

            <h5 className="font-size-15 mb-1">
              <Link to="#" className="text-dark">
                {user.firstname}
              </Link>
            </h5>
            <p className="text-muted">{user.type}</p> */}
              {/* <div>
              {map(
                user.tags,
                (tag, index) =>
                  index < 2 && (
                    <Link
                      to="#"
                      className="badge bg-primary font-size-11 m-1"
                      key={"_skill_" + user.id + index}
                    >
                      {tag}
                    </Link>
                  )
              )}
              {size(user.tags) > 2 && (
                <Link
                  to="#"
                  className="badge bg-primary font-size-11 m-1"
                  key={"_skill_" + user.id}
                >
                  {size(user.tags) - 1} + more
                </Link>
              )}
            </div> */}
            </CardBody>
            <CardFooter className="bg-transparent border-top">
              <div className="contact-links d-flex font-size-20">
                <div className="flex-fill">
                  <Link to="#" id={"message" + user._id}>
                    <i className="bx bx-message-square-dots" />
                    <UncontrolledTooltip
                      placement="top"
                      target={"message" + user._id}
                    >
                      Message
                    </UncontrolledTooltip>
                  </Link>
                </div>
                <div className="flex-fill">
                  <Link to="#" id={"project" + user._id}>
                    <i className="bx bx-pie-chart-alt" />
                    <UncontrolledTooltip
                      placement="top"
                      target={"project" + user._id}
                    >
                      Projects
                    </UncontrolledTooltip>
                  </Link>
                </div>
                <div className="flex-fill">
                  <Link to="#" id={"profile" + user._id}>
                    <i className="bx bx-user-circle" />
                  </Link>
                  <UncontrolledTooltip
                    placement="top"
                    target={"profile" + user._id}
                  >
                    Profile
                  </UncontrolledTooltip>
                </div>
              </div>
            </CardFooter>
          </Link>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardContact.propTypes = {
  user: PropTypes.object,
}

export default CardContact
