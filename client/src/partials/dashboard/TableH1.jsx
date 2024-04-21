import React, { useState, useEffect } from 'react';
import TransactionItem from './TableItemH1';

function TableH1({
   selectedPrice, selectedDate, selectedItems
}) {
  // Creamos el estado para las transacciones
  const [transactions, setTransactions] = useState([]);

  // Cuando `selectedPrice` o `selectedDate` cambien, actualiza `transactions`
  useEffect(() => {
    const updatedTransactions = [
      {
        id: '0',
        name: selectedDate,
        date: '09:30',
        status: selectedPrice,
      },
      {
        id: '1',
        name: selectedDate,
        date: '10:30',
        status: selectedPrice,
      },
      {
        id: '2',
        name: selectedDate,
        date: '11:30',
        status: selectedPrice,
      },
      {
        id: '3',
        name: selectedDate,
        date: '12:30',
        status: selectedPrice,
      },
      {
        id: '4',
        name: selectedDate,
        date: '13:30',
        status: selectedPrice,
      },
    ];

    setTransactions(updatedTransactions);
  }, [selectedPrice, selectedDate]);

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
  }, [isCheck, selectedItems]);

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

export default TableH1;
