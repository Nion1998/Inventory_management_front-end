import logo from "./logo.svg";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import CommonLayout from "./Layouts/CommonLayouts/CommonLayout";
import SignIn from "./Pages/CommonPage/SingIn/SignIn";
import NotFound from "./Pages/CommonPage/NotFound/NotFound";
import ForgotPassword from "./Pages/CommonPage/ForgotPassword/ForgotPassword";
import VerifyEmail from "./Pages/CommonPage/VerifyEmail/VerifyEmail";
import NewPassword from "./Pages/CommonPage/NewPassword/NewPassword.jsx";
import PrivateAdmin from "./Routers/PrivateAdmin";
import AdminLayouts from "./Layouts/AdminLayouts/AdminLayouts";
import Dashboard from "./Pages/AdminPage/Dashboard/Dashboard";
import ManageStaffs from "./Pages/AdminPage/ManageStaffs/ManageStaffs";
import ManageStaffsLayout from "./Layouts/AdminLayouts/ManageStaffsLayout";
import Categorieslayouts from "./Layouts/AdminLayouts/Categorieslayouts";
import Category from "./Pages/AdminPage/Categories/Category";
import CategoryAdd from "./Pages/AdminPage/Categories/CategoryAdd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout></CommonLayout>,
      children: [
        {
          path: "",
          element: <SignIn></SignIn>,
        },
        {
          path: "forgot",
          element: <ForgotPassword></ForgotPassword>,
        },
        {
          path: "verify-code",
          element: <VerifyEmail></VerifyEmail>,
        },
        {
          path: "new-password",
          element: <NewPassword></NewPassword>,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <PrivateAdmin>
          <AdminLayouts></AdminLayouts>
        </PrivateAdmin>
      ),
      children: [
        {
          path: "",
          element: <Dashboard></Dashboard>,
        },
        // {
        //   path: "manage-staffs",
        //   element: <ManageStaffsLayout></ManageStaffsLayout>,
        //   children: [
        //     {
        //       path: "",
        //       loader: () => {
        //         const token = `Token ${localStorage.getItem("_authToken")}`;
        //         return fetch(
        //           "https://secom.privateyebd.com/api/v1/notification/admin/notification/",
        //           {
        //             headers: {Authorization: token},
        //           }
        //         );
        //       },
        //       element: <ManageStaffs></ManageStaffs>,
        //     },
        //   ],
        // },
        {
          path: "categories",
          element: <Categorieslayouts></Categorieslayouts>,
          children: [
            {
              path: "",
              loader: () => {
                const token = `Token ${localStorage.getItem("_authToken")}`;
                return fetch(
                  "https://inventory.privateyebd.com/api/v1/inventory/admin/category/",
                  {
                    headers: {Authorization: token},
                  }
                );
              },
              element: <Category></Category>,
            },
            {
              path: "category-add",
              element: <CategoryAdd></CategoryAdd>,
            },
          ],
        },
      ],
    },

    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </div>
  );
}

export default App;
