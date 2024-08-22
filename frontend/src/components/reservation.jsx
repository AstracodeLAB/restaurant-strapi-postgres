import PropTypes from 'prop-types';

function Reservation({ onClose }) {
  return (
    <div className="fixed mt-60 md:mt-0 bottom-20 top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none w-full md:w-1/2 h-[60%] md:h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center ">
      <div className="bg-white p-4 rounded-lg shadow-lg h-[80%] md:h-[70%] mx-auto md:mx-0 md:max-h-[75%] overflow-y-auto max-w-xl min-w-[75%] mb-6">
        <section className="flex justify-between">
          <h2 className="flex text-2xl md:text-3xl">RESERVAS</h2>
          <button
            className="my-2 py-0 md:py-2 px-2 md:px-4 bg-gray-800 text-white rounded cursor-pointer hover:bg-rose-700 hover:bg-opacity-80 text-base md:text-xl"
            onClick={onClose}
          >
            X
          </button>
        </section>

        <div className="mt-4 ">
          <iframe
            src="https://api.pixylo.com/widget/booking/AFzZVJtPb0ky7qmbGv2P"
            style={{ width: '100%', height: '120vh', border: 'none', overflow: 'hidden' }}
            scrolling="no"
          ></iframe>
        </div>
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-rose-700 hover:bg-opacity-80 text-base md:text-xl" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Reservation.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Reservation;
