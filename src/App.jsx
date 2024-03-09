import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Login from "./components/Login";
import New from "./pages/hero/New";
import Postavshik from "./pages/hero/Postavshik";
import Vozvrat from "./pages/hero/Vozvrat";
import Contacts from "./pages/hero/Contacts";
import PageNotFound from "./components/error/PageNotFound";
import ProductsLayout from "./layout/ProductsLayout";
import Backet from './features/backet/Backet';
import Like from "./features/like/Like";
import Sale from "./features/sale/Sale";
import About from './pages/About';
import User from './features/user/User';
import Category from './features/category/Category';
import Products from "./features/products/Products";
import ProductsDetail from "./features/products/ProductsDetail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/backet",
          element: <Backet />,
        },
        {
          path: "/like",
          element: <Like />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/sale",
          element: <Sale />,
        },
        {
          path: "/user",
          element: <User/>,
        },
        {
          path: "/new",
          element: <New />,
        },
        {
          path: "/postavshik",
          element: <Postavshik />,
        },
        {
          path: "/vozvrat",
          element: <Vozvrat />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/products",
          element: <ProductsLayout />,
          children: [
            {
              path: "products1",
              element: <Products />,
              children: [
                {
                  path: ":pId",
                  element: <ProductsDetail />,
                }
              ]
              },
              {
                path: ":pId",
                element: <ProductsDetail />,
              }
          ],
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
