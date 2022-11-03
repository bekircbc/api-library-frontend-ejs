export const Product = ({ item }) => {
  return (
    <fieldset className="item noun">
      <legend>Product</legend>
      {item.name} {item.category}, {item.averageRating}
    </fieldset>
  );
};
