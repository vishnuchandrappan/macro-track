import { Button, DatePicker, Drawer, Form, Input } from "antd";
import moment from "moment";
import { useState, useContext } from "react";
import { useFirestore } from "reactfire";
import { AuthContext } from "../services/AuthService";

export const NewTracking = ({ visible, onClose, data }) => {
  const dateFormat = "DD/MM/YYYY";
  const [loading, setLoading] = useState(false);
  const { username } = useContext(AuthContext);
  const fireStore = useFirestore().collection(username);
  const [date, setDate] = useState(moment(new Date()).format(dateFormat));
  const [initialValues, setInitialValues] = useState({});

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await fireStore.add({
        ...values,
        date,
        created_at: moment(new Date()).format(dateFormat),
      });
      onClose();
    } catch (error) {
      console.log("error in adding data");
    }
    setLoading(false);
  };

  const handleDateChange = (_, date) => {
    setDate(date);
    setInitialValues(async () => {
      let temp = await data.find((item) => item.date === date);
      if (temp) {
        delete temp.date;
        delete temp.created_at;
      } else {
        temp = {};
      }
      return temp;
    });
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      visible={visible}
      width="500"
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          date: moment(new Date(), dateFormat),
          ...initialValues,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          rules={[{ required: true, message: "Required!" }]}
          name="date"
          label="date"
        >
          <DatePicker
            style={{ width: "100%" }}
            onChange={handleDateChange}
            format={dateFormat}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Required!" }]}
          name="steps"
          label="Steps"
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Required!" }]}
          name="carbs"
          label="Carbs (g)"
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Required!" }]}
          name="protein"
          label="Protein (g)"
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Required!" }]}
          name="fat"
          label="Fat (g)"
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Required!" }]}
          name="weight"
          label="Weight (kg)"
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
