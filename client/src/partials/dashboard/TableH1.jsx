import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TableItemH1';
import axios from 'axios';

function TableH1({
  selectedPrice,
  selectedDate,
  selectedItems,
  handleOpenModal 
}) {
  const [transactions, setTransactions] = useState([]);
  const [id_nousados, setId_nousados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/examenes-medicos/${selectedDate}/${selectedPrice}/`
        );
        setId_nousados(response.data); // Almacena el resultado
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData(); // Obtén datos cuando cambie `selectedDate` o `selectedPrice`
  }, [selectedDate, selectedPrice]);

  useEffect(() => {
    // Asegúrate de que `id_nousados` esté en el formato correcto
    const idsNoUsados = Array.isArray(id_nousados)
      ? id_nousados.map((item) => item.hora_examen)
      : [];

    const updatedTransactions = [
      {
        id: '0',
        name: selectedDate,
        date: '08:30',
        status: selectedPrice,
      },
      {
        id: '1',
        name: selectedDate,
        date: '09:00',
        status: selectedPrice,
      },
      {
        id: '2',
        name: selectedDate,
        date: '09:30',
        status: selectedPrice,
      },
      {
        id: '3',
        name: selectedDate,
        date: '10:00',
        status: selectedPrice,
      },
      {
        id: '4',
        name: selectedDate,
        date: '10:30',
        status: selectedPrice,
      },
      {
        id: '5',
        name: selectedDate,
        date: '11:00',
        status: selectedPrice,
      },
      {
        id: '6',
        name: selectedDate,
        date: '11:30',
        status: selectedPrice,
      },
      {
        id: '7',
        name: selectedDate,
        date: '12:00',
        status: selectedPrice,
      },
      {
        id: '8',
        name: selectedDate,
        date: '12:30',
        status: selectedPrice,
      },
      {
        id: '9',
        name: selectedDate,
        date: '14:15',
        status: selectedPrice,
      },
      {
        id: '10',
        name: selectedDate,
        date: '14:45',
        status: selectedPrice,
      },
      {
        id: '11',
        name: selectedDate,
        date: '15:15',
        status: selectedPrice,
      },
      {
        id: '12',
        name: selectedDate,
        date: '15:45',
        status: selectedPrice,
      },
      {
        id: '13',
        name: selectedDate,
        date: '16:15',
        status: selectedPrice,
      },
      {
        id: '14',
        name: selectedDate,
        date: '16:45',
        status: selectedPrice,
      },
    ];

    // Filtrar para excluir transacciones cuyos IDs están en `idsNoUsados`
    const filteredTransactions = updatedTransactions.filter(
      (t) => !idsNoUsados.includes(parseInt(t.id)) // Asegúrate de comparar enteros
    );

    setTransactions(filteredTransactions); // Actualiza el estado con las transacciones filtradas
  }, [selectedPrice, selectedDate, id_nousados]); // Asegúrate de incluir `id_nousados` en las dependencias

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(selectAll ? [] : transactions.map((t) => t.id));
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setIsCheck((prev) => [...prev, id]);
    } else {
      setIsCheck((prev) => prev.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
  }, [isCheck, selectedItems]); // Asegúrate de pasar el estado actualizado

  return (
    <div className="bg-white dark:bg-slate-900">
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Día</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Hora</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Tipo</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700">
              {transactions.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  id={transaction.id}
                  name={transaction.name}
                  date={transaction.date}
                  status={transaction.status}
                  handleClick={handleClick}
                  handleOpenModal={handleOpenModal}
                  isChecked={isCheck.includes(transaction.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

TableH1.propTypes = {
  selectedPrice: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  selectedItems: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default TableH1;
