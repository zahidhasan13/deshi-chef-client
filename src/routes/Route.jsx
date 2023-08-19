import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound"
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
        {
          path: "recipe/:id",
          element: <ChefRecipe></ChefRecipe>,
          loader: ({params}) => fetch(`https://deshi-chef-server-durdantozahid-gmailcom.vercel.app/recipe/${params.id}`)
        },
        {
          path: "/recipeDetails/:id",
          element: <RecipeDetails></RecipeDetails>,
          loader: ({params}) => fetch(`https://deshi-chef-server-durdantozahid-gmailcom.vercel.app/recipeDetails/${params.id}`)
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
  ]);

  export default router;