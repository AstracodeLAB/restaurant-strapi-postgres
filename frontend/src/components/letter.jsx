import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../config.js'; // Asegúrate de que la ruta es correcta

function Letter({ onClose }) {
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
    <div className="fixed top-0 right-0 w-1/2 h-full flex items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-3xl mb-4">Carta</h2>
        
        {Array.isArray(data) && data.length > 0 ? (
          data.map(item => (
            <div key={item.id}>
              <h3>{item.attributes.title}</h3>
              <p className='text-xs'>{item.attributes.description}</p>
              <p>Precio: {item.attributes.price}</p>
            </div>
          ))
        ) : (
          <p>No hay datos disponibles.</p>
        )}
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Letter.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Letter;


/*
import PropTypes from 'prop-types';

function Letter({ onClose }) {
  return (
    <div className="fixed top-0 right-0 w-1/2 h-full flex items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-3xl mb-4">Carta</h2>
        <p>Aquí va el contenido de la carta...</p>
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Letter.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Letter;
*/