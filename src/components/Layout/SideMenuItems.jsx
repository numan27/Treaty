/** @format */
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import PATH from "../../utils/path";

const ADMIN_MENU = [
  {
    key: PATH.ADMIN_DASHBOARD,
    icon: <MdDashboard size={30} />,
    label: (
      <Link className="primary-blue-color" to={PATH.ADMIN_DASHBOARD}>
        Dashboard
      </Link>
    ),
  },
];

const SIDE_MENU_LIST = {
  ADMIN: ADMIN_MENU,
};

export default SIDE_MENU_LIST;
