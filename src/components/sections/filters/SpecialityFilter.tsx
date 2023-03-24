import { SetStateAction, useMemo, useState } from 'react';
import { allSpecialtyMap, keySpecialtyFilter } from '../../../utils/dataInfoTest/filterSpecialty';

import CloseCircled from '../../icons/CloseCircled';
import SearchCircle from '../../icons/SearchCircle';
import SearchMv from '../../icons/SearchMv';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterWrap from './FilterWrap';
import ListItemKey from './ListItemKey';
import SearchForm from './SearchForm';

interface SpecialtyFilterProps {
  openMethod: React.Dispatch<SetStateAction<string>>;
  state: string;
}

const SpecialtyFilter: React.FC<SpecialtyFilterProps> = ({openMethod, state}) => {
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
        classWrap="left-0 z-10"
        openMethod={openMethod} state={state}
      >
        <div className="flex justify-between border-b border-gray-200 mb-6 pb-2">
          <SearchForm />
          <button
            type="button"
            className="text-gray-500 relative w-8"
            onClick={(): void => SetSowSearch(!sowSearch)}
          >
            {sowSearch ? (
              <>
              <SearchCircle className="absolute -top-1 rotate-[89deg] hidden lg:block" />
              <SearchMv className='absolute -top-1 lg:hidden'/>
              </>
              
            ) : (
              <CloseCircled className="absolute -top-1" />
            )}
          </button>
        </div>
        <div className="flex-col lg:flex-row flex gap-5">
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
            className="grid grid-cols-1 max-h-[calc(100vh_-_410px)] overflow-auto border-t pt-6 lg:pt-0 lg:border-t-0 lg:border-l border-gray-200 pl-5"
            dropRight
            specialty
          />
        </div>
      </FilterButton>
    </FilterWrap>
  );
};
export default SpecialtyFilter;
