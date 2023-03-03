// import { useEffect } from "react";
import { Form, Input, Button, Row, Col, Typography, notification } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../app/features/auth/auth.slice";

function Index() {
  const dispatch = useDispatch();
  // const { message } = useSelector((state) => state.auth);

  const openNotificationWithIcon = (type,msg) => {
    notification[type]({
      message: msg,
    });
  };
  // useEffect(() => {
  //   if (message !== "") {
  //     openNotificationWithIcon("error");
  //   }
  // }, [message]);
  const onFinish = (data) => {
    dispatch(
      login({ payload: data, callBackMessage: openNotificationWithIcon })
    );
  };

  return (
    <div className="loginComponent pt-2">
      <div className="container">
        <div className="loginForm">
          <div className="w-100">
            <Row justify="center" align="center">
              <Col
                className="align-self-center px-3 px-lg-5"
                xs={24}
                sm={24}
                md={10}
                lg={10}
                xl={10}
              >
                <Typography.Title className="welcome-text-login mb-5" level={1}>
                  Welcome
                </Typography.Title>
                <Form
                  name="basic"
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      className="input-transperant"
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Password"
                      className="input-transperant"
                    />
                  </Form.Item>
                  <div className="d-flex justify-content-end">
                    <Link to="/login/forgot-password">
                      <Typography.Title
                        level={4}
                        className="text-dark mb-3 mt-0 cursor-pointer"
                      >
                        Forgot Password?
                      </Typography.Title>
                    </Link>
                  </div>
                  <Button
                    type="primary"
                    className="login-btn"
                    htmlType="submit"
                  >
                    Sign in
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Index;
