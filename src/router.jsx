import { createBrowserRouter } from "react-router-dom";
import AdminCreate from "./components/admin/Create";
import AdminDelete from "./components/admin/Delete";
import AdminDetail from "./components/admin/Detail";
import AdminUpdate from "./components/admin/Update";
import GoodsCreate from "./components/goods/Create";
import GoodsDelete from "./components/goods/Delete";
import GoodsDetail from "./components/goods/Detail";
import GoodsUpdate from "./components/goods/Update";
import Layout from "./components/layout";
import Admin from "./router/Admin";
import Chart from "./router/Chart";
import Goods from "./router/Goods";
import Home from "./router/Home";
import Log from "./router/Log";
import Login from "./router/Login";
import Setting from "./router/Setting";
import Personal from "./router/Personal";
import ChangePassword from "./components/personal/ChangePassword";
import SignUp from "./router/SignUp";
import ErrorPage from "./router/ErrorPage";

const initailRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: ":username",
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "goods",
            children: [
              {
                index: true,
                element: <Goods />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <GoodsDetail />,
                  },
                  {
                    path: "update",
                    element: <GoodsUpdate />,
                  },
                ],
              },
              {
                path: "delete",
                element: <GoodsDelete />,
              },
              {
                path: "create",
                element: <GoodsCreate />,
              },
            ],
          },
          {
            path: "log",
            element: <Log />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "personal",
            children: [
              {
                index: true,
                element: <Personal />,
              },
              {
                path: "changepassword",
                element: <ChangePassword />,
              },
            ],
          },
          {
            path: "admin",
            children: [
              {
                index: true,
                element: <Admin />,
              },
              {
                path: ":name",
                children: [
                  {
                    index: true,
                    element: <AdminDetail />,
                  },
                  {
                    path: "update",
                    element: <AdminUpdate />,
                  },
                ],
              },
              {
                path: "delete",
                element: <AdminDelete />,
              },
              {
                path: "create",
                element: <AdminCreate />,
              },
            ],
          },
          {
            path: "setting",
            element: <Setting />,
          },
        ],
      },
    ],
  },
]);

export default initailRouter;
