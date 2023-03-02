/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useMemo } from 'react';

import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import { FilterRealData } from '../../../utils/dataInfoTest/filterModelTemp';

import ItemFilter from './ItemFilter';

interface FilterListProps {
  itemClassName?: string;
  data: FilterRealData[];
}

const FilterList: React.FC<WithClassName<FilterListProps>> = ({
  className,
  itemClassName,
  data,
}) => {
  const [itemFilter, setItemFilter] = useState<React.ReactNode>();
  useMemo(() => {
    setItemFilter(
      data.map(({ data, value }, i) => (
          <ItemFilter
          // eslint-disable-next-line react/no-array-index-key
          key={`${i}`} value={data} data={value} className={itemClassName} />
      )),
    );
  }, [data]);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    <form className={twMerge('inline-block', className)}>{itemFilter}</form>
  );
};

export default FilterList;
