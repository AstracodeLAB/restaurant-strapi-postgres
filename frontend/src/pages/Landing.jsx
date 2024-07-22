import { useState } from 'react';
import Logo from '../assets/logoTonkotsu.png';
import Background from '../assets/imgBackground.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Letter from '../components/letter.jsx';
import Reservation from '../components/reservation.jsx';
import Contact from '../components/contact.jsx';
import Images from '../components/images.jsx';

function Landing() {
  const [activeSection, setActiveSection] = useState(null);

  const openSection = (section) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className='flex-grow flex flex-col md:flex-row w-full'>
          <header className='flex flex-col w-full align-center justify-center items-center mt-3'>
            <img className='w-1/3 rounded-full' src={Logo} alt="Logo del restaurante" />
            <ul className="grid text-2xl grid-cols-2 md:gap-2 md:text-3xl text-center md:flex md:flex-col w-full">
              <li className="relative w-full md:w-full">
                <button className='py-1 md:py-4' onClick={() => openSection('letter')}>
                  Carta <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </button>
                <hr className="absolute left-0 w-full border-gray-300" />
                {activeSection === 'letter' && <Letter onClose={closeSection} />}
              </li>
              <li className="relative w-full md:w-full">
                <button className='py-1 md:py-4' onClick={() => openSection('reservation')}>
                  Reserva <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </button>
                <hr className="absolute left-0 w-full border-gray-300" />
                {activeSection === 'reservation' && <Reservation onClose={closeSection} />}
              </li>
              <li className="relative w-full md:w-full">
                <button className='py-1 md:py-4' onClick={() => openSection('contact')}>
                  Contacto <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </button>
                <hr className="absolute left-0 w-full border-gray-300" />
                {activeSection === 'contact' && <Contact onClose={closeSection} />}
              </li>
              <li className="pb-4 relative w-full md:w-full">
                <button className='py-1 md:py-4' onClick={() => openSection('images')}>
                  Tonkotsu <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </button>
                <hr className="absolute left-0 w-full border-gray-300 md:transparent" />
                {activeSection === 'images' && <Images onClose={closeSection} />}
              </li>
            </ul>
          </header>

          <section className='w-full relative'>
          <img 
    className='w-full h-[60vh] object-cover md:h-[90vh]' 
    src={Background} 
    alt="imágen ambientada en el restaurante" 
  />
          </section>
        </div>
      </div>
      <footer className='fixed bottom-0 w-full bg-gray-800 text-white flex flex-col md:flex-row justify-center items-center py-2 md:py-4 z-50 text-xs md:text-base'>
        <ul>
          <li>Política de cookies</li>
          <li>Aviso de cookies</li>
          <li>Aviso de privacidad</li>
        </ul>
      </footer>
    </>
  );
}

export default Landing;
