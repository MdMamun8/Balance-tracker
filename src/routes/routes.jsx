import { createBrowserRouter } from "react-router-dom";
// import App from "../src/App";
// import Header from "../src/Layout/Header/Header";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import Registration from "../Pages/Registration/Registration";

import App from "../App";
import Users from "../Pages/Users/Users";
import UserDetails from "../Component/UserDetails/UserDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
        loader: ({ params }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.id}`
          );
          
        },
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
