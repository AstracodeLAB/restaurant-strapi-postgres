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
	const [showLetter,setShowLetter] = useState(false);

	const openLetter = () => {
		setShowLetter(true);
	};

	const closeLetter = () => {
		setShowLetter(false);
	}

	const [showReservation,setShowReservation] = useState(false);

	const openReservation = () => {
		setShowReservation(true);
	};

	const closeReservation = () => {
		setShowReservation(false);
	}

	const [showContact,setShowContact] = useState(false);

	const openContact = () => {
		setShowContact(true);
	};

	const closeContact = () => {
		setShowContact(false);
	}

	const [showImages,setShowImages] = useState(false);

	const openImages = () => {
		setShowImages(true);
	};

	const closeImages = () => {
		setShowImages(false);
	}

	return (
		<>
			<div className= 'h-full'>
			<div className='flex flex-row w-full '>
				<header className='flex flex-col w-full align-center justify-center items-center gap-8' >
					<img className='w-1/3 rounded-full ' src={Logo} alt="Logo del restaurante" />
					<ul className="text-5xl text-center flex flex-col w-full">
							<li className="relative ">
								<button className='py-4' onClick={openLetter}>Carta <FontAwesomeIcon icon={faChevronRight} /></button>
								<hr className="absolute left-0 w-full border-gray-300 " />
								{showLetter && <Letter onClose={closeLetter} />}
							</li>
							<li className="relative">
								<button className='py-4' onClick={openReservation}>Reserva <FontAwesomeIcon icon={faChevronRight} /></button>
								<hr className="absolute left-0 w-full border-gray-300" />
								{showReservation && <Reservation onClose={closeReservation} />}
							</li>
							<li className="relative">
								<button className='py-4' onClick={openContact}>Contacto <FontAwesomeIcon icon={faChevronRight} /></button>
								<hr className="absolute left-0 w-full border-gray-300" />
								{showContact && <Contact onClose={closeContact} />}
							</li>
							<li className="pb-4">
								<button className='py-4' onClick={openImages}>Imágenes <FontAwesomeIcon icon={faChevronRight} /></button>
								{showImages && <Images onClose={closeImages} />}
							</li>
						</ul>
				</header>

				<section className='w-full '>
					<img className='w-full' style={{ height: '90vh', objectFit: 'cover' }} src={Background} alt="imágen ambientada en el restaurante" />
				</section>
			</div>
			<footer className='h-1/5 bg-gray-800 text-white flex flex-col justify-center items-center'>
				<ul >
					<li>Política de cookies</li>
					<li>Aviso de cookies</li>
					<li>Aviso de privacidad</li>
					
				</ul>
			</footer>
			</div>
		</>
	);
}

export default Landing;