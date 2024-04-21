import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Table from '../partials/dashboard/TableH1';
import SidebarH1 from '../partials/dashboard/SidBarH1'; // El modal a mostrar

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  // Estado para el modal y el ítem seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Para guardar el ítem seleccionado

  const handleOpenModal = (item) => {
    setIsModalOpen(true); // Abre el modal
    setSelectedItem(item); // Guarda el ítem seleccionado
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal
    setSelectedItem(null); // Limpia el ítem seleccionado
  };

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const isTableVisible = selectedPrice !== '' && selectedDate !== '';

  return (
    <div className="flex h-[100vh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Área de contenido */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Acciones */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Select para el precio */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <select className="form-select w-full" onChange={handlePriceChange}>
                  <option value="">Examenes</option>
                  <option value="Resonancia Magnetica">Resonancia Magnetica</option>
                  <option value="Tomografia Tac">Tomografia Tac</option>
                  <option value="Ecografia">Ecografia</option>
                  <option value="Rayos X">Rayos X</option>
                </select>
                {/* Datepicker */}
                <input 
                  type="date" 
                  className="form-input w-full"
                  onChange={handleDateChange}
                />
              </div>
            </div>

            {/* Mostrar la tabla solo si se han seleccionado precio y fecha */}
            {isTableVisible && (
              <Table 
                selectedItems={handleSelectedItems} 
                selectedPrice={selectedPrice} 
                selectedDate={selectedDate}
                handleOpenModal={handleOpenModal} // Pasar función con elemento
              />
            )}
          </div>
        </main>
      </div>

      {/* Mostrar el modal si está abierto */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <SidebarH1 item={selectedItem} handleCloseModal={handleCloseModal} /> {/* Pasar el ítem completo */}
          <button onClick={handleCloseModal} className="absolute top-0 right-0 m-4 text-white">Cerrar</button> {/* Botón para cerrar */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
