import React from "react";
import "./Contact.css";
import { Button, Col, Input, Row, Form } from "antd";
import SocialLinks from "../SocialLinks/SocialLinks";
import Footer from "../footer/Footer";

const Contact = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    form.resetFields();
  };

  return (
    <>
      <div className="contact">
        <div className="contact_container">
          <Row gutter={[32, 0]} align="middle">
            <Col span={12} align="middle" style={{ padding: "0px 40px" }}>
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                >
                  Get in Touch!
                </h2>
                <span
                  style={{
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    letterSpacing: "1px",
                  }}
                >
                  Sunaina Kharangate - Software Developer
                </span>
                <br />
                <span
                  style={{
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    letterSpacing: "1px",
                  }}
                >
                  You can also reach me via
                </span>
                <br />
                <SocialLinks theme={"Dark"} />
              </div>
            </Col>
            <Col span={12} align="middle">
              <Form
                autoComplete="off"
                layout="vertical"
                form={form}
                style={{ width: "90%", padding: "0px 0px" }}
                onFinish={handleFinish}
              >
                <Form.Item
                  label=""
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input
                    placeholder="Name"
                    variant="outlined"
                    maxLength={150}
                  />
                </Form.Item>
                <Form.Item
                  label=""
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input placeholder="Email" variant="outlined" />
                </Form.Item>
                <Form.Item
                  label=""
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message!" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Your message"
                    rows={4}
                    variant="outlined"
                    maxLength={200}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ backgroundColor: "#1fb142" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Contact;
