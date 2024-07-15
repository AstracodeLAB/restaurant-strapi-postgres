
import PropTypes from 'prop-types';
import maps from '../assets/maps.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Contact({ onClose }) {
  

  return (
    <div className="fixed top-0 right-0 w-1/2 h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-4 max-h-[75%] overflow-y-auto max-w-xl mb-6">
        <section className='flex justify-between align-center'>
          <h2 className="text-3xl mb-4 ">CONTACTO</h2>
          <button className="my-2 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl" onClick={onClose}>X</button>
        </section>
        <section>
          <img src={maps} alt="" />
          <p className='text-xl'>C/ San Ramón, 85.<br></br> Madrid, 34885.</p>
          </section>
        <section className='flex justify-between'>
          <p className='text-xl flex flex-col justify-center'>Telf: 895716254</p>
          
          <ul className='flex gap-2'>
            <li><FontAwesomeIcon icon={faWhatsapp} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
          </ul>
          

        </section>
        
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Contact;
