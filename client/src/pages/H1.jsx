import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Table from '../partials/dashboard/TableH1';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  // Manejo de cambio de precio
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  // Manejo de cambio de fecha
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Verificamos si el precio y la fecha están seleccionados
  const isTableVisible = selectedPrice !== '' && selectedDate !== '';

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={sidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Select for price */}
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

            {/* Mostrar la tabla solo si se han seleccionado precio y fecha, y pasar las props */}
            {isTableVisible && (
              <Table 
                selectedItems={handleSelectedItems} 
                selectedPrice={selectedPrice} 
                selectedDate={selectedDate} 
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;