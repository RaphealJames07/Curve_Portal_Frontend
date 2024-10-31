import {RouterProvider, createBrowserRouter} from "react-router-dom";

import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
import Verify from "./pages/auth/Verify";
import ErrorPage from "./components/ErrorPage";
import Register from "./pages/auth/Register";
import StudentHome from "./pages/student/StudentHome";
import StudentRoute from "./routes/StudentRoute";
import StudentOutlet from "./pages/student/StudentOutlet";
import TeachersRoute from "./routes/TeachersRoute";
import TeacherOutlet from "./pages/teacher/TeacherOutlet";
import AdminRoute from "./routes/AdminRoute";
import AdminOutlet from "./pages/admin/AdminOutlet";
import AdminHome from "./pages/admin/AdminHome";
import TestPage from "./pages/TestPage";
import Home from "./pages/home/pages/Home";
import HomeStructure from "./pages/home/components/HomeStructure";

const App = () => {
    const router = createBrowserRouter([
        //Below are routes that are public
        {
            path: "",
            errorElement: <ErrorPage />,
            element: <HomeStructure />,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'courses',
                    element:<Home/>
                },
                {
                    path:'about',
                    element:<Home/>
                },
                {
                    path:'contact',
                    element:<Home/>
                },
                {
                    path:'gallery',
                    element:<Home/>
                },
            ]
        },
       
        {
            path: "testpage",
            errorElement: <ErrorPage />,
            element: <TestPage />,
        },
        {
            path: "register",
            errorElement: <ErrorPage />,
            element: <Register />,
        },
        {
            path: "verify",
            errorElement: <ErrorPage />,
            element: <Verify />,
        },
        {
            path: "forget-password",
            errorElement: <ErrorPage />,
            element: <Verify />,
        },

        // below are student routes that only students have access to
        {
            path: "/student",
            errorElement: <ErrorPage />,
            element: <StudentRoute element={<StudentOutlet />}></StudentRoute>,
            children: [
                {
                    path: "dashboard",
                    element: <StudentHome />,
                },
            ],
        },

        // below are teacher routes that only teachers have access to
        {
            path: "/teacher",
            errorElement: <ErrorPage />,
            element: (
                <TeachersRoute element={<TeacherOutlet />}></TeachersRoute>
            ),
            children: [
                {
                    path: "dashboard",
                    element: <StudentHome />,
                },
            ],
        },

        // below are admin routes that only admin have access to
        {
            path: "/admin",
            errorElement: <ErrorPage />,
            element: <AdminRoute element={<AdminOutlet />}></AdminRoute>,
            children: [
                {
                    path: "dashboard",
                    element: <AdminHome />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
