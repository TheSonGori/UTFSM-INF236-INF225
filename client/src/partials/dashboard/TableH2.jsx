import React, { useState, useEffect } from 'react';
import TransactionItem from './TransactionsTableH2';

import Image01 from '../../images/H2User.png';

function TransactionsTable({
  selectedItems
}) {

  const transactions = [
    {
      id: '0',
      image: Image01,
      name: 'Santiago Pérez',
      date: '22/01/2022',
      status: 'Pending',
      amount: 'Resonancia Magnetica',
    },
    {
      id: '1',
      image: Image01,
      name: 'Valeria Gutiérrez',
      date: '22/01/2022',
      status: 'Completed',
      amount: 'Resonancia Magnetica',
    },
    {
      id: '2',
      image: Image01,
      name: 'Diego Ramírez',
      date: '22/01/2022',
      status: 'Pending',
      amount: 'Tomografia TAC',
    },
    {
      id: '3',
      image: Image01,
      name: 'Martina Morales',
      date: '22/01/2022',
      status: 'Completed',
      amount: 'Rayos X',
    },
    {
      id: '4',
      image: Image01,
      name: 'Lucas Fernández',
      date: '22/01/2022',
      status: 'Pending',
      amount: 'Rayos X',
    },
    {
      id: '5',
      image: Image01,
      name: 'Emilia Torres',
      date: '22/01/2022',
      status: 'Canceled',
      amount: 'Ecografia',
    },
    {
      id: '6',
      image: Image01,
      name: 'Mateo García',
      date: '22/01/2022',
      status: 'Completed',
      amount: 'Tomografia TAC',
    },
    {
      id: '7',
      image: Image01,
      name: 'Isabella Rivas',
      date: '22/01/2022',
      status: 'Completed',
      amount: 'Resonancia Magnetica',
    },
    {
      id: '8',
      image: Image01,
      name: 'Nicolás Sánchez',
      date: '22/01/2022',
      status: 'Completed',
      amount: 'Rayos X',
    },
    {
      id: '9',
      image: Image01,
      name: 'Alejandro Vega',
      date: '22/01/2022',
      status: 'Completed',
      amount: 'Tomografia TAC',
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(transactions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map(li => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white dark:bg-slate-900">
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Paciente</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Dia de la Cita</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Estado de la Cita</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-right">Examen</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700">
              {list.map((transaction) => {
                return (
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
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionsTable;
