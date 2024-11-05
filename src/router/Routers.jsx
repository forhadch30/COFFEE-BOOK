import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import CoffeeCard from "../components/CoffeeCard";
// import ErrorPage from "../components/ErrorPage";
import CoffeeDetails from "../pages/CoffeeDetails";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <CoffeeCard></CoffeeCard>,
                        loader: () => fetch('/coffees.json'),
                    },
                    {
                        path: '/',
                        element: <CoffeeCard></CoffeeCard>,
                        loader: () => fetch('/coffees.json'),
                    }
                ]
            },
            {
                path: '/coffees',
                element: <Coffees></Coffees>,
                loader: () => fetch('/coffees.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/coffee/:id',
                element:<CoffeeDetails></CoffeeDetails>,
                loader: () => fetch('/coffees.json')
            }

        ]
    },
]);

export default routers