import { useState } from 'react';

import Collection from "./components/collection/Colllection";
import Create from "./components/Create";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
// import Edit from "./components/Edit"
// import GameDetails from "./components/GameDetails";
import Catalogue from "./components/Catalog";


function App() {

  const [page, setPage] = useState(`/`);

  const routes = {
    "/": <Collection />,
    "/login": <LoginPage />,
    "/register": <Register />,
    "/create": <Create />,
    "/catalog": <Catalogue />,
    // "/edit": <Edit />,
    // "/game-detail": <GameDetails />,
  }

  const router = (e) => {
    e.preventDefault();
    if (e.target.tagName == "A") {
      const path = new URL(e.target)
      setPage(path.pathname);
    }
  }


  return (
    <div id="box">

      <Header router={router} />

      <main id="main-content">
        {routes[page]}
      </main>


    </div>
  );
}

export default App;
