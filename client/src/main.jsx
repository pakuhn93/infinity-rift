import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import PreGame from './pages/PreGame';

import App from './App.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: '',
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/pregame',
                element: <PreGame />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
