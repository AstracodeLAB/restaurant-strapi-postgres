import PropTypes from 'prop-types';

function Reservation({ onClose }) {
  return (
    <div className="fixed bottom-11 md:top-0 right-0 md:w-1/2 h-[60%] md:h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg h-[80%] md:h-[70%] mx-4 md:max-h-[75%] overflow-y-auto max-w-xl min-w-[75%] mb-6">
        <section className='flex justify-between '>
          <h2 className="flex text-2xl md:text-3xl">RESERVAS</h2>
          <button className="my-2 py-0 md:py-2 px-2 md:px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-base md:text-xl" onClick={onClose}>X</button>
        </section>
        
        <div className="mt-4">
          <iframe 
            src="https://api.pixylo.com/widget/booking/AFzZVJtPb0ky7qmbGv2P" 
            style={{ width: '100%', height: '170vh', border: 'none', overflow: 'hidden' }} 
            scrolling="no" 
          ></iframe>
        </div>

      </div>
    </div>
  );
}


export default Reservation;
