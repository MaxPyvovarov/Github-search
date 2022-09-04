import React, {useContext} from 'react';
import {AlertContext} from '../Context/Alert/alertContext';

const Search = () => {
	const {show} = useContext(AlertContext);
	const onSubmit = event => {
		if (event.key === 'Enter') {
			show('This is alert');
		}
	};
	return (
		<div className='from-group mb-5'>
			<input
				type='text'
				className='form-control'
				placeholder='Enter user nickname'
				onKeyDown={onSubmit}
			/>
		</div>
	);
};

export default Search;
