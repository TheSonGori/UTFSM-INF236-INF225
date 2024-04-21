import React from 'react';

function TableItemH1({ id, name, date, status, handleOpenModal }) {
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-slate-800 dark:text-slate-100">{name}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{date}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{status}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <button 
              className="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors duration-300 hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-400/30 dark:hover:text-emerald-400"
              onClick={() => handleOpenModal({ id, name, date, status })} // Llamar con todo el objeto
            >
              Reserva
            </button>
          </label>
        </div>
      </td>
    </tr>
  );
}

export default TableItemH1;
