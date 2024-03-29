import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AppLayOut from "../ui/AppLayOut";
import Account from "../pages/Account";
import Bookings from "../pages/Bookins";
import Cabins from '../pages/Cabins';
import Settings from '../pages/Settings';
import Users from '../pages/Users';
import Logins from '../pages/Login';
import  PageNotFound from '../pages/PageNotFound'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
     
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "login",
    element: <Logins />,
  },
  {
    path: "*",
    element:<PageNotFound />
  },
]);
