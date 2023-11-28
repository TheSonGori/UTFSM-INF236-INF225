import React from 'react';
import './HU3Page.css';
import Header from './components/Header';
import jsPDF from 'jspdf';

const HU3Page = () => {
  const generateReport = (event) => {
    event.preventDefault();

    // Obtén los valores de los campos del formulario justo antes de usarlos
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const personnel = document.getElementById('personnel').value;

    // Lógica para generar el informe
    console.log('Informe generado');

    // Crea un nuevo objeto jsPDF
    const pdf = new jsPDF();

    // Agrega contenido al PDF
    pdf.text(`Informe de Trabajo`, 20, 20);
    pdf.text(`Fecha de Inicio: ${startDate}`, 20, 30);
    pdf.text(`Fecha de Fin: ${endDate}`, 20, 40);
    pdf.text(`Personal: ${personnel}`, 20, 50);

    // Guarda el PDF con un nombre específico
    pdf.save('Informe.pdf');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Generar Informe de Trabajo</h2>
        <form id="reportForm" onSubmit={generateReport}>
          <div className="form-group">
            <label htmlFor="startDate">Fecha de Inicio:</label>
            <input type="date" id="startDate" name="startDate" required />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">Fecha de Fin:</label>
            <input type="date" id="endDate" name="endDate" required />
          </div>

          <div className="form-group">
            <label htmlFor="personnel">Personal:</label>
            <input
              type="text"
              id="personnel"
              name="personnel"
              placeholder="Nombre del personal"
              required
            />
          </div>

          <button type="submit">Generar Informe</button>
        </form>
      </div>
    </div>
  );
};

export default HU3Page;
