import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../component/user/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);