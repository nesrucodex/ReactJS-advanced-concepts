import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import { node } from "prop-types";

const ProtectedRoute = ({ children }) => {
  const userName = useSelector((state) => state.user.name);

  if (userName === "") return <Navigate to="/" />;
  return children;
};

ProtectedRoute.propTypes = {
  children: node,
};

export default ProtectedRoute;
