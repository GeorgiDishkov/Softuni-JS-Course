
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Home, { loader as homeLoader } from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreatePage from './components/Create/CreatePage';
import Cataloge from './components/Cataloge/Cataloge';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Details from "./components/Details/DetailsPage";
import './App.css';

homeLoader();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: homeLoader,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cataloge",
    element: <Cataloge />,
  },
  {
    path: "/details/:id",
    element: <Details />
  },
]);
function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
