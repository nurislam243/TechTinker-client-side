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

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services/:id',
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