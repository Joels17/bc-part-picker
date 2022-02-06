import React, { useEffect, useState } from 'react';
import PartSelector from './PartSelector';
import { useSelector, useDispatch } from 'react-redux';

function PartSelectorList() {
	const [isLoaded, setIsLoaded] = useState(false);
	const cart = useSelector((state) => state.cart.items);
	useEffect(() => {
		setIsLoaded(true);
	}, [cart]);
	return (
		<div id="partselectorlist">
			{isLoaded
				? cart.map((part) => <PartSelector key={part.partType} part={part} />)
				: ''}
		</div>
	);
}

export default PartSelectorList;
