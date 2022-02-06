import React from 'react';
import PartSelector from './PartSelector';

const temp = ['Board', 'Trucks', 'Wheels'];

function PartSelectorList() {
	return (
		<div id="partselectorlist">
			{temp.map((partType) => (
				<PartSelector key={partType} partName={partType} />
			))}
		</div>
	);
}

export default PartSelectorList;
