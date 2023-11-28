import React, { useState, useEffect } from 'react';
import './HU2Page.css';
import Header from './components/Header';
const HU2Page = () => {
  const [citas, setCitas] = useState([]);
  const [citaEditada, setCitaEditada] = useState({
    id: "",
    fecha: "",
    hora: "",
    tipo: ""
  });
  const [historialCambios, setHistorialCambios] = useState([]);
  const [usuarioEditor, setUsuarioEditor] = useState("");
  const [ventanaEmergenteVisible, setVentanaEmergenteVisible] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCitaEditada({ ...citaEditada, [name]: value });
  }

  const guardarCambios = () => {
    const citaAntesDeEdicion = citas.find((c) => c.id === citaEditada.id);
    citaAntesDeEdicion.usuarioEditor = usuarioEditor;

    setHistorialCambios([...historialCambios, citaAntesDeEdicion]);

    setVentanaEmergenteVisible(false);

    const nuevasCitas = citas.map((c) => {
      if (c.id === citaEditada.id) {
        return citaEditada;
      } else {
        return c;
      }
    });

    setCitas(nuevasCitas);
    setCitaEditada({
      id: "",
      fecha: "",
      hora: "",
      tipo: ""
    });
  }

  const cargarCitasEjemplo = () => {
    const ejemplos = [
      { id: "1", fecha: "2023-11-01", hora: "10:00 AM", tipo: "Radiografia Femur" },
      { id: "2", fecha: "2023-11-02", hora: "02:30 PM", tipo: "Escaner" },
    ];
    setCitas(ejemplos);
  }

  useEffect(() => {
    cargarCitasEjemplo();
  }, []);

  return (
    
    <div className="App">
      <Header/>
      <h1>Editar Citas</h1>
      <div>
        <h2>Citas Programadas</h2>
        <ul>
          {citas.map((c) => (
            <li key={c.id}>
              <span>Fecha: {c.fecha}, Hora: {c.hora}, Tipo: {c.tipo}</span>
              <buttonn
                onClick={() => {
                  setCitaEditada(c);
                  setUsuarioEditor("Nombre del Usuario");
                  setVentanaEmergenteVisible(true);
                }}
              >
                Editar
              </buttonn>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Historial de Cambios</h2>
        <ul>
          {historialCambios.map((c, index) => (
            <li key={index}>
              <span>Fecha: {c.fecha}, Hora: {c.hora}, Tipo: {c.tipo}</span>
              {c.usuarioEditor && (
                <span> Editado por: {c.usuarioEditor}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {ventanaEmergenteVisible && (
        <div className="ventana-emergente">
          <h2>Editar Cita</h2>
          <div className="espace">
            <label>Fecha:</label>
            <input
              type="date"
              name="fecha"
              value={citaEditada.fecha}
              onChange={handleInputChange}
            />
          </div>
          <div className="espace">
            <label>Hora:</label>
            <input
              type="time"
              name="hora"
              value={citaEditada.hora}
              onChange={handleInputChange}
            />
          </div>
          <div className="espace">
            <label>Tipo:</label>
            <input
              type="text"
              name="tipo"
              value={citaEditada.tipo}
              onChange={handleInputChange}
            />
          </div>
          <div className="espace">
            <label>Usuario que edita:</label>
            <input
              type="text"
              className="usuario-editor"
              name="usuarioEditor"
              value={usuarioEditor}
              onChange={(e) => setUsuarioEditor(e.target.value)}
            />
          </div>
          <div className="boton-guardar">
            <button onClick={guardarCambios}>Guardar Cambios</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default HU2Page
