import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Appointment from "../components/Appointment/Appointment";
import Dashboard from "../components/Dashboard/Dashboard";
import AppointMents from "../components/Dashboard/AppointMents";
import RequireAuth from "../components/Auth/RequireAuth";
import Login from "../components/page/Login";
import SignUp from "../components/page/SignUp";
import Users from "../components/Dashboard/Users";
import RequireAdmin from "../components/Auth/RequireAdmin";
import Services from "../components/Dashboard/Services";
import Contact from "../components/contact/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "appointment",
                element: <Appointment />
            },
            {
                path: 'dashboard',
                element: <RequireAuth>
                    <Dashboard />
                </RequireAuth>,
                children: [
                    {
                        index: true,
                        element: <RequireAuth>
                            <AppointMents />
                        </RequireAuth>
                    },
                    {
                        path: 'appointments',
                        element: <AppointMents />
                    },
                    {
                        path: 'users',
                        element: <RequireAdmin>
                            <Users />
                        </RequireAdmin>
                    },
                    {
                        path: 'services',
                        element: <RequireAdmin>
                            <Services />
                        </RequireAdmin>
                    }
                ]
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
])

export default router