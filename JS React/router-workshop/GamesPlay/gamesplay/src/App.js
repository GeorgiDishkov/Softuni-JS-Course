import { AuthProvider } from './context/AuthContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Home, { loader as homeLoader } from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreatePage from './components/Create/CreatePage';
import Cataloge, { loader as catalogeLoader } from './components/Cataloge/Cataloge';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DetailsPage, { loader as detailLoader } from './components/Details/DetailsPage';
import EditPage, { loader as editLoader } from './components/EditPage/EditPage';


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
    path: "/edit/:id",
    element: <EditPage />,
    loader: editLoader,
  },
  {
    path: "/cataloge",
    element: <Cataloge />,
    loader: catalogeLoader,
    errorElement: <ErrorPage />
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
    loader: detailLoader,
  },
]);

function App() {

  return (
    <AuthProvider >
      <div id="box">
        <Header />
        <main id="main-content">
          <RouterProvider router={router} />
        </main>
      </div>
    </AuthProvider >

  );
}

export default App;
