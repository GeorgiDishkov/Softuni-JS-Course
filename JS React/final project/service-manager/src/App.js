import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/HomePage/Home'
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  }
]);

function App() {
  return (
    <div>
      <header>
        <Login />
      </header>
      <main id="main-content">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
