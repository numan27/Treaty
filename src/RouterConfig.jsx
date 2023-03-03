/** @format */

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Authorization/ProtectedRoute.jsx";
import PublicRoute from "./components/Authorization/PublicRoute.jsx";
import WEB_PAGES from "./pages";
import PATH from "./utils/path";

function RouterConfig() {
  return (
    <Routes>
      {/* AUTH ROUTES START */}
      <Route
        path={PATH.LOGIN}
        element={<PublicRoute element={<WEB_PAGES.LOGIN.INDEX />} />}
      />
      {/* AUTH ROUTES END */}
      <Route
        path={PATH.Treaty}
        element={<PublicRoute element={<WEB_PAGES.Treaty.INDEX />} />}
      />
      <Route
        path={PATH.ADMIN_DASHBOARD}
        element={
          <ProtectedRoute element={<WEB_PAGES.ADMIN_DASHBOARD.INDEX />} />
        }
      />
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;
