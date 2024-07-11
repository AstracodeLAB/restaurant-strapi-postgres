import PropTypes from 'prop-types';

function Contact({ onClose }) {
  return (
    <div className="fixed top-0 right-0 w-1/2 h-full flex items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-3xl mb-4">Contacto</h2>
        <p>Aquí va el contenido de contacto..</p>
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Contact;