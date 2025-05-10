import { createHashRouter, RouterProvider } from "react-router-dom"
import NotFound from "./modules/Shared/NotFound/NotFound"
import AuthLayout from "./modules/Shared/AuthLayout/AuthLayout"
import ForgetPassword from "./modules/Authentication/ForgetPassword/ForgetPassword"
import Register from "./modules/Authentication/Register/Register"
import ResetPassword from "./modules/Authentication/ResetPassword/ResetPassword"
import ChangePassword from "./modules/Authentication/ChangePassword/ChangePassword"
import Login from "./modules/Authentication/Login/Login"
// import ProtectedRoute from "./modules/Shared/ProtectedRoute/ProtectedRoute";
import MasterLayout from "./modules/Shared/MasterLayout/MasterLayout"
import InstructorsDashboard from "./modules/Instructors/InstructorsDashboard/InstructorsDashboard"

function App() {

  const routes = createHashRouter([{
    path: "",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "change-password", element: <ChangePassword /> },
    ]
  },
  {
     path:"/dashboard",
    element: <MasterLayout />,
    errorElement:<NotFound/>,
    children:[
      {index:true, element:<InstructorsDashboard/>},
    ]
  }
])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
