export const Job = ({ item }) => {
	return (
		<fieldset className="item job">
			<legend>Job</legend>
			<div
				className="html"
				dangerouslySetInnerHTML={{
					__html: item.html,
				}}
			></div>
		</fieldset>
	);
};
