import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './Layout';
import PlayerPage from './pages/PlayerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: 'player/:dataToPass',
        element: <PlayerPage/>
      },
    ]
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
