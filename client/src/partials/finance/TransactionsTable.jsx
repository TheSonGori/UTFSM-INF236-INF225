import React, { useState, useEffect } from 'react';
import TransactionItem from './TransactionsTableItem';

import Image01 from '../../images/transactions-image-01.svg';
import Image02 from '../../images/transactions-image-02.svg';
import Image03 from '../../images/user-36-05.jpg';
import Image04 from '../../images/transactions-image-03.svg';
import Image05 from '../../images/transactions-image-04.svg';
import Image06 from '../../images/transactions-image-05.svg';
import Image07 from '../../images/transactions-image-06.svg';
import Image08 from '../../images/transactions-image-07.svg';
import Image09 from '../../images/transactions-image-08.svg';

function TransactionsTable({
  selectedItems
}) {

  const transactions = [
    {
      id: '0',
      image: Image01,
      name: 'Form Builder CP',
      date: '22/01/2022',
      status: 'Pending',
      amount: '-$1,299.22',
    },
    {
      id: '1',
      image: Image02,
      name: 'Imperial Hotel ****',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$1,029.77',
    },
    {
      id: '2',
      image: Image03,
      name: 'Aprilynne Pills',
      date: '22/01/2022',
      status: 'Pending',
      amount: '+$499.99',
    },
    {
      id: '3',
      image: Image04,
      name: 'Google Limited UK',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$1,029.77',
    },
    {
      id: '4',
      image: Image05,
      name: 'Acme LTD UK',
      date: '22/01/2022',
      status: 'Pending',
      amount: '+$2,179.36',
    },
    {
      id: '5',
      image: Image04,
      name: 'Google Limited UK',
      date: '22/01/2022',
      status: 'Canceled',
      amount: '-$1,029.77',
    },
    {
      id: '6',
      image: Image06,
      name: 'Uber',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$272.88',
    },
    {
      id: '7',
      image: Image07,
      name: 'PublicOne Inc.',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$199.87',
    },
    {
      id: '8',
      image: Image08,
      name: 'Github Inc.',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$42.87',
    },
    {
      id: '9',
      image: Image09,
      name: 'Form Builder PRO',
      date: '22/01/2022',
      status: 'Completed',
      amount: '-$112.44',
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
                  <div className="font-semibold text-left">Counterparty</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Payment Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-right">Amount</div>
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
