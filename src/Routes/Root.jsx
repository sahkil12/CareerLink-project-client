import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import JobDetails from "../context/JobDetails";
import PrivateRoute from "../Private/PrivateRoute";
import Loader from "../Components/Loader";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index: true,
            element:<Home></Home>
        },
        {
          path:'jobDetails/:id',
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`) ,
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          hydrateFallbackElement: <Loader></Loader>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'login',
          element:<Login></Login>
        }
    ]
  },
  
]);
