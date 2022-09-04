import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';

const Home = () => {
	const cards = new Array(15).fill('').map((_, i) => i);
	return (
		<>
			<Search />
			<div className='row'>
				{cards.map((card, index) => {
					return (
						<div className='col-sm-4 mb-4' key={index}>
							<Card />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Home;
