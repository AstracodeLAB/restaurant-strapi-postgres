import { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { API_URL } from '../config.js'; // Asegúrate de que la ruta es correcta

function Reservation({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${API_URL}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          phone,
          date,
          time,
          guests,
        },
      }),
    });

    if (response.ok) {
      setMessage('Reserva realizada con éxito');
      setName('');
      setEmail('');
      setPhone('');
      setDate(new Date());
      setTime('');
      setGuests(1);
    } else {
      setMessage('Hubo un problema con su reserva');
    }
  };

  return (
    <div className="fixed top-0 right-0 w-1/2 h-full flex items-center bg-gray-900 bg-opacity-50 z-50 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-4 max-h-[70%] overflow-y-auto max-w-xl min-w-[80%]">
        <div className='flex justify-between align-center'>
          <h2 className="text-3xl mb-4">RESERVAS</h2>
          <button className="my-2 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl" onClick={onClose}>X</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg mb-2">Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 mb-4 border rounded h-[50%] text-2xl"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mb-4 border rounded text-2xl"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Teléfono:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 mb-4 border rounded text-2xl"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Fecha:</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              required
              className="w-full p-2 mb-4 border rounded text-2xl"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Hora:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full p-2 mb-4 border rounded text-2xl"
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Comensales:</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              min="1"
              className="w-full p-2 mb-4 border rounded text-2xl"
            />
          </div>
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl"
          >
            Reservar
          </button>
          {message && <p className="mt-4 text-lg">{message}</p>}
        </form>
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

Reservation.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Reservation;