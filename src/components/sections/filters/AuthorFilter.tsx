import { SetStateAction, useMemo, useState } from 'react';
import { allAuthorsMap, keyAuthorFilter } from '../../../utils/dataInfoTest/filterAuthor';
import CloseCircled from '../../icons/CloseCircled';
import SearchCircle from '../../icons/SearchCircle';
import SearchMv from '../../icons/SearchMv';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterWrap from './FilterWrap';
import ListItemKey from './ListItemKey';
import SearchForm from './SearchForm';

interface AuthorFilterProps {
  openMethod: React.Dispatch<SetStateAction<string>>;
  state: string;
}
const AuthorFilter: React.FC<AuthorFilterProps> = ({ openMethod, state }) => {
  const [sowSearch, SetSowSearch] = useState<boolean>(true);
  const [activeKey, setActiveKey] = useState('A');
  const [authors, setAuthors] = useState(allAuthorsMap.get(activeKey) || []);

  useMemo(() => {
    setAuthors(allAuthorsMap.get(activeKey) || []);
  }, [activeKey]);

  return (
    <FilterWrap>
      <FilterButton
        openMethod={openMethod}
        state={state}
        title="Autor"
        classWrap="lg:w-full left-0 z-10"
      >
        <div className="flex justify-between border-b border-gray-200 mb-6 pb-2">
          {!sowSearch ? (
            <SearchForm className='hidden lg:block'/>
          ) : (
            <ListItemKey
              activeKey={activeKey}
              changeValue={setActiveKey}
              keyItemsFilter={keyAuthorFilter}
              allItemsKey={allAuthorsMap}
              className='lg:flex hidden'
            />
          )}
<SearchForm className='block lg:hidden'/>
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
              <CloseCircled className="absolute top-0" />
            )}
          </button>
        </div>
        <FilterList
          data={authors}
          className="grid lg:grid-cols-3 max-h-[calc(100vh_-_410px)] overflow-auto"
          itemClassName='mb-0 lg:mb-2'
        />
      </FilterButton>
    </FilterWrap>
  );
};
export default AuthorFilter;
