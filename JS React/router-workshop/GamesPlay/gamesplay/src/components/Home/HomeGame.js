const HomeGame = ({ data }) => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={data.imageUrl} />
            </div>
            <h3>{data.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a href={`/details/${data._id}`} className="btn details-btn">Details</a>
            </div>
        </div>
    )
}

export default HomeGame;