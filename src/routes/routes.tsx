import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";

export const routes = [
  {
    path: '/',
    element: <Layout/>,
    children: [{path: '/', element: <Home/>}],
  }
]
