import React from 'react';
import PartSelectorList from './PartSelectorList';
import PartList from './PartList';

function PartsPage() {
	return (
		<div id="partpage">
			<p>Parts page!!!</p>
			<div id="flexthis">
				<PartSelectorList />
				<PartList partType="Wheels" />
			</div>
		</div>
	);
}

export default PartsPage;
