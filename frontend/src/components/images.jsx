import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { API_URL } from '../config.js';

function Images({ onClose }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/menu-tonkotsus?populate=*`) // Asegúrate de que esta ruta es correcta
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="fixed top-0 right-0 w-1/2 h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-4 max-h-[70%] overflow-y-auto max-w-xl">
        <section className='flex justify-between align-center'>
          <h2 className="text-3xl mb-4 ">CONTACTO</h2>
          <button className="my-2 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl" onClick={onClose}>X</button>
        </section>
        {Array.isArray(data) && data.length > 0 ? (
          data.map(item => (
            <div key={item.id}>
              <img 
              src={item.attributes.photo.url} 
              alt={item.attributes.title}
              
              />
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

Images.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Images;