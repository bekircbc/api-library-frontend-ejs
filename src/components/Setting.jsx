export const Setting = ({ item }) => {
	return (
		<fieldset className="item setting">
			<legend>Setting</legend>
			{item.key} = {item.value}
		</fieldset>
	);
};