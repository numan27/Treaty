import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import FullscreenLoader from "./FullScreenLoader.jsx";
import PATH from "../../utils/path.js";

function PublicRoute({ element }) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate(PATH.ADMIN_DASHBOARD);
    }
  }, [user, navigate]);

  if (user === undefined) return <FullscreenLoader />;

  return element;
}

PublicRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PublicRoute;
