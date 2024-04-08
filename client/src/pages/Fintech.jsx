import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../components/Datepicker';
import FintechIntro from '../partials/fintech/FintechIntro';
import FintechCard01 from '../partials/fintech/FintechCard01';
import FintechCard02 from '../partials/fintech/FintechCard02';
import FintechCard03 from '../partials/fintech/FintechCard03';
import FintechCard04 from '../partials/fintech/FintechCard04';
import FintechCard05 from '../partials/fintech/FintechCard05';
import FintechCard06 from '../partials/fintech/FintechCard06';
import FintechCard07 from '../partials/fintech/FintechCard07';
import FintechCard08 from '../partials/fintech/FintechCard08';
import FintechCard09 from '../partials/fintech/FintechCard09';
import FintechCard10 from '../partials/fintech/FintechCard10';
import FintechCard11 from '../partials/fintech/FintechCard11';
import FintechCard12 from '../partials/fintech/FintechCard12';
import FintechCard13 from '../partials/fintech/FintechCard13';
import FintechCard14 from '../partials/fintech/FintechCard14';

function Fintech() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-[100dvh] overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Fintech ✨</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />

                {/* Add account button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add Account</span>
                </button>

              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Page Intro */}
              <FintechIntro />
              {/* Line chart (Portfolio Returns) */}
              <FintechCard01 />
              {/* Credit Card */}
              <FintechCard02 />
              {/* Bar chart (Cash Flow) */}
              <FintechCard03 />
              {/* Horizontal bar chart (Cash Flow by Account) */}
              <FintechCard04 />
              {/* Table (Recent Expenses) */}
              <FintechCard05 />
              {/* Table (Recent Earnings) */}
              <FintechCard06 />
              {/* Line chart (Saving Goals) */}
              <FintechCard07 />
              {/* Line chart (Growth Portfolio) */}
              <FintechCard08 />
              {/* Pie chart (Portfolio Value) */}
              <FintechCard09 />
              {/* Line charts (Stock graphs) */}
              <FintechCard10 />
              <FintechCard11 />
              <FintechCard12 />
              <FintechCard13 />
              {/* Table (Market Trends) */}
              <FintechCard14 />

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Fintech;