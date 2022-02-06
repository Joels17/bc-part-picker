import React from 'react';
import PartItem from './PartItem';

const temp = ['Wacky wheelz', 'Wicked wheelos'];

function PartList(props) {
	return (
		<div id="partlist">
			<h3>{props.partType}</h3>
			<div>
				{temp.map((part) => (
					<PartItem key={part} title={part} />
				))}
			</div>
		</div>
	);
}

export default PartList;
