import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';;
import PrivateRoute from './PrivateRoute';
import AddService from '../pages/Dashboard/AddService';
import ServiceDetails from '../pages/Services/ServiceDetails';
import ManageService from '../pages/Dashboard/ManageService';
import BookService from '../pages/Services/BookService';
import Booked from '../pages/Dashboard/Booked';
import ServiceToDo from '../pages/Dashboard/ServiceToDo';
import Register from '../pages/Auth/Register';
import AllServices from '../pages/Services/AllServices';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Spinner from '../components/Ui/Spinner';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/services',
                loader:  () => fetch('https://techtinker-server.vercel.app/services'),
                HydrateFallback: Spinner,
                Component: AllServices
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://techtinker-server.vercel.app/services/${params.id}`,{
                                            credentials: "include"
                                        }), 
                HydrateFallback: Spinner,
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/manage-service',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path: '/book-service/:id',
                element: <PrivateRoute><BookService></BookService></PrivateRoute>
            },
            {
                path: '/my-bookings',
                element: <PrivateRoute><Booked></Booked></PrivateRoute>
            },
            {
                path: '/service-to-do',
                element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    },
]);


export default router;