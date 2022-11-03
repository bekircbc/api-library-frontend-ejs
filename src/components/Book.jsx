export const Book = ({ item }) => {
  return (
    <fieldset className="item book">
      <legend>Book</legend>
      <div className="info">
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
      </div>
    </fieldset>
  );
};
