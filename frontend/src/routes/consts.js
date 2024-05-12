import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Calendar from "../pages/Calendar/Calendar";
import BasicLayout from "../layouts/BasicLayout";
import AuthLayout from "../layouts/AuthLayout";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  CALENDAR: "/calendar",
};

export const routes = [];
export const protectedRoutes = [
  {
    path: ROUTES.HOME,
    Component: Home,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.CALENDAR,
    Component: Calendar,
    Layout: BasicLayout,
  },
];

export const unProtectedRoutes = [
  {
    path: ROUTES.LOGIN,
    Component: SignIn,
    Layout: AuthLayout,
  },
  {
    path: ROUTES.REGISTER,
    Component: SignUp,
    Layout: AuthLayout,
  },
];

export const navigationBarLinks = [
  {
    title: "Food plan",
    path: ROUTES.HOME,
  },
  {
    title: "Calendar",
    path: ROUTES.CALENDAR,
  },
];
