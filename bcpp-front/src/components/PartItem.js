import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import Button from '@mui/material/Button';

function PartItem(props) {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.items);

	const onClick = (e) => {
		dispatch(
			addItem({ id: props.id, name: props.title, partType: props.partType })
		);
	};

	return (
		<div id="partitem">
			<h4>{props.title}</h4>

			<Button variant="contained" onClick={onClick}>
				Add to Selection
			</Button>
		</div>
	);
}

export default PartItem;
