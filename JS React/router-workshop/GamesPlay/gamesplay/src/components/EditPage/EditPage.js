import { useLoaderData, Form, redirect, Outlet, useOutletContext } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { editPage, getElementById } from "../../util/apiReqests";

const EditPage = () => {
    const { data } = useLoaderData();
    const { user } = useAuthContext();


    return (
        <section id="edit-page" className="auth">
            <Form id="edit" method="POST">
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

                    <Outlet context={{ user }} />
                </div>
            </Form>
        </section >
    )
}

export default EditPage;

export async function loader({ params }) {
    const data = await getElementById(params.id);
    return { data };
}

// TO DO WITH ACCOUNT
export async function action({ request, params }) {
    // const formData = await request.formData();
    // const updates = Object.fromEntries(formData);
    // console.log(updates);
    // const answere = await editPage(params.id, update);
    // return redirect(`/catalog/${params.contactId}`);
}