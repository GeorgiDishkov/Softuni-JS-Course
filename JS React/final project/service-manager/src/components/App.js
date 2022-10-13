import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './HomePage/Home'
import Login from './Login/Login';
import { AuthProvider } from './context/authContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>HomePage</h1>
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

function App() {
  return (
    <AuthProvider>
      <div>
        <header>
          <Header />
        </header>
        <main id="main-content">
          <RouterProvider router={router} />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
