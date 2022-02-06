import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';

function PartItem(props) {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.items);

	useEffect(() => {
		console.log('New value', cart);
		return () => {
			console.log('Prev value', cart);
		};
	}, [cart]);

	const onClick = (e) => {
		dispatch(
			addItem({ id: props.id, name: props.title, partType: props.partType })
		);
	};

	return (
		<div id="partitem">
			<h4>{props.title}</h4>
			<button onClick={onClick}>Add to Selection</button>
		</div>
	);
}

export default PartItem;
