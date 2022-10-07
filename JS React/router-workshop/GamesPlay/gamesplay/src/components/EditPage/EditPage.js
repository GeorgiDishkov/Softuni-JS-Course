import { useLoaderData } from "react-router-dom";
import { getElementById } from "../../util/apiReqests";

const EditPage = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={data.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value="" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}

export default EditPage;

export async function loader({ params }) {
    const data = await getElementById(params.id);
    console.log(data);
    return { data };
}