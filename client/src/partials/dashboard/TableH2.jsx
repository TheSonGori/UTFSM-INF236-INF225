import React, { useState, useEffect } from 'react';
import TransactionItem from './TransactionsTableH2';
import Image01 from '../../images/H2User.png';

function TransactionsTable({ selectedItems }) {
    const initialTransactions = [
        {
          id: '0',
          image: Image01,
          name: 'Santiago Pérez',
          date: '27/04/2024',
          status: 'Pendiente',
          amount: 'Resonancia Magnetica',
        },
        {
          id: '1',
          image: Image01,
          name: 'Valeria Gutiérrez',
          date: '21/01/2024',
          status: 'Completada',
          amount: 'Resonancia Magnetica',
        },
        {
          id: '2',
          image: Image01,
          name: 'Diego Ramírez',
          date: '24/03/2024',
          status: 'Completada',
          amount: 'Tomografia TAC',
        },
        {
          id: '3',
          image: Image01,
          name: 'Martina Morales',
          date: '01/05/2024',
          status: 'Pendiente',
          amount: 'Rayos X',
        },
        {
          id: '4',
          image: Image01,
          name: 'Lucas Fernández',
          date: '01/05/2024',
          status: 'Pendiente',
          amount: 'Rayos X',
        },
        {
          id: '5',
          image: Image01,
          name: 'Emilia Torres',
          date: '14/02/2024',
          status: 'Cancelada',
          amount: 'Ecografia',
        },
        {
          id: '6',
          image: Image01,
          name: 'Mateo García',
          date: '29/01/2024',
          status: 'Completada',
          amount: 'Tomografia TAC',
        },
        {
          id: '7',
          image: Image01,
          name: 'Isabella Rivas',
          date: '17/04/2024',
          status: 'Completada',
          amount: 'Resonancia Magnetica',
        },
        {
          id: '8',
          image: Image01,
          name: 'Nicolás Sánchez',
          date: '08/03/2024',
          status: 'Completada',
          amount: 'Rayos X',
        },
        {
          id: '9',
          image: Image01,
          name: 'Alejandro Vega',
          date: '10/02/2024',
          status: 'Completada',
          amount: 'Tomografia TAC',
        },
  
    ];

    const [transactions, setTransactions] = useState(initialTransactions);
    const [selectAll, setSelectAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(transactions);
    }, [transactions]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setIsCheck(list.map(li => li.id));
        if (selectAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setSelectAll(false);
        if (checked) {
            setIsCheck([...isCheck, id]);
        } else {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    useEffect(() => {
        selectedItems(isCheck);
    }, [isCheck]);

    // Función para manejar la edición de los detalles de una transacción
    const onEdit = (id, updatedDetails) => {
        // Actualizar la lista de transacciones
        setTransactions((prevTransactions) =>
            prevTransactions.map((transaction) => {
                if (transaction.id === id) {
                    // Actualizar la transacción con los nuevos detalles
                    return { ...transaction, ...updatedDetails };
                }
                return transaction;
            })
        );
    };

    return (
        <div className="bg-white dark:bg-slate-900">
            <div>
                {/* Tabla */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full dark:text-slate-300">
                        {/* Encabezado de la tabla */}
                        <thead className="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                    <div className="flex items-center">
                                        <label className="inline-flex">
                                            <span className="sr-only">Seleccionar todo</span>
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                            />
                                        </label>
                                    </div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">Paciente</div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">Día de la cita</div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-left">Estado de la cita</div>
                                </th>
                                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    <div className="font-semibold text-right">Examen</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Cuerpo de la tabla */}
                        <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700">
                            {list.map((transaction) => (
                                <TransactionItem
                                    key={transaction.id}
                                    id={transaction.id}
                                    image={transaction.image}
                                    name={transaction.name}
                                    date={transaction.date}
                                    status={transaction.status}
                                    amount={transaction.amount}
                                    handleClick={handleClick}
                                    isChecked={isCheck.includes(transaction.id)}
                                    onEdit={onEdit}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransactionsTable;
