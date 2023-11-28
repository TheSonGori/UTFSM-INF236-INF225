import React, { useState } from 'react';
import './HU1Page.css';
import Header from './components/Header';
import axios from "axios";

const HU1Page = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedExamType, setSelectedExamType] = useState('');
  const [availableHours, setAvailableHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientRut, setPatientRut] = useState('');
  const [selectedHourId, setSelectedHourId] = useState(null);
  const [showPatientInfo, setShowPatientInfo] = useState(false);

  const fetchData = async () => {
    try {
      // Utiliza la fecha y el tipo de examen seleccionados en la URL de la API
      const response = await axios.get(`http://localhost:5000/api/horario/filtrar?fecha=${selectedDate}&tipo_examen=${selectedExamType}&nombreUsuario=none`);
      
      // Almacena las horas disponibles en una variable
      const hours = response.data.map(item => ({
        id: item._id,
        hora: item.hora,
      }));
      console.log(hours);

      // Actualiza el estado con las horas obtenidas
      setAvailableHours(hours);
    } catch (error) {
      // Maneja errores
      console.error('Error al hacer la solicitud:', error);
    }
  };
  
  const generateReport = (event) => {
    event.preventDefault();

    // Llama a la función fetchData al enviar el formulario
    fetchData();
  };

  const handleSelectHour = (event) => {
    const selectedHourValue = event.target.value;
    const selectedHourData = availableHours.find(hour => hour.hora === selectedHourValue);

    if (selectedHourData) {
      setSelectedHour(selectedHourValue);
      setSelectedHourId(selectedHourData.id);
      setShowPatientInfo(true);
    }
  };

  const handleSaveAppointment = async () => {
    try {
      // Lógica para guardar la cita con los datos del paciente
      console.log('Cita guardada con éxito:', {
        selectedDate,
        selectedExamType,
        selectedHour,
        selectedHourId,
        patientName,
        patientRut,
      });

      // Construir el objeto con los datos del paciente
      const patientData = {
        nombreUsuario: "Doctor1",
        nombrePaciente: patientName,
        rutPaciente: patientRut,
      };

      // Realizar la solicitud PUT a la API
      await axios.put(`http://localhost:5000/api/horario/${selectedHourId}`, patientData);

      // Limpiar los campos y volver a la página principal u otra acción necesaria
      setSelectedDate('');
      setSelectedExamType('');
      setAvailableHours([]);
      setSelectedHour('');
      setSelectedHourId(null);
      setPatientName('');
      setPatientRut('');
      setShowPatientInfo(false);

      // Mostrar la alerta "Horario tomado"
      alert('Horario tomado');

      // Puedes agregar acciones adicionales después de la actualización exitosa
      console.log('Solicitud PUT realizada con éxito');
    } catch (error) {
      // Manejar errores en caso de que la solicitud no sea exitosa
      console.error('Error al realizar la solicitud PUT:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Agendar Hora</h2>
        <form id="reportForm" onSubmit={generateReport}>
          <div className="form-group">
            <label htmlFor="startDate">Fecha:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="examType">Tipo de Examen:</label>
            <select
              id="examType"
              name="examType"
              value={selectedExamType}
              onChange={(e) => setSelectedExamType(e.target.value)}
              required
            >
              <option value="">Seleccione un tipo de examen</option>
              <option value="Radiografia">Radiografía</option>
              <option value="Ecografia">Ecografía</option>
              <option value="Escaner">Escaner</option>
              <option value="ResonanciaMagnetica">Resonancia Magnética</option>
            </select>
          </div>

          <button type="submit">Horario disponibles</button>
        </form>

        <div className="results">
          <h3>Resultados:</h3>
          {availableHours.length > 0 ? (
            <div>
              <label htmlFor="hourSelector">Seleccione una hora:</label>
              <select
                id="hourSelector"
                name="hourSelector"
                value={selectedHour}
                onChange={handleSelectHour}
                required
              >
                <option value="">Seleccione una hora</option>
                {availableHours.map((hour, index) => (
                  <option key={index} value={hour.hora}>{hour.hora}</option>
                ))}
              </select>
              {showPatientInfo && (
                <div>
                  <h4>Datos del Paciente:</h4>
                  <div className="form-group">
                    <label htmlFor="patientName">Nombre:</label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="patientRut">RUT:</label>
                    <input
                      type="text"
                      id="patientRut"
                      name="patientRut"
                      value={patientRut}
                      onChange={(e) => setPatientRut(e.target.value)}
                      required
                    />
                  </div>
                  <button type="button" onClick={handleSaveAppointment}>
                    Seleccionar
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p>No hay resultados disponibles para la fecha y tipo de examen seleccionados.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HU1Page;
