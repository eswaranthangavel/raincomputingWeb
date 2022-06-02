import React from "react"
import { Container, Row, Col } from "reactstrap"


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <box>
        <Container fluid={true}>

          <Row>
            <h3>About</h3>
            <h6>About Us</h6>
            <h6>How it works</h6>
            <h6>Security</h6>

            <Col md={6}>{new Date().getFullYear()} © Rain.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by RainComputing
              </div>
            </Col>
          </Row>
        </Container>
        </box>
      </footer>
    </React.Fragment>
  )
}

export default Footer
