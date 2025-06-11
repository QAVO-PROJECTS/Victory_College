import MainPage from "../pages/index.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import AdminPage from "../components/AdminComponents/AdminPage/index.jsx";


const router = [
    {
        path: '/',
        element: <MainPage/>,
        children: [


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
