import LOGIN from "./Login";
import NoPageFound from "./NoPageFound";
import ADMIN_PAGES from "./Admin";
import Treaty from './Treaty'

const WEB_PAGES = {
  // AUTH PAGES
  LOGIN,

  ADMIN_DASHBOARD: ADMIN_PAGES.DASHBOARD,

  Treaty,

  NO_PAGE_FOUND: NoPageFound,
};
export default WEB_PAGES;
