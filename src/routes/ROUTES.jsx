import MainPage from "../pages/index.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import AdminPage from "../components/AdminComponents/AdminPage/index.jsx";
import HomePage from "../pages/UserPages/HomePage/index.jsx";
import FormPage from "../pages/UserPages/FormPage/index.jsx";


const router = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path:"/",
                element: <HomePage/>,
            },
            {
                path: "/form",
                element: <FormPage/>
            }
        ]
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <AdminPage/>
            </ProtectedRoute>
        ),
        children: [

        ]
    },
    // {
    //   path: "/login",
    //   element: <AdminLogin/>
    // },
    // {
    //     path: "*",
    //     element: <NotFound/>
    // }
];

export default router;
