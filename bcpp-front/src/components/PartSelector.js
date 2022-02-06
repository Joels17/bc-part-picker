import React from 'react';

function PartSelector(props) {
	return (
		<div id="partselector">
			<button>Add</button>
			<p>{props.partName}</p>
		</div>
	);
}

export default PartSelector;
