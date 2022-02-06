import React, { useEffect, useState } from 'react';
import PartItem from './PartItem';
import { useSelector, useDispatch } from 'react-redux';

const temp = [
	{ name: 'Wacky wheelz', id: 1 },
	{ name: 'Wicked wheelos', id: 2 },
];

function PartList(props) {
	const partType = useSelector((state) => state.page.partType);
	const [jsonData, setJsonData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		fetch(`http://127.0.0.1:3000/build/${partType.payload}`)
			.then((res) => res.json())
			.then((json) => {
				setJsonData(json);
				setIsLoaded(true);
			});
	}, [partType]);

	return (
		<div id="partlist">
			{!isLoaded || partType.payload == 'null' ? (
				''
			) : (
				<div>
					<h4>{partType.payload}</h4>
					<div>
						{jsonData.map((part) => (
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
