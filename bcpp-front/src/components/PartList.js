import React, { useEffect } from 'react';
import PartItem from './PartItem';
import { useSelector, useDispatch } from 'react-redux';

const temp = [
	{ name: 'Wacky wheelz', id: 1 },
	{ name: 'Wicked wheelos', id: 2 },
];

function PartList(props) {
	const partType = useSelector((state) => state.page.partType);

	return (
		<div id="partlist">
			{partType === 'null' ? (
				''
			) : (
				<div>
					<h4>{partType.payload}</h4>
					<div>
						{temp.map((part) => (
							<PartItem
								key={part.id}
								id={part.id}
								title={part.name}
								partType={partType.payload}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default PartList;
