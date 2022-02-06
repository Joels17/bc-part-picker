import React from 'react';
import PartItem from './PartItem';

const temp = [{ name: 'Wicked wheelz' }, { name: 'Wacky wheels' }];

function PartList(props) {
	return (
		<div id="partlist">
			<h3>{props.partType}</h3>
			{temp.map((part) => {
				<PartItem title={part.name} />;
			})}
		</div>
	);
}

export default PartList;
