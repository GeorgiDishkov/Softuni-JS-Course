import { useLoaderData, Form, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { editPage, getElementById } from "../../util/apiReqests";

const EditPage = () => {
    const { data, id } = useLoaderData();
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const onEdit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const result = await editPage(id, data, user.accessToken);
        console.log(result);
        navigate(`/details/${id}`);
    }


    return (
        <section id="edit-page" className="auth">
            <Form id="edit" method="POST" onSubmit={onEdit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={data.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={data.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={data.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={data.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={data.summary}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </Form>
        </section >
    )
}

export default EditPage;

export async function loader({ params }) {
    const data = await getElementById(params.id);
    return {
        data,
        id: params.id
    };
}
