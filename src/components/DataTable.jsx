import { Card, Table } from "antd";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Steps",
    dataIndex: "steps",
    key: "steps",
  },
  {
    title: "Carbs (g)",
    dataIndex: "carbs",
    key: "carbs",
  },
  {
    title: "Protein (g)",
    dataIndex: "protein",
    key: "protein",
  },
  {
    title: "Fat (g)",
    dataIndex: "fat",
    key: "fat",
  },
  {
    title: "Weight (kg)",
    dataIndex: "weight",
    key: "weight",
  },
];

export const DataTable = ({ data }) => {
  return (
    <Card title="Tracked data">
      <Table dataSource={data} columns={columns} />
    </Card>
  );
};
