import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductItem from "./pages/ProductItem";
import Backet from "./pages/Backet";
import Like from "./pages/Like";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Sale from "./pages/Sale";
import User from "./pages/User";
import Smartphones from "./pages/category/Smartphones";
import Laptop from "./pages/category/Laptop";
import Parfume from "./pages/category/Parfume";
import SkinCare from "./pages/category/SkinCare";
import Watch from "./pages/category/Watch";
import Zakaz from "./pages/Zakaz";
import Login from "./components/Login";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
          children: [
            {
              path: ":id",
              element: <ProductItem />,
            },
          ],
        },
        {
          path:"/backet",
          element:<Backet/>
        },
        {
          path:"/like",
          element:<Like/>
        },
        {
          path:'/contacts',
          element:<Contacts/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/sale',
          element:<Sale/>
        },
        {
          path:'/user',
          element:<User/>
        },{
          path:'/phone',
          element:<Smartphones/>
        },
        {
          path:'/laptop',
          element:<Laptop/>
        },
        {
          path:'/parfume',
          element:<Parfume/>
        },
        {
          path:'/skincare',
          element:<SkinCare/>
        },
        {
          path:'/watch',
          element:<Watch/>
        },
        {
          path:'/zakaz',
          element:<Zakaz/>
        },
      ],
    },{
      path:"login",
      element:<Login/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
