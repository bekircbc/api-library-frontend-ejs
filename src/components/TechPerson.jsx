export const TechPerson = ({ item }) => {
	return (
		<fieldset className="item techPerson">
			<legend>Tech Person</legend>
			<div>
				<span className="fullName">{item.fullName} - </span>&nbsp;
				<span className="quickInfo">{item.quickInfo}</span>
			</div>
			<span className="body">{item.body}</span>
		</fieldset>
	);
};