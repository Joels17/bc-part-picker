import React from 'react';
import PartSelectorList from './PartSelectorList';
import PartList from './PartList';

function PartsPage() {
	return (
		<div id="partpage">
			<div id="partPageTitle">
				<p1>Parts page!!!</p1>
			</div>
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
