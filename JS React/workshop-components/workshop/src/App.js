import { useState } from 'react';

import Collection from "./components/collection/Colllection";
import Create from "./components/Create";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import Edit from "./components/Edit"
import GameDetails from "./components/GameDetails";
import Catalogue from "./components/Catalog";


function App() {

  const [page, setPage] = useState(`/`);


  const rootChangeEvent = (e) => {
    e.preventDefault();
    if (e.target.tagName == "A" || e.target.tagName == "BUTTON") {
      const path = new URL(e.target)
      const splitedPath = path.pathname.split(`/`)
      console.log(splitedPath[1], splitedPath);
      setPage(path.pathname);
    }
  }
  const routes = {
    "/": <Collection rootChangeEvent={rootChangeEvent} />,
    "/login": <LoginPage />,
    "/register": <Register />,
    "/create": <Create />,
    "/catalog": <Catalogue />,
    "/edit": <Edit />,
    "/details": <GameDetails />,
  }


  return (
    <div id="box">

      <Header router={rootChangeEvent} />

      <main id="main-content">
        {routes[page]}
      </main>


    </div>
  );
}

export default App;
