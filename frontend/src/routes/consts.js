import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Calendar from "../pages/Calendar/Calendar";
import BasicLayout from "../layouts/BasicLayout";
import AuthLayout from "../layouts/AuthLayout";
import Nutrition from "../pages/Nutrition/Nutrition";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  CALENDAR: "/calendar",
  NUTRITION: "/nutrition",
};

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
  {
    path: ROUTES.NUTRITION,
    Component: Nutrition,
    Layout: BasicLayout,
  },
];

export const signedInRoutes = [
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
    title: "Food List",
    path: ROUTES.HOME,
  },
  {
    title: "Calendar",
    path: ROUTES.CALENDAR,
  },
  {
    title: "Nutrition",
    path: ROUTES.NUTRITION,
  },
];
