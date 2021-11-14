import { Card, Button, Row, Col } from "antd";
import { useState, useContext, useEffect } from "react";
import { DataTable } from "../components/DataTable";
import { NewTracking } from "../components/NewTracking";
import { WeightChart } from "../components/WeightChart";
import { useFirestoreData } from "../hooks/useFirestoreData";
import { AuthContext } from "../services/AuthService";
import { sortByDate } from "../utils/helpers";
export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { username } = useContext(AuthContext);
  const data = sortByDate(useFirestoreData(username));
  const [totalSteps, setTotalSteps] = useState(0);

  useEffect(() => {
    let total = 0;
    data.forEach(({ steps }) => {
      total += steps;
    });
    setTotalSteps(total);
  }, [data]);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div>
      <Card
        title="Summary"
        extra={
          <Button type="primary" size="large" onClick={toggleModal}>
            Add data
          </Button>
        }
      >
        <Row>
          <Col span={12}>
            <h1>
              Average Steps:{" "}
              {totalSteps ? totalSteps / data.length : "Not available"}
            </h1>
          </Col>
          <Col span={12}>
            <WeightChart data={data} />
          </Col>
        </Row>
      </Card>

      <DataTable data={data} />
      <NewTracking visible={showModal} onClose={toggleModal} />
    </div>
  );
};
