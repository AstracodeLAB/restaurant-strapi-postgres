
import PropTypes from 'prop-types';
import maps from '../assets/maps.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Contact({ onClose }) {
  

  return (
    <div className="fixed mt-60 md:mt-0 bottom-20 top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none w-full md:w-1/2 h-[60%] md:h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg h-[80%] md:h-[70%] mx-4 md:max-h-[75%] overflow-y-auto max-w-xl mb-6">
        <section className='flex justify-between item-center align-center'>
          <h2 className="flex text-2xl md:text-3xl">CONTACTO</h2>
          <button className="my-2 py-0 md:py-2 px-2 md:px-4  hover:bg-rose-700 hover:bg-opacity-80 bg-gray-800 text-white rounded hover:bg-gray-700 text-base md:text-xl" onClick={onClose}>X</button>
        </section>
        <section className='flex flex-row gap-2 justify-between'>
          <img className='cursor-pointer w-[60%]' src={maps} alt="" />
          <p className='text-base md:text-lg'>C/ San Ramón, 85.<br></br> Madrid, 34885.</p>
          </section>
        <section className='flex justify-between'>
          <p className='text-xl flex flex-col justify-center'>Telf: 895716254</p>
          
          <ul className='flex gap-2'>
            <li className='cursor-pointer hover:bg-rose-700 hover:bg-opacity-80 rounded-full p-2'><FontAwesomeIcon icon={faWhatsapp} /></li>
            <li className='cursor-pointer hover:bg-rose-700 hover:bg-opacity-80 rounded-full p-2'><FontAwesomeIcon icon={faInstagram} /></li>
            <li className='cursor-pointer hover:bg-rose-700 hover:bg-opacity-80 rounded-full p-2'><FontAwesomeIcon icon={faFacebook} /></li>
          </ul>
          

        </section>
        
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-rose-700 hover:bg-opacity-80 text-base md:text-xl" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Contact;
