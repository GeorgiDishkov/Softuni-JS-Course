import { useLoaderData } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { addComent, getElementById, loadComments } from "../../util/apiReqests";

const Coment = (e) => {

    return <li className="comment">
        <p>{e}</p>
    </li>
}


const DetailsPage = () => {
    const { user } = useAuthContext();
    const { data, comments , id} = useLoaderData();
    // console.log(comments);

    const onComment = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const comment = formData.get(`comment`)
        const data = {
            gameId: id,
            comment,
        }
        const result = await addComent(data , user.accessToken);
        console.log(result);
    }
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={data.imageUrl} alt="nothing to show here" />
                    <h1>{data.title}</h1>
                    <span className="levels">{data.maxLevel}</span>
                    <p className="type">{data.category}</p>
                </div>

                <p className="text">{data.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2> {
                        comments.length > 0
                            ?
                            <ul>
                                {/* <!-- list all comments for current game (If any) --> */}
                                {/* <Coment data={comments} /> */}
                                <li className="comment">
                                    <p>Content: I rate this one quite highly.</p>
                                </li>
                                <li className="comment">
                                    <p>Content: The best game.</p>
                                </li>
                            </ul>
                            :
                            <p className="no-comment">No comments.</p>
                    }
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    {data._ownerId === user._id ?
                        <>
                            <a href={`/edit/${data._id}`} className="button">Edit</a>
                            <a href={`/delete/${data._id}`} className="button">Delete</a>
                        </>
                        : ""
                    }
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            {user && (data._ownerId != user._id) ?
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onComment}>
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
                : ""
            }

        </section>

    )
}

export default DetailsPage;

export async function loader({ params }) {
    const data = await getElementById(params.id);
    const comments = await loadComments(params.id);
    return { data, comments , id:params.id };
}