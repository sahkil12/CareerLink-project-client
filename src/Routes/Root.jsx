import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import PrivateRoute from "../Private/PrivateRoute";
import Loader from "../Components/Loader";
import JobDetails from "../Components/JobDetails";
import ApplyJobs from "../Components/Applyjobs";
import Jobs from "../pages/Jobs/Jobs";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/Addjobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/MyPostedJobs/ViewApplications";


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
          loader: ({params})=> fetch(`https://career-link-project-server.vercel.app/jobs/${params.id}`) ,
          element:<JobDetails></JobDetails>,
          hydrateFallbackElement: <Loader></Loader>
        },
        {
          path:'applyJob/:id',
          loader: ({params})=> fetch(`https://career-link-project-server.vercel.app/jobs/${params.id}`),
          element:<PrivateRoute> <ApplyJobs></ApplyJobs> </PrivateRoute>,
          hydrateFallbackElement: <Loader></Loader>
        },
        {
          path:'jobs',
          element:<Jobs></Jobs>,
          loader: ()=> fetch('https://career-link-project-server.vercel.app/jobs'),
          hydrateFallbackElement: <Loader></Loader>
        },
        {
          path:'myApplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'applications/:job_id',
          element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader: ({params})=>fetch(`https://career-link-project-server.vercel.app/applications/job/${params.job_id}`),
          hydrateFallbackElement: <Loader></Loader>
        },
        {
          path:'addJobs',
          element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
        },
        {
          path:'myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
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
