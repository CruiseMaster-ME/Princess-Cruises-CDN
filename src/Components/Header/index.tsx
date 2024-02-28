import { Divider } from "antd";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logos/princess_logo.png";
import "./styles.scss";
import { Drawer } from "antd";
import { IoIosMenu } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { ImMobile } from "react-icons/im";

function HeaderComponent() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header
      className="common-header bg-primary colored-border"
    >
      <div className="flex space-between">
        <div>
          <RouterLink to="/">
            <div className="header-brand">
              <img
                src={logo}
                alt="Princess Cruises Logo"
              />
            </div>
          </RouterLink>
        </div>
        <div className="flex center">
          <ImMobile
            style={{ fontSize: "1.1rem" }}
            className="contact-details"
          />
          <p
            className={"contact-text font-white basic-texts contact-details"}
            style={{ marginLeft: "5px", marginRight: "16px" }}
          >
            +971 4 3511966
          </p>
          <FaWhatsapp style={{ fontSize: "1.1rem" }} className="contact-details"/>
          <p className="contact-text font-white basic-texts contact-details" style={{ marginLeft: "5px" }}>
            +971 58 5524511
          </p>

          <IoIosMenu
            className="bar font-white pointer"
            onClick={showDrawer}
          />
        </div>
      </div>
      <Drawer placement="right" onClose={onClose} open={open} width={"250px"}>
        <div
          style={{
            cursor: "pointer",
            padding: "16px 0px",
          }}
          onClick={() => {
            navigate("/");
            onClose();
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }}
        >
          <h5
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              color: "#0054a0",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            Home
          </h5>
        </div>
        <Divider style={{ margin: 0 }} />
        <div
          style={{
            cursor: "pointer",
            padding: "16px 0px",
          }}
          onClick={() => {
            onClose();
          }}
        >
          <a
            href="https://book.princesscruises-me.com/"
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textDecoration: "none",
              color: "#0054a0",
              fontSize: "16px",
            }}
            target="_self"
            rel="noopener noreferrer"
          >
            Plan a Cruise
          </a>
        </div>
        <Divider style={{ margin: 0 }} />
        <div
          style={{
            cursor: "pointer",
            padding: "16px 0px",
          }}
          onClick={() => {
            navigate("/all-destinations");
            onClose();
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }}
        >
          <h5
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              color: "#0054a0",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            Destinations
          </h5>
        </div>
        <Divider style={{ margin: 0 }} />
        <div
          style={{
            cursor: "pointer",
            padding: "16px 0px",
          }}
          onClick={() => {
            navigate("/all-ships");
            onClose();
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }}
        >
          <h5
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              color: "#0054a0",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            Our Ships
          </h5>
        </div>
        <Divider style={{ margin: 0 }} />
        <div
          style={{
            cursor: "pointer",
            padding: "16px 0px",
          }}
          onClick={() => {
            navigate("/contact");
            onClose();
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }}
        >
          <h5
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              color: "#0054a0",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            Contact
          </h5>
        </div>
      </Drawer>
    </header>
  );
}

export default HeaderComponent;
