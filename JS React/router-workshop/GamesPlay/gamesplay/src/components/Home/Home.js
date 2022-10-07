import { useLoaderData } from "react-router-dom";
import { getAllGames } from "../../util/apiReqests";
import HomeGame from "./HomeGame";

export default function Home() {
    const { data } = useLoaderData();
    console.log(data.length);
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
                    data.length > 0 ?
                        data.map(e => <HomeGame data={e} />)
                        : < p className="no-articles">No games yet</p>

                }
            </div>
        </section >
    )
}

export async function loader() {
    const data = await getAllGames();
    return { data };
}