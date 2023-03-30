/* eslint-disable no-nested-ternary */
import React, { Dispatch, SetStateAction } from 'react';

import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import { FilterRealData } from '../../../utils/dataInfoTest/filterModelTemp';


import ItemKey from './ItemKey';

interface ListItemKeyProps {
  keyItemsFilter: string[];
  allItemsKey: Map<string, FilterRealData[]>;
  dropRight?: boolean;
  checkable?: boolean;
  activeKey: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

const ListItemKey: React.FC<WithClassName<ListItemKeyProps>> = ({
  className,
  allItemsKey,
  keyItemsFilter,
  dropRight,
  activeKey,
  changeValue,
}) => (
  <div className={twMerge('flex gap-5 items-center', className)}>
    {keyItemsFilter.map((key) => (
    
      <ItemKey
        className={allItemsKey.has(key)
          ? !dropRight && activeKey === key
            ? 'text-primary'
            : 'text-gray-400'
          : 'text-gray-200 pointer-events-none'}
        dropRight={dropRight}
        key={key}
        value={key}
        changeValue={changeValue} 
        activeKey={activeKey}      />
    ))}
  </div>
);

export default ListItemKey;
