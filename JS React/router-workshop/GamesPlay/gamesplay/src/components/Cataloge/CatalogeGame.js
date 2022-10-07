const CatalogeGame = ({ data }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={data.imageUrl} alt="FFS" />
                <h6>{data.category}</h6>
                <h2>{data.title}</h2>
                <a href={`/details/${data._id}`} className="details-button">Details</a>
            </div>
        </div>
    )
}

export default CatalogeGame;