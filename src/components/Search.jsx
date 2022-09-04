import React, {useContext, useState} from 'react';
import {AlertContext} from '../Context/Alert/alertContext';

const Search = () => {
	const [value, setValue] = useState('');
	const {show} = useContext(AlertContext);
	const onSubmit = event => {
		if (event.key !== 'Enter') {
			return;
		}

		if (value.trim()) {
			console.log(`Make request with ${value}`);
		} else {
			show('Enter user data!');
		}
	};
	return (
		<div className='from-group mb-5'>
			<input
				type='text'
				className='form-control'
				placeholder='Enter user nickname'
				onKeyDown={onSubmit}
				onChange={event => setValue(event.target.value)}
				value={value}
			/>
		</div>
	);
};

export default Search;
