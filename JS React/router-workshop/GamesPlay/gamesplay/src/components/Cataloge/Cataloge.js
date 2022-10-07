import { useLoaderData } from "react-router-dom";
import { getCatalogeGames } from "../../util/apiReqests";
import CatalogeGame from "./CatalogeGame";

const Cataloge = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {
                data.length > 0 ? data.map(e => <CatalogeGame key={e._id} data={e} />) : <h1>No articles yet</h1>
            }
        </section>
    )
}

export default Cataloge;

export async function loader() {
    const data = await getCatalogeGames();
    return { data };
}