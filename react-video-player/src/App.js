import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      }]
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
