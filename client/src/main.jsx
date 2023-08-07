import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import LiveGame from './pages/LiveGame';
import Test from './pages/test';
import PostGame from './pages/PostGame';

import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/test',
        element: <Test />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/livegame',
        element: <LiveGame />
      },
      {
        path: '/postgame',
        element: <PostGame />
      }
     ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
