import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddProduct from './components/AddProduct';
import ProductCatalog from './components/Product/ProductCatalog';
import Layout from './Layout';
import Cart from './components/Cart/Cart';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';
import Inventory from './components/Inventory/Inventory';
import { InventoryProvider } from './context/InventoryContext';
import { SalesProvider } from './context/SalesContext';
import Sales from './components/Sales/Sales';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isLoggedIn = (() => {
    try { return localStorage.getItem('isLoggedIn') === 'true'; } catch (e) { return false; }
  })();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <ProductCatalog />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
])

const App = () => {
  return (
    <InventoryProvider>
        <CartProvider>
          <SalesProvider>
            <RouterProvider router={router} />
          </SalesProvider>
        </CartProvider>
    </InventoryProvider>
  );
}

export default App
