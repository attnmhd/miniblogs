import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Pages/Login";
import ErrorSection7 from "./components/Pages/404";
import SignUp from "./components/Pages/SignUp";
import Article from "./components/Pages/Article";
import { ComplexNavbar } from "./components/Admin/Dashboard";
import Form from "./components/Admin/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorSection7 />
  },
  {
    path : "/Login",
    element : <Login />,
  },
  {
    path : "/signup",
    element : <SignUp />,
  },
  {
    path : "/posts/:id",
    element : <Article />,
  },
  {
    path : "/admin",
    element : <ComplexNavbar />,
  },
  {
    path : "/admin/article/:id",
    element : <Form />,
  },
]);

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} /> 
    </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
