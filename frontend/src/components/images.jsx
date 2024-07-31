import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { API_URL,API_TOKEN  } from '../config.js'; 

function Images({ onClose }) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${API_URL}/api/galerias?populate=*`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${API_TOKEN}`,
					},
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const result = await response.json();

				if (result.data) {
					setData(result.data);
				} else {
					throw new Error('Data format is incorrect');
				}
			} catch (error) {
				console.error('Error fetching data:', error);
				setError(error.message);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className='fixed bottom-11 md:top-0 right-0 md:w-1/2 h-[60%] md:h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center'>
			<div className='bg-white p-8 rounded-lg shadow-lg mx-4 max-h-[75%] overflow-y-auto max-w-xl mb-6'>
				<section className='flex justify-between align-center'>
					<h2 className='flex text-2xl md:text-3xl'>TONKOTSU</h2>
					<button
						className='my-2 py-0 md:py-2 px-2 md:px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-base md:text-xl'
						onClick={onClose}
					>
						X
					</button>
				</section>
				{Array.isArray(data) && data.length > 0 ? (
					data.map((item) => (
						<div key={item.id} className='mb-8'>
							<img
								src={`${API_URL}${item.attributes.img.data[0].attributes.url}`}
								//alt={item.attributes.name}
							/>
						</div>
					))
				) : (
					<p>No hay datos disponibles.</p>
				)}
				<button className='mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl' onClick={onClose}>
					Cerrar
				</button>
			</div>
		</div>
	);
}

Images.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default Images;
