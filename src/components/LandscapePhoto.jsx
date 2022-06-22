export const LandscapePhoto = ({ item, baseUrl }) => {
	return (
		<fieldset className="item landscapePhoto">
			<legend>Landscape Photo</legend>
			<img src={`${baseUrl}/images/${item}`}/>
		</fieldset>
	);
};