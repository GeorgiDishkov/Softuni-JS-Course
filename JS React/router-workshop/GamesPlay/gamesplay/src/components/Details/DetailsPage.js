import { useLoaderData } from "react-router-dom";
import { getElementById } from "../../util/apiReqests";

const DetailsPage = () => {
    const { data } = useLoaderData();
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={data.imageUrl} />
                    <h1>{data.title}</h1>
                    <span className="levels">{data.maxLevel}</span>
                    <p className="type">{data.category}</p>
                </div>

                <p className="text">{data.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href={`/edit/${data._id}`} className="button">Edit</a>
                    <a href={`/delete/${data._id}`} className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>

    )
}

export default DetailsPage;

export async function loader({ params }) {
    const data = await getElementById(params.id);
    return { data };
}