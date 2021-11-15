import { Line } from "@ant-design/charts";
import { Card } from "antd";
import { useState, useEffect } from "react";
import { getDates } from "../utils/helpers";

export const WeightChart = ({ data: trackingData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const temp = trackingData.map(({ date, weight }) => {
      return {
        date,
        weight,
      };
    });

    const dates =
      temp.length > 0
        ? getDates(temp[0].date, temp[temp.length - 1].date, temp)
        : [];
    setData(dates);
  }, [trackingData]);

  const config = {
    data,
    height: 300,
    xField: "date",
    yField: "weight",
    point: {
      size: 5,
      shape: "round",
    },
    lineShape: {
      connectNulls: true,
    },
  };

  return (
    <Card title="Weight change">
      <Line {...config} />
    </Card>
  );
};
