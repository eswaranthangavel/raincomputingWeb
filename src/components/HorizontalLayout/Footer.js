import React from "react"
import { Container, Row, Col } from "reactstrap"


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>

          <Row>
            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
            <h3>About</h3>
            <li>About Us</li>
            <li>How it works</li>
            <li>Security</li>
            </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
            <h3>Solution</h3>
            <li>Enterprise</li>
            <li>Private Label</li>
            <li>Management</li>
            </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
            <h3>Contact</h3>
            <li>Contact Us </li>
            <li>Careers</li>
            <li>Security</li>
            </ul>
            </div>


            <Col md={6}>{new Date().getFullYear()} © Rain.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by RainComputing
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
