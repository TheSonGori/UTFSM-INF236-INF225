import React from 'react';

function TableItemH1(props) {
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2">
        <div className="flex items-center">
          <div className="font-medium text-slate-800 dark:text-slate-100">{props.name}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.date}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.status}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <button id={props.id} className="`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors duration-300 hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-400/30 dark:hover:text-emerald-400" onClick={props.handleClick}>Reserva</button>
          </label>
        </div>
      </td>
    </tr>
  );
}

export default TableItemH1;
