import React from 'react';

function PartItem(props) {
	return (
		<div id="partitem">
			<h4>{props.title}</h4>
			<button>Add to Selection</button>
		</div>
	);
}

export default PartItem;
