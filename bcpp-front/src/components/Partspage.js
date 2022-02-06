import React from 'react';
import PartSelectorList from './PartSelectorList';
import PartList from './PartList';

function PartsPage() {
	return (
		<div id="partpage">
			<p>Parts page!!!</p>
			<div id="flexthis" className="row">
				<div className="column">
				<PartSelectorList />
				</div>
				<div id="columnList" className="column">
				<PartList partType="Wheels" />
				</div>
			</div>
		</div>
	);
}

export default PartsPage;
