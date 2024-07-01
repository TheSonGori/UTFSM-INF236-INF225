import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function SidebarH1({ item, handleCloseModal }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [notas, setNotas] = useState(''); // Nuevo estado para las notas

  const handleReservar = async () => {
    try {
      const requestBody = {
        "paciente": 1,
        "medico": 1,
        "tipo_de_examen": item ? item.status : 'N/A',
        "fecha_hora": item ? item.name : 'N/A',
        "hora_examen": item ? item.id : 'N/A',
        "notas": notas,
      };

      const response = await axios.post('http://127.0.0.1:8000/api/examenes/', requestBody);
      console.log('Response:', response.data);

      // Mensaje de éxito para el usuario
      alert("Reserva realizada con éxito");

      // Cerrar el modal y recargar la página después de una reserva exitosa
      handleCloseModal(); // Cerrar el modal
      window.location.reload(); // Recargar la página
    } catch (error) {
      console.error('Error:', error.response || error);
      alert("Error al realizar la reserva. Por favor, intenta de nuevo.");
    }
  };

  const labelWidth = 'w-24';

  return (
    <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-96 xl:w-96">
      <div className="text-slate-800 dark:text-slate-100 font-semibold mb-4">Confirmar Reserva</div>
      <div>
        <div className="flex items-center mb-4">
          <label className={`text-sm font-medium ${labelWidth}`} htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            className="form-input w-full"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="flex items-center mb-4">
          <label className={`text-sm font-medium ${labelWidth}`} htmlFor="rut">RUT:</label>
          <input
            id="rut"
            className="form-input w-full"
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
        </div>

        <div className="flex items-center mb-4">
          <label className={`text-sm font-medium ${labelWidth}`} htmlFor="correo">Correo:</label>
          <input
            id="correo"
            className="form-input w-full"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        {/* Campo para las notas */}
        <div className="flex items-center mb-4">
          <label className={`text-sm font-medium ${labelWidth}`} htmlFor="notas">Notas:</label>
          <input
            id="notas"
            className="form-input w-full"
            type="text"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
          />
        </div>

        <div className="flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex flex-col items-center">
            <span>Fecha:</span>
            <span>{item ? item.name : 'N/A'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Hora:</span>
            <span>{item ? item.date : 'N/A'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Examen:</span>
            <span>{item ? item.status : 'N/A'}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="btn w-1/2 bg-indigo-500 hover:bg-indigo-600 text-white mr-2"
          onClick={handleReservar}
        >
          Reservar
        </button>
        <button
          className="btn w-1/2 bg-red-100 hover:bg-red-600 text-black transition-colors duration-300"
          onClick={handleCloseModal}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

SidebarH1.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.string,
  }),
  handleCloseModal: PropTypes.func.isRequired,
};

export default SidebarH1;
