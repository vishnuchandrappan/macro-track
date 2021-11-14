import { Card, Form, Input, Button } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../services/AuthService";

export const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = ({ username }) => {
    setAuth(username);
  };

  return (
    <div className="app-container flex-centered full-page absolute">
      <Card title="Choose / Enter Your Username" className="min-50">
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ username: "" }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
