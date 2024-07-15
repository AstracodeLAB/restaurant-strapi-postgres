import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../config.js'; // Asegúrate de que la ruta es correcta

function Letter({ onClose }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/menu-tonkotsus?populate=*`) // Asegúrate de que esta ruta es correcta
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.data) {
          setData(data.data);
        } else {
          throw new Error('Data format is incorrect');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="fixed top-0 right-0 md:w-1/2 h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-4 max-h-[75%] overflow-y-auto max-w-xl mb-6">
        <div className='flex justify-between align-center'>
        <h2 className="text-3xl mb-4 ">CARTA</h2>
        <button className="my-2 py-2 px-4  bg-gray-800 text-white rounded hover:bg-gray-700 text-xl" onClick={onClose}>X</button>
        </div>
        
        {Array.isArray(data) && data.length > 0 ? (
          data.map(item => (
            <div key={item.id}>
              <section className='flex flex-row justify-between'>
                  <article className='flex flex-col mr-4'>
                    <h3 className='text-2xl text-left'>{capitalizeFirstLetter(item.attributes.title)}</h3>
                    <p className='text-xs text-left'>{item.attributes.description}</p>
                    <p className='text-xl text-right mt-1'>Precio: {item.attributes.price}€</p>
                  </article>
                <img className='w-32 mb-4'
                  src={`${API_URL}${item.attributes.photo.data.attributes.url}`} 
                 />
              </section>
              
              
              
            </div>
          ))
        ) : (
          <p>No hay datos disponibles.</p>
        )}
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Letter.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Letter;
