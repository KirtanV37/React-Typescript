import { APP_TITLE, ROLES } from "../utils/constants";

export const PLAIN_ROUTES = {
  root: {
    path: "/",
    url: "/",
    title: APP_TITLE,
  },
  layout: {
    path: "/",
  },
  HOME: {
    index: true,
    title: "Home",
    url: "/",
  },
  EMAIL_VERIFICATION: {
    title: "Email Verification",
    path: "/email-verification",
    url: "/email-verification",
  },
  PRIVACY_POILICY: {
    title: "Privacy Policy",
    path: "/privacy-policy",
    url: "/privacy-policy",
  },
  TERMS_AND_CONDITIONS: {
    title: "Terms and Condtions",
    path: "/terms-and-conditions",
    url: "/terms-and-conditions",
  },
};

export const AUTH_ROUTES = {
  layout: {},
  LOGIN: {
    title: "Login",
    path: "/login",
    url: "/login",
  },
  REGISTER: {
    title: "Register",
    path: "/register",
    url: "/register",
  },
  FORGOT_PASSWORD: {
    title: "Forgot Password",
    path: "/forgot-password",
    url: "/forgot-password",
  },
  RESET_PASSWORD: {
    title: "Reset Password",
    path: "/reset-password",
    url: "/reset-password",
  },
};

export const PRIVATE_ROUTES = {
  layout: {
    path: "/",
  },
  DASHBOARD: {
    path: "/dashboard",
    roles: Object.values(ROLES),
    title: "Dashboard",
    url: "/dashboard",
  },
  USERS: {
    path: "/users",
    roles: Object.values(ROLES),
    title: "Users",
    url: "/users",
  },
  ADD_USERS: {
    path: "/users/add",
    roles: Object.values(ROLES),
    title: "Add Users",
    url: "/users/add",
  },
  ACCOUNT: {
    path: "/account",
    roles: Object.values(ROLES),
    title: "Account",
    url: "/account",
  },
  SETTINGS: {
    path: "/settings",
    roles: Object.values(ROLES),
    title: "Settings",
    url: "/settings",
  },
};
