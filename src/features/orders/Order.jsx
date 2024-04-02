import { useParams } from "react-router-dom";

const Order = () => {
  const params = useParams();
  return <div>{params.id} is your order!</div>;
};

export default Order;
