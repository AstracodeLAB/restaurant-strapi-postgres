import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_URL, API_TOKEN } from '../config.js';

function Letter({ onClose }) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		console.log('fetching');
		setLoading(true);
		fetch(`${API_URL}/api/menu-tonkotsus?populate=*`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${API_TOKEN}`,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				if (data.data) {
					setData(data.data);
				} else {
					throw new Error('Data format is incorrect');
				}
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
				console.log('not loading');
			});
	}, []);

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className='fixed bottom-11 md:top-0 right-0 md:w-1/2 h-[60%] md:h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center'>
			<div className='bg-white p-8 rounded-lg shadow-lg h-[80%] md:h-[70%] mx-4 md:max-h-[75%] overflow-y-auto max-w-xl mb-6'>
				<div className='flex justify-between item-center align-center'>
					<h2 className='flex text-2xl md:text-3xl '>CARTA</h2>
					<button
						className='my-2 py-0 md:py-2 px-2 md:px-4  bg-gray-800 text-white rounded hover:bg-gray-700 text-base md:text-xl'
						onClick={onClose}
					>
						X
					</button>
				</div>
				<div> {loading && <div>Cargando...</div>}</div>
				{Array.isArray(data) && data.length > 0
					? data.map((item) => (
							<div key={item.id}>
								<section className='flex flex-row justify-between mt-4 md:mt-0'>
									<article className='flex flex-col mr-4'>
										<h3 className='text-xl md:text-2xl text-left'>{capitalizeFirstLetter(item.attributes.title)}</h3>
										<p className='text-xs text-left'>{item.attributes.description}</p>
										<p className='text-xl text-right mt-1'>Precio: {item.attributes.price}€</p>
									</article>
									<img
										className='w-[20%] h-[20%] md:w-32 mb-4'
										src={`${API_URL}${item.attributes.photo.data.attributes.url}`}
									/>
								</section>
							</div>
					  ))
					: ''}
				<button
					className='mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-base md:text-xl'
					onClick={onClose}
				>
					Cerrar
				</button>
			</div>
		</div>
	);
}

Letter.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default Letter;
