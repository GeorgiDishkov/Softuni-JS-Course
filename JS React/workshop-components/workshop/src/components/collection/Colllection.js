import { useEffect, useState } from "react";
import { getFirstThree } from "../../services/reqester";
import CollectionTemplate from "./CollectionTemplate";

const Collection = ({
    rootChangeEventHendler,
}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getFirstThree().then(result => {
            setGames(result);
        })
    }, [])
    console.log(games);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {
                    games.length > 0
                        ? games.map(x => <CollectionTemplate key={x._id} data={x} rootChangeEventHendler={rootChangeEventHendler} />)
                        : <p className="no-articles">No games yet</p>
                }
            </div>
        </section>

    )
}
export default Collection;