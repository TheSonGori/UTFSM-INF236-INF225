import React from 'react';

function SidebarH1() { // Nombres de componentes siempre en mayúscula
  return (
    <div> {/* Esto es JSX, no puedes tener comentarios flotantes */}
      <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
        <div className="text-slate-800 dark:text-slate-100 font-semibold mb-2">Order Summary</div>
        {/* Order details */}
        <ul className="mb-4">
          <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
            <div>Products & Subscriptions</div>
            <div className="font-medium text-slate-800 dark:text-slate-100">$205</div>
          </li>
          <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
            <div>Shipping</div>
            <div className="font-medium text-slate-800 dark:text-slate-100">-</div>
          </li>
          <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
            <div>Taxes</div>
            <div className="font-medium text-slate-800 dark:text-slate-100">$48</div>
          </li>
          <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
            <div>Total due (including taxes)</div>
            <div className="font-medium text-emerald-600">$253</div>
          </li>
        </ul>
        
        {/* Promo box */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium mb-1" htmlFor="promo">Promo Code</label>
            <div className="text-sm text-slate-400 dark:text-slate-500 italic">optional</div>
          </div>
          <input id="promo" className="form-input w-full mb-2" type="text" />
          <button
            className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed shadow-none"
            disabled
          >
            Apply Code
          </button>
        </div>
        
        <div className="mb-4">
          <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Buy Now - $253.00</button>
        </div>
        
        <div className="text-xs text-slate-500 italic text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <a className="underline hover:no-underline" href="#0">Terms</a>.
        </div>
      </div>
    </div>
  );
}

export default SidebarH1; // Nombres de componentes siempre en mayúscula
