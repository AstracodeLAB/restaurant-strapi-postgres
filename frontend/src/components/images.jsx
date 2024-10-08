import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { API_URL,API_TOKEN  } from '../config.js'; 

function Images({ onClose }) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log('fetching');
		setLoading(true);
		fetch(`${API_URL}/api/galerias?populate=*`, {
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


	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className='fixed mt-60 md:mt-0 bottom-20 top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none w-full md:w-1/2 h-[60%] md:h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center'>
			<div className='bg-white p-8 rounded-lg shadow-lg mx-4 max-h-[75%] overflow-y-auto max-w-xl mb-6'>
				<section className='flex justify-between align-center'>
					<h2 className='flex text-2xl md:text-3xl'>TONKOTSU</h2>
					<button
						className='my-2 py-0 md:py-2 px-2 md:px-4 bg-gray-800 text-white rounded cursor-pointer hover:bg-rose-700 text-base md:text-xl'
						onClick={onClose}
					>
						X
					</button>
				</section>
				<div> {loading && <div>Cargando...</div>}</div>
				{Array.isArray(data) && data.length > 0 ? (
    data.map((item) => (
        <div key={item.id} className='mb-8'>
            {item.attributes.img.data && item.attributes.img.data.length > 0 && (
                <img
                    src={item.attributes.img.data[0].attributes.formats.large.url}
                    alt={item.attributes.img.data[0].attributes.name || `Image ${item.id}`}
                    className='w-full h-auto mb-4'
                />
            )}
        </div>
    ))
) : (
    <p></p>
)}
				<button className='mt-4 py-2 px-4 bg-gray-800 text-white rounded cursor-pointer hover:bg-rose-700 text-xl' onClick={onClose}>
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
