import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPartType } from '../slices/pageSlice';

function PartSelector(props) {
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		dispatch(setPartType(props.partName));
	};

	return (
		<div id="partselector">
			<button onClick={onSubmit}>Add</button>
			<p>{props.partName}</p>
		</div>
	);
}

export default PartSelector;
