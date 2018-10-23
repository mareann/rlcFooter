/* https://www.instagram.com/rescuingleftovercuisine/ */
import React, { Component } from "react"
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook,faYoutube,faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css";

library.add(faFacebook, faYoutube, faTwitter, faInstagram, faLinkedin, faEnvelope)

let footerRow = {
  marginLeft: "0",
  marginTop: "3px",
  marginBottom: "3px",
  fontSize: "6px",
  fontWeight: "600"
}

let designBy = {
  fontSize: "6px",
  marginTop: "0",
  marginBottom: "0",
  opacity: ".5",
  color: "#757373",
  marginLeft: "37%"
}

let designByCo = {
  fontSize: "6px",
  color: "#1f1e1e",
  fontWeight: "600"
}

let company = {
  marginLeft: "55%",
  opacity: ".7",
  color: "#666565"
}

let con = {
  paddingLeft: "0",
  paddingRight: "0"
}

let  iconStyle = {
  color: "#a49f9f"
}

let iconCol = {
  paddingLeft: "45px"
}

class Footer extends Component {
  render() {

    return (
      <footer>
        <Container style={con}>
          <Row>
            <Col xs="8">
              <span style={company}>&copy;2018 Rescuing Leftover Cuisine</span>
            </Col>
            <Col xs="4" style={iconCol}>
               <a style={iconStyle} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCJKK9jkEIHt8j17cHPHCPQw"><FontAwesomeIcon icon={["fab", "youtube"]}/></a>
               <a style={iconStyle} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RescuingLeftoverCuisine"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a>
               <a style={iconStyle} target="_blank" rel="noopener noreferrer" href="https://twitter.com/rescuingcuisine"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
               <a style={iconStyle} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rescuingleftovercuisine"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
               <a style={iconStyle} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rescuing-leftover-cuisine"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
               <a style={iconStyle} target="_blank" rel="noopener noreferrer" href="mailto:info@resuingleftovercuisine.org"><FontAwesomeIcon icon={["fa", "envelope"]}/></a>
            </Col>
           </Row>
           <Row style={footerRow}>
             <Col xs="4"></Col>
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