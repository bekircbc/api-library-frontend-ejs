export const Translation = ({ item }) => {
	return (
		<fieldset className="item translation">
			<legend>Translation</legend>
			<div className="from">
				<span className="fromLanguage">{item.fromLanguage}:</span>&nbsp;
				<span className="fromPhrase">{item.fromPhrase}</span>
			</div>
			<div className="to">
				<span className="toLanguage">{item.toLanguage}:</span>&nbsp;
				<span className="toPhrase">{item.toPhrase}</span>
			</div>
		</fieldset>
	);
};
