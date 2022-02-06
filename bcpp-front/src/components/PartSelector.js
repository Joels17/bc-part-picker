import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPartType } from '../slices/pageSlice';
import Button from '@mui/material/Button';

function PartSelector(props) {
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		dispatch(setPartType(props.part.partType));
	};

	return (
		<div id="ps">
			<div id="partselector" className="row2">
				<div className="innerColumnLeft">
					<Button variant="contained" onClick={onSubmit}>
						SELECT / EDIT
					</Button>
				</div>
				<div className="innerColumnRight">
					<p>{props.part.name}</p>
				</div>
			</div>
		</div>
	);
}

export default PartSelector;
