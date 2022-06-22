export const Employee = ({ item }) => {
	return (
		<fieldset className="item employee">
			<legend>Employee</legend>
			<div className="name">{item.FIRST_NAME} {item.LAST_NAME}</div>
			<div className="phone">Phone: {item.PHONE_NUMBER}</div>
		</fieldset>
	);
};