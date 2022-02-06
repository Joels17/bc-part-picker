import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';

function PartItem(props) {
	const dispatch = useDispatch();

	const onClick = (e) => {
		dispatch(addItem({ id: props.id, name: props.title }));
	};

	return (
		<div id="partitem">
			<h4>{props.title}</h4>
			<button onClick={onClick}>Add to Selection</button>
		</div>
	);
}

export default PartItem;
