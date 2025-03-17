import {RouterProvider, createBrowserRouter} from "react-router-dom";

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
import AdminHome from "./pages/admin/pages/homeA/AdminHome";
import TestPage from "./pages/TestPage";
import Home from "./pages/home/pages/Home";
import HomeStructure from "./pages/home/components/HomeStructure";
import Services from "./pages/home/pages/Services";
import About from "./pages/home/pages/About";
import ContactUs from "./pages/home/pages/ContactUs";
import Gallery from "./pages/home/pages/Gallery";
// import TeacherHome from "./pages/teacher/teacherhome/TeacherHome";
import AttendanceRegister from "./pages/attendance/AttendanceRegister";
import LoginAttendance from "./pages/attendance/LoginAttendance";
import TeacherHome from "./pages/teacher/pages/teacherhome/TeacherHome";
import AttendanceT from "./pages/teacher/pages/attendanceT/AttendanceT";
import AnalyticsT from "./pages/teacher/pages/analyticsT/AnalyticsT";
import StudentsT from "./pages/teacher/pages/studentsT/StudentsT";
import Calendar from "./pages/teacher/pages/calendarT/Calendar";
import SettingsT from "./pages/teacher/pages/settingsT/SettingsT";
import StudentsA from "./pages/admin/pages/studentsA/StudentsA";
import CalendarA from "./pages/admin/pages/calendar/CalendarA";
import Alumni from "./pages/admin/pages/alumniA/Alumni";
import SettingsA from "./pages/admin/pages/settings/SettingsA";

const App = () => {
    const router = createBrowserRouter([
        //Below are routes that are public
        {
            path: "",
            errorElement: <ErrorPage />,
            element: <HomeStructure />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "services",
                    element: <Services />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <ContactUs />,
                },
                {
                    path: "gallery",
                    element: <Gallery />,
                },
            ],
        },

        {
            path: "testpage",
            errorElement: <ErrorPage />,
            element: <TestPage />,
        },
        {
            path: "attendance/login",
            errorElement: <ErrorPage />,
            element: <LoginAttendance />,
        },
        {
            path: "attendance/register",
            errorElement: <ErrorPage />,
            element: <AttendanceRegister />,
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
                    element: <TeacherHome />,
                },
                {
                    path: "attendance",
                    element: <AttendanceT />,
                },
                {
                    path: "analytics",
                    element: <AnalyticsT />,
                },
                {
                    path: "students",
                    element: <StudentsT />,
                },
                {
                    path: "calendar",
                    element: <Calendar />,
                },
                {
                    path: "settings",
                    element: <SettingsT />,
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
                {
                    path: "students",
                    element: <StudentsA />,
                },
                {
                    path: "calendar",
                    element: <CalendarA />,
                },
                {
                    path: "alumnis",
                    element: <Alumni />,
                },
                {
                    path: "settings",
                    element: <SettingsA />,
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
