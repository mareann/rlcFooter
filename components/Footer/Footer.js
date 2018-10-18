import React, { Component } from "react"
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook,faYoutube,faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css";

library.add(faFacebook, faYoutube, faTwitter, faLinkedin, faEnvelope)

let designBy = {
  fontSize: "6px",
  marginTop: "0",
  marginBottom: "0",
  opacity: ".5",
  marginLeft: "33%",
  marginRight: "33%",
  textAlign: "center"
}

let designByCo = {
  fontSize: "6px",
  opacity: ".8"
}

let yellow = {
  backgroundColor: "yellow"
}

let pink = {
  backgroundColor: "pink"
}

let company = {
  marginLeft: "50%"
}

let con = {
   paddingLeft: "0",
   paddingRight: "0"
}

class Footer extends Component {
  render() {

    return (
      <footer>
        <Container style={con}>
          <Row>
            <Col xs="9">
              <span style={company}>2018 Rescuing Leftover Cuisine</span>
            </Col>
            <Col xs="3">
               <FontAwesomeIcon icon={["fab", "youtube"]}/>
               <FontAwesomeIcon icon={["fab", "facebook-f"]}/>
               <FontAwesomeIcon icon={["fab", "twitter"]}/>
               <FontAwesomeIcon icon={["fab", "linkedin"]}/>
               <FontAwesomeIcon icon={["fa", "envelope"]}/>
            </Col>
           </Row>
           <Row>
             <Col xs="4" style={designBy}>
               <span>Designed by </span>
               <span style={designByCo}>Fluid Designs</span>
            </Col>
          </Row>
        </Container>
      </footer>
      )}

}

export default Footer;