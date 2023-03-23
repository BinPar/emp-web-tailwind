import { useState } from 'react';
import { allOrdersMap } from '../../../utils/dataInfoTest/orderBy';

import Alphabetic from '../../icons/Alphabetic';
import ArrowDown from '../../icons/ArrowDown';
import Clock from '../../icons/Clock';
import Eye from '../../icons/Eye';
import FullStar from '../../icons/FullStar';
import MoneyDown from '../../icons/MoneyDown';
import MoneyUp from '../../icons/MoneyUp';
import FilterWrap from './FilterWrap';

const OrderBy: React.FC = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [order, setOrder] = useState('relevancy');
  return (
    <FilterWrap>
      <div className="flex items-center">
        <p className="uppercase text-sm font-normal tracking-[1px] lg:normal-case lg:tracking-normal lg:text-xs lg:font-light text-gray-400 mr-5">
          Ordenar por
        </p>
        <button
          className="text-primary"
          type="button"
          onClick={(): void => setOpenFilter(!openFilter)}
        >
          <div className="flex items-center gap-1">
            {order === 'relevancy' && <FullStar className="w-6 lg:w-5" />}
            {order === 'alphabetic' && <Alphabetic className="w-6 lg:w-5" />}
            {order === 'most-seen' && <Eye className="w-6 lg:w-5" />}
            {order === 'most-recent' && <Clock className="w-6 lg:w-5" />}
            {order === 'lowest-price' && <MoneyDown className="w-6 lg:w-5" />}
            {order === 'hightest-price' && <MoneyUp className="w-6 lg:w-5" />}
            <ArrowDown
              strokeWidth={3}
              className={`w-3 transition-all duration-200${openFilter ? ' rotate-180' : ''}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`border-b left-0 top-16 lg:left-auto lg:w-auto w-full z-10 lg:border-2 bg-white border-gray-200 absolute lg:top-12 py-5 px-6 ${
          openFilter ? ' inline-block' : ' hidden'
        }
        `}
      >
        {allOrdersMap.order.map(({ data, value }) => (
          <button
            key={value}
            className={`text-gray-400 uppercase lg:normal-case font-normal tracking-[1px] text-sm block mb-3 last:mb-0 hover:text-primary transition-all duration-200${
              order === value ? ' text-primary' : ' text-gray-400'
            }`}
            type="button"
            value={value}
            onClick={(): void => {
              setOrder(value);
              setOpenFilter(!openFilter);
            }}
          >
            {data}
          </button>
        ))}
      </div>
    </FilterWrap>
  );
};

export default OrderBy;
