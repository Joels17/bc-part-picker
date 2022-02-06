import React from 'react';

function PartList(props) {
	return (
		<div id="partlist">
			<h3>{props.partType}</h3>

			<p>{props.partName}</p>
		</div>
	);
}

export default PartList;
