import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import LiveGame from './pages/LiveGame';
import PostGame from './pages/PostGame';
import PreGame from './pages/PreGame';
import Signup from './components/Signup';
import About from './pages/About';
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
                path: '/signup',
                element: <Signup />,
            },
            {
                path: 'pregame',
                element: <PreGame />,
            },
            {
                path: 'postgame',
                element: <PostGame />,
            },
            {
                path: 'livegame',
                element: <LiveGame />,
            },
            {
                path:'about',
                element: <About />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
