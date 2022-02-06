import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPartType } from '../slices/pageSlice';
import Button from '@mui/material/Button';

function PartSelector(props) {
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		dispatch(setPartType(props.partName));
	};

	return (
		<div id='ps'>
		<div id="partselector" className="row2">
			<div className="innerColumnLeft">
				<button id="btnAdd">
					<Button variant='contained' onClick={onSubmit}>Add</Button>
				</button>
			</div>
			<div className="innerColumnRight">
				<p>{props.partName}</p>
			</div>
		</div>
		</div>
	);
}

export default PartSelector;
