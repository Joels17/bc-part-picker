import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPartType } from '../slices/pageSlice';

function PartSelector(props) {
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		dispatch(setPartType(props.part.partType));
	};

	return (
		<div id="partselector" className="row2">
			<div className="innerColumnLeft">
				<button onClick={onSubmit}>Add</button>
			</div>
			<div className="innerColumnRight">
				<p>{props.part.name}</p>
			</div>
		</div>
	);
}

export default PartSelector;
