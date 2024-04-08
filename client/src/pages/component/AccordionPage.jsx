import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import AccordionBasic from '../../components/AccordionBasic';
import AccordionTableItem from '../../components/AccordionTableItem';
import AccordionTableRichItem from '../../components/AccordionTableRichItem';

import Image01 from '../../images/user-40-07.jpg';

function AccordionPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    {
      id: '0',
      image: Image01,
      customer: 'Mark Cameron',
      total: '$129.00',
      status: 'Refunded',
      items: '1',
      location: '🇲🇽 New Mexico, MX',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

  const items2 = [
    {
      id: '0',
      image: Image01,
      customer: 'Mark Cameron',
      email: 'mark.cameron@app.com',
      location: '🇬🇧 London, UK',
      date: '22/01/2021',
      amount: '+249.88',
      descriptionTitle: 'Excepteur sint occaecat cupidatat.',
      descriptionBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Accordion ✨</h1>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700">

              {/* Components */}
              <div className="space-y-8 mt-8">

                {/* Basic Accordion */}
                <div>
                  <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Basic Accordion</h2>
                  <AccordionBasic title="Accordion Title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </AccordionBasic>
                </div>

                {/* Table Row with Accordion */}
                <div>
                  <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Table Row with Accordion</h2>
                  {/* Start */}
                  <div className="rounded-sm border border-slate-200 dark:border-slate-700">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full dark:bg-slate-800 dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700">
                        {
                          items.map(item => {
                            return (
                              <AccordionTableItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                customer={item.customer}
                                total={item.total}
                                status={item.status}
                                items={item.items}
                                location={item.location}
                                type={item.type}
                                description={item.description}
                              />
                            )
                          })
                        }
                      </table>
                    </div>
                  </div>
                  {/* End */}
                </div>

                {/* Rich Table Row with Accordion */}
                <div>
                  <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Rich Table Row with Accordion</h2>
                  {/* Start */}
                  <div className="rounded-sm border border-slate-200 dark:border-slate-700">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full dark:bg-slate-800 dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700">
                        {
                          items2.map(item => {
                            return (
                              <AccordionTableRichItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                customer={item.customer}
                                email={item.email}
                                location={item.location}
                                date={item.date}
                                amount={item.amount}
                                descriptionTitle={item.descriptionTitle}
                                descriptionBody={item.descriptionBody}
                              />
                            )
                          })
                        }
                      </table>
                    </div>
                  </div>
                  {/* End */}
                </div>

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default AccordionPage;