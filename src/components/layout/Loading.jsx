import { Spin } from "antd";

export const Loading = (isSpinning = true) => {
  return <Spin size="large" spinning={isSpinning} />;
};

export const LoadingPage = () => {
  return (
    <div className="loading-page">
      <Loading />
    </div>
  );
};
