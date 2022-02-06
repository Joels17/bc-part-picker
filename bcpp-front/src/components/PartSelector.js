import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPartType } from '../slices/pageSlice';

function PartSelector(props) {
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		dispatch(setPartType(props.partName));
	};

	return (
		<div id="partselector" className="row2">
			<div className="column">
				<button onClick={onSubmit}>Add</button>
			</div>
			<div className="column">
				<p>{props.partName}</p>
			</div>
		</div>
	);
}

export default PartSelector;
