const CollectionTemplate = ({
    data,
    rootChangeEventHendler
}) => {

    function onclick(e) {
        e.preventDefoult();
        rootChangeEventHendler(e.target.href)
    }
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
                <a href={`/details/${data._id}`} onclick={onclick} className="btn details-btn">Details</a>
            </div>
        </div >
    )
}

export default CollectionTemplate;
