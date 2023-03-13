import { useMemo, useState } from 'react';
import { allSpecialtyMap, keySpecialtyFilter } from '../../../utils/dataInfoTest/filterSpecialty';

import CloseCircled from '../../icons/CloseCircled';
import SearchCircle from '../../icons/SearchCircle';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterWrap from './FilterWrap';
import ListItemKey from './ListItemKey';
import SearchForm from './SearchForm';

const SpecialtyFilter: React.FC = () => {
  const [sowSearch, SetSowSearch] = useState<boolean>(true);
  const [activeKey, setActiveKey] = useState('');
  const [specialty, setAuthors] = useState(allSpecialtyMap.get(activeKey) || []);

  useMemo(() => {
    setAuthors(allSpecialtyMap.get(activeKey) || []);
  }, [activeKey]);
  return (
    <FilterWrap>
      <FilterButton
        title="Especialidad"
        classWrap="m-auto max-w-[calc(100%_-_50px)] lg:max-w-[calc(100%_-_100px)] xl:max-w-[calc(100%_-_160px)] xl3:max-w-[1440px] z-10"
      >
        <div className="flex justify-between border-b border-gray-200 mb-6 pb-2">
          <SearchForm />
          <button
            type="button"
            className="text-gray-500 relative w-8"
            onClick={(): void => SetSowSearch(!sowSearch)}
          >
            {sowSearch ? (
              <SearchCircle className="absolute -top-1 rotate-[89deg]" />
            ) : (
              <CloseCircled className="absolute -top-1" />
            )}
          </button>
        </div>
        <div className="flex gap-5">
          <ListItemKey
            className="flex-col items-start gap-2 pl-6"
            activeKey={activeKey}
            changeValue={setActiveKey}
            keyItemsFilter={keySpecialtyFilter}
            allItemsKey={allSpecialtyMap}
            dropRight
          />
          <FilterList
            itemClassName="w-[300px]"
            data={specialty}
            className="grid grid-cols-1 max-h-[calc(100vh_-_410px)] overflow-auto border-l border-gray-200 pl-5"
            dropRight
            specialty
          />
        </div>
      </FilterButton>
    </FilterWrap>
  );
};
export default SpecialtyFilter;
