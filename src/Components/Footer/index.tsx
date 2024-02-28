import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { LuCopyright } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { ImMobile } from "react-icons/im";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* <Row>
          <div className="footer-logo">
            <RouterLink to="/">
              <img src={logo} alt="Princess Cruises Logo" />
            </RouterLink>
          </div>
        </Row> */}

        <Row>
          <Col xs={12} md={4} className="footer-cols1">
            <div style={{ minWidth: "300px" }}>
              <div className="flex start">
                <h3 className="font-white mb-16 bold-600 footer-heading">
                  Useful Links
                </h3>
              </div>
              <div className="flex start">
                {" "}
                <a
                  href="https://book.princesscruises-me.com/"
                  className="font-white footer-link mb-16 no-decoration"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Plan A Cruise
                </a>
              </div>
              <div className="flex start">
                {" "}
                <Link
                  to="/all-destinations"
                  className="font-white footer-link mb-16 pointer no-decoration"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 100);
                  }}
                >
                  Destinations
                </Link>
              </div>
              <div className="flex start">
                {" "}
                <Link
                  to="/all-ships"
                  className="font-white footer-link mb-16 pointer no-decoration"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 100);
                  }}
                >
                  Our Ships
                </Link>
              </div>
              <div className="flex start">
                {" "}
                <Link
                  to="/contact"
                  className="font-white footer-link mb-16 pointer no-decoration"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 100);
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="footer-cols2">
            <div style={{ minWidth: "300px" }}>
              <div className="flex start">
                <h3 className="font-white mb-16 bold-600 footer-heading">
                  Popular Destinations
                </h3>
              </div>
              <div className="flex start">
                <a
                  href="https://book.princesscruises-me.com/swift/cruise/destination/alaska-?destinations=1&siid=943838&destinationtype=All&destinationorriverid=destinationId"
                  className="font-white footer-link mb-16 no-decoration"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Alaska
                </a>
              </div>{" "}
              <div className="flex start">
                <a
                  href="https://book.princesscruises-me.com/swift/cruise/destination/europe?destinations=15&siid=943838&destinationtype=All&destinationorriverid=destinationId"
                  className="font-white footer-link mb-16 no-decoration"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Europe
                </a>
              </div>{" "}
              <div className="flex start">
                <a
                  href="https://book.princesscruises-me.com/swift/cruise/destination/mediterranean?destinations=75&siid=943838&destinationtype=All&destinationorriverid=destinationId"
                  className="font-white footer-link mb-16 no-decoration"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Mediterranean
                </a>
              </div>
              <div className="flex start">
                <a
                  href="https://book.princesscruises-me.com/swift/cruise/destination/caribbean?destinations=9&siid=943838&destinationtype=All&destinationorriverid=destinationId"
                  className="font-white footer-link mb-16 no-decoration"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Caribbean
                </a>
              </div>{" "}
            </div>
          </Col>

          <Col xs={12} md={4} className="footer-cols3">
            <div style={{ minWidth: "300px" }}>
              <div className="flex start">
                <h3 className="font-white mb-16 bold-600 footer-heading">
                  Contact Info
                </h3>
              </div>
              <div className="flex start">
                <div style={{ width: "20px" }}>
                  <ImMobile
                    style={{ fontSize: "1.1rem", marginBottom: "16px" }}
                    className="font-white "
                  />
                </div>
                <p
                  className="font-white footer-link mb-16"
                  style={{ marginLeft: "5px", marginRight: "16px" }}
                >
                  +971 4 3511966
                </p>
              </div>
              <div className="flex start">
                <div style={{ width: "20px" }}>
                  <FaWhatsapp
                    className="font-white mb-16"
                    style={{ fontSize: "1.1rem", marginBottom: "16px" }}
                  />
                </div>
                <p
                  className="font-white footer-link mb-16"
                  style={{ marginLeft: "5px", marginRight: "16px" }}
                >
                  +971 58 5524511
                </p>
              </div>
              <div className="flex start">
                <div style={{ width: "20px" }}>
                  <IoMdMail
                    className="font-white mb-16"
                    style={{ fontSize: "1.1rem", marginBottom: "16px" }}
                  />
                </div>
                <p
                  className="font-white footer-link mb-16"
                  style={{ marginLeft: "5px" }}
                >
                  book@princesscruises-me.com
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Divider className="footer-divider" />
        <Row>
          <Col className="flex footer-copyright-div1" sm={12} md={6}>
            <div>
              <a
                href="https://www.princess.com/"
                className="font-white text-align-center pointer smaller-texts no-decoration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Princess Cruise Lines Ltd website"
              >
                <LuCopyright
                  style={{ marginBottom: "2.5px", marginRight: "2px" }}
                />
                {new Date().getFullYear()} Princess Cruise Lines Ltd - All
                rights reserved
              </a>
            </div>
          </Col>
          <Col className="flex footer-copyright-div2" sm={12} md={6}>
            <div>
              <a
                href="https://www.cruisemaster-me.com/"
                className="font-white text-align-center pointer smaller-texts no-decoration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Cruise Master LLC website"
              >
                Site Maintained By Cruise Master LLC
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
