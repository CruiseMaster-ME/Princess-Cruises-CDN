import { useState } from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Divider, Form } from "antd";
import { Link } from "react-router-dom";
import "react-awesome-slider/dist/styles.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import TextField from "@mui/material/TextField";
import { MdMyLocation } from "react-icons/md";
import { notification } from "antd";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";
import { LoadingOutlined } from "@ant-design/icons";
import { TfiLayoutLineSolid } from "react-icons/tfi";

type NotificationType = "success" | "info" | "warning" | "error";

function Contact() {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Welcome Aboard!",
      description:
        "Thank you for contacting Princess Cruises! We will get back to you soon.",
    });
  };

  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Invalid Email!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const formValues = form.getFieldsValue();

      const formElement = document.createElement("form");
      Object.entries(formValues).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.name = key;
        input.value = String(value);
        formElement.appendChild(input);
      });

      await emailjs.sendForm(
        "service_ayp143t",
        "template_0lcifcc",
        formElement,
        "WCkaG9jlH-uDpruoz"
      );
      setLoading(false);
      openNotificationWithIcon("success");
      form.resetFields();
    } catch (error) {
      setLoading(true);
      console.error(error);
      openNotificationWithIcon("error");
      form.resetFields();
    }
  };

  const handleButtonClick = () => {
    const officeAddress = "Cruise Master LLC, Oud Metha, Dubai,UAE";

    const encodedAddress = encodeURIComponent(officeAddress);

    const mapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;

    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Contact Princess Cruises in the Middle East</title>
        <meta
          name="description"
          content="Contact Princess Cruises - Your trusted sales and booking agent in the Middle East. Reach out for inquiries, bookings, and assistance with planning your cruise."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Princess Cruises",
              "description": "Contact Princess Cruises for inquiries, bookings, and assistance with planning your cruise."
            }
          `}
        </script>
        <link
          rel="canonical"
          href="https://www.princesscruises-me.com/contact"
        />
        <meta
          property="og:title"
          content="Contact Princess Cruises - Sales and Booking Agent in the Middle East"
        />
        <meta
          property="og:image"
          content="https://www.princesscruises-me.com/favicon.png"
        />
        <meta
          property="og:description"
          content="Contact Princess Cruises - Your trusted sales and booking agent in the Middle East. Reach out for inquiries, bookings, and assistance with planning your cruise."
        />
        <meta
          property="og:url"
          content="https://www.princesscruises-me.com/contact"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {contextHolder}
      <div className="flex flex-column mb-32">
        <div className="breadcrumb-div">
          <div className="full-height flex center">
            <h1 className="font-white basic-texts bold-500">
              <Link to="/" className="white-link">
                Home
              </Link>{" "}
              &nbsp;<TfiLayoutLineSolid/>&nbsp; Contact Us
            </h1>
          </div>
        </div>
        <Container>
          <h2 className="font-white mt-32 text-align-center description-text bold-400">
            Connect with us effortlessly. Have questions or feedback? We're here
            to help. Reach out and let's make your cruise experience
            exceptional!
          </h2>
        </Container>
      </div>

      <Container>
        <Row style={{ minHeight: "400px" }}>
          <Col sm={12} md={4} className="responsive-column-padding">
            <div className="contact-left-col full-height">
              <h3 className="font-white bold-600">Get In Touch</h3>
              <Divider className="bg-white" />
              <div>
                <p className="bold-600 mb-16 font-white">Office Address</p>
                <div className="flex">
                  <div style={{ width: "20px" }}>
                    <FaLocationDot
                      style={{ marginBottom: "5px" }}
                      className="font-white"
                    />
                  </div>
                  <div>
                    <p
                      className="bold-500 basic-texts font-white"
                      style={{ marginLeft: "8px", marginBottom: "0px" }}
                    >
                      Cruise Master LLC,
                    </p>

                    <p
                      className="bold-500 mb-16 basic-texts font-white"
                      style={{ marginLeft: "8px" }}
                    >
                      Suite 603, Office Court Bldg - Oud Metha - Dubai
                    </p>
                  </div>
                </div>
                <Button
                  type="default"
                  className="no-radius mt-16"
                  onClick={handleButtonClick}
                  style={{ backgroundColor: "transparent" }}
                >
                  <p className="bold-500 font-white">
                    <MdMyLocation
                      style={{ marginBottom: "3px", marginRight: "4px" }}
                    />
                    Directions
                  </p>
                </Button>
                <Divider className="bg-white" />

                <p className="bold-600 mb-16 font-white">Contact Info</p>
                <div className="flex">
                  <div style={{ width: "20px" }}>
                    <FaPhone
                      style={{ marginBottom: "5px" }}
                      className="font-white"
                    />
                  </div>
                  <p
                    className="bold-500 mb-16 basic-texts font-white"
                    style={{ marginLeft: "8px" }}
                  >
                    +971 4 3511966 , +971 58 5524511
                  </p>
                </div>

                <div className="flex">
                  <div style={{ width: "20px" }}>
                    <IoMdMail
                      style={{ marginBottom: "5px" }}
                      className="font-white"
                    />
                  </div>
                  <p
                    className="bold-500 mb-16 basic-texts font-white"
                    style={{ marginLeft: "8px" }}
                  >
                    book@princesscruises-me.com
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={8} className="responsive-column-padding">
            <div className="contact-form-card full-height">
              <h3 className="bold-600 mb-32 description-text">
                Send Us A Message
              </h3>
              <Form
                name="contactUsForm"
                onFinish={onFinish}
                layout="vertical"
                form={form}
                validateMessages={validateMessages}
              >
                <Row className="mb-16">
                  <Col>
                    <Form.Item
                      name="user_name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <TextField
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        fullWidth
                        InputLabelProps={{
                          style: { color: "grey" },
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="user_email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email address",
                        },
                        {
                          type: "email",
                          message: "Please enter a valid email address",
                        },
                      ]}
                    >
                      <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        fullWidth
                        InputLabelProps={{
                          style: { color: "grey" },
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row className="mb-16">
                  <Col>
                    <Form.Item name="phone">
                      <TextField
                        id="standard-basic"
                        label="Phone"
                        variant="standard"
                        fullWidth
                        InputLabelProps={{
                          style: { color: "grey" },
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item name="subject">
                      <TextField
                        id="standard-basic"
                        label="Subject"
                        variant="standard"
                        fullWidth
                        InputLabelProps={{
                          style: { color: "grey" },
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                    ]}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows="4"
                      variant="standard"
                      name="message"
                      fullWidth
                      InputLabelProps={{
                        style: { color: "grey" },
                      }}
                    />
                  </Form.Item>
                </Row>
                <Row>
                  <Form.Item className="flex end mt-32">
                    <Button
                      type="primary"
                      shape="round"
                      size="large"
                      htmlType="submit"
                      className="card-button btn-small basic-texts"
                    >
                      Send
                      {loading ? (
                        <LoadingOutlined
                          style={{ fontSize: 18, marginBottom: "5px" }}
                          spin
                        />
                      ) : (
                        <IoSend
                          style={{ marginLeft: "10px", marginBottom: "3px" }}
                        />
                      )}
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
