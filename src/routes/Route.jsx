import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
      ]
    },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
  ]);

  export default router;