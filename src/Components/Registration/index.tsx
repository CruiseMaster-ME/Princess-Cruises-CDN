import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { Button, Form } from "antd";
import { Input } from "antd";
import { notification } from "antd";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LoadingOutlined } from "@ant-design/icons";

type NotificationType = "success" | "info" | "warning" | "error";

function Registraion() {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Welcome Aboard!",
      description:
        "Thank you for joining our cruise community! Prepare to receive exclusive booking alerts and exciting offers. Welcome aboard!",
    });
  };

  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Invalid Email!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

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
        "template_jaw23y4",
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

  const [form] = Form.useForm();

  return (
    <div className="registration column-padding bg-grey">
      {contextHolder}
      <Container>
        <div className="flex center flex-column">
          <Fade duration={2000} triggerOnce>
            <h2 className="bold-700 heading mb-32 text-align-center">
              Join Our Community
            </h2>
          </Fade>
        </div>
        <Row>
          <Col className="flex center">
            <Form
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
              form={form}
              layout="vertical"
              style={{ width: "100%", maxWidth: "70vh" }}
            >
              <Form.Item
                name={"email_user"}
                rules={[{ type: "email", required: true }]}
                className="mb-32"
              >
                <Input
                  placeholder="Your Email"
                  className="bold-500"
                  style={{ borderRadius: 0 }}
                />
              </Form.Item>

              <Form.Item className="flex center mt-16">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  htmlType="submit"
                  className="card-button btn-small basic-texts"
                >
                  Submit
                  {loading ? (
                    <LoadingOutlined
                      style={{ fontSize: 18}}
                      spin
                    />
                  ) : null}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registraion;
