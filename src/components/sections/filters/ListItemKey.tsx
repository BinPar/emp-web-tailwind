/* eslint-disable no-nested-ternary */
import React, { Dispatch, SetStateAction } from 'react';

import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import { allAuthorsMap, keyAuthorFilter } from '../../../utils/dataInfoTest/filterAuthor';

import ItemKey from './ItemKey';

interface ListItemKeyProps {
  activeKey: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

const ListItemKey: React.FC<WithClassName<ListItemKeyProps>> = ({
  className,
  activeKey,
  changeValue,
}) => (
  <div className={twMerge('flex gap-5 items-center', className)}>
    {keyAuthorFilter.map((key) => (
      <ItemKey
        className={
          allAuthorsMap.has(key)
            ? activeKey === key
              ? 'text-primary'
              : 'text-gray-400'
            : 'text-gray-200 pointer-events-none'
        }
        key={key}
        value={key}
        changeValue={changeValue}
      />
    ))}
  </div>
);

export default ListItemKey;
