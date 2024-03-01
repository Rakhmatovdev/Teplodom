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
import Products1Detail from "./features/products/Products1Detail";
import Products1 from './features/products/Products1';
import Products2 from './features/products/Products2';
import Products2Detail from './features/products/Products2Detail';

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
          path: "/products",
          element: <ProductsLayout />,
          children: [
            {
              path: "products1",
              element: <Products1 />,
              },
            {
              path: "products2",
              element: <Products2/>,
              },
                {
                  path: ":p1Id",
                  element: <Products1Detail />,
                },
                {
                  path: ":p2Id",
                  element: <Products2Detail />,
                }, 
              
            
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
