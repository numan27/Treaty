import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu, Space } from "antd";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IMAGES from "../../assets/images";
import { logout } from "../../app/features/auth/auth.slice";
import SIDE_MENU_LIST from "./SideMenuItems";

const { Header, Content, Sider } = Layout;
function AppLayout({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);

  const logoutFun = () => {
    dispatch(logout());
  };

  let sideMenuItems = [];

  if (auth && auth.role && auth.role === "admin")
    sideMenuItems = [...SIDE_MENU_LIST.ADMIN, ...sideMenuItems];
  if (auth && auth.role && auth.role === "organization")
    sideMenuItems = [...SIDE_MENU_LIST.ORGANIZATION, ...sideMenuItems];

  const profileDropdown = (
    <Menu
      items={[
        {
          key: "1",
          label: "Profile",
        },
        {
          key: "2",
          label: (
            <Link
              className="text-dark"
              to={location.pathname}
              onClick={logoutFun}
            >
              Logout
            </Link>
          ),
        },
      ]}
    />
  );

  return (
    <Layout className="antd-custom-layout">
      <Sider
        breakpoint="lg"
        className="antd-custom-sidebar"
        collapsedWidth="0"
      >
        <div className="sidebar-inner-section">
          <div
            className="text-center user-info-section cursor-pointer"
            role="button"
            tabIndex="0"
          >
            <Avatar
              size={64}
              icon={<UserOutlined />}
              className="custom-bordered-avatar"
            />
          </div>
          <div className="mt-4">
            <Menu
              className="mt-2 custom-antd-menu custom-scroll"
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["STUDENT_DASHBOARD"]}
              selectedKeys={[location.pathname]}
              items={sideMenuItems}
              defaultOpenKeys={[location?.pathname?.split("/")?.[2] || ""]}
            />
          </div>
        </div>
      </Sider>
      <Layout>
        <div className="container p-0 w-100 h-100">
          <Header
            className="site-layout-sub-header-background custom-header d-flex align-items-center justify-content-between px-4"
            style={{
              padding: 0,
            }}
          >
            <h4>Page Name</h4>
            <Dropdown overlay={profileDropdown} trigger={["click"]}>
              <Space>
                <Avatar
                  src={IMAGES.STUDENT_COMMUNITY_PROFILE}
                  size={45}
                  icon={<UserOutlined />}
                />
                <IoIosArrowDown fill="white" />
              </Space>
            </Dropdown>
          </Header>
          <Content>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {children}
            </div>
          </Content>
          {/* <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </div>
      </Layout>
    </Layout>
  );
}
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
