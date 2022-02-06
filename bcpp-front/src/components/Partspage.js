import React from 'react';
import PartSelector from './PartSelector';

const temp = ['Board', 'Trucks', 'Wheels'];

function PartsPage() {
	return (
		<div id="partpage">
			<p>Parts page!!!</p>
			{temp.map((partType) => (
				<PartSelector key={partType} partName={partType} />
			))}
		</div>
	);
}

export default PartsPage;
