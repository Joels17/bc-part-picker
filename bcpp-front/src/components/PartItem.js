import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import Button from '@mui/material/Button';


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
			<button id="btnAdd">
				<Button variant='contained' Click={onClick}>Add to Selection</Button>
			</button>
		</div>
	);
}

export default PartItem;
