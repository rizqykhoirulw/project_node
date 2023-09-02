import Home from "./router/Home";
import "@fontsource/poppins";
import theme from './theme';
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import Singlepage from "./components/Singlepage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Paket from "./components/Paket";
import Addcontent from "./components/Addcontent";
import Update from "./components/Update";
import Adminpage from "./components/Adminpage";
import Register from "./components/Register";

const Layout = () => {
  return(
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single",
        element: <Singlepage />
      },
      {
        path: "/paket",
        element: <Paket />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/add",
    element: <Addcontent/>
  },
  {
    path: "/update",
    element: <Update />
  }, 
  {
    path: "/admpg",
    element: <Adminpage />
  },
  {
    path: "/register",
    element: <Register />
  }
])

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}



export default App;
