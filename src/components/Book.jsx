export const Book = ({ item }) => {
    return (
        <fieldset className="item book">
            <legend>Book</legend>
            <img
                src={`http://edwardtanguay.netlify.app/share/images/books/${item.idcode}.png`}
            />
            <div className="info">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
            </div>
        </fieldset>
    );
};
