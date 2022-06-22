export const Noun = ({ item }) => {
    return (
        <fieldset className="item noun">
            <legend>Noun</legend>
            {item.article} {item.singular}, {item.plural}
        </fieldset>
    );
};
