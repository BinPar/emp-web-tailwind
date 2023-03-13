import { useMemo, useState } from 'react';
import { allAuthorsMap, keyAuthorFilter } from '../../../utils/dataInfoTest/filterAuthor';
import CloseCircled from '../../icons/CloseCircled';
import SearchCircle from '../../icons/SearchCircle';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterWrap from './FilterWrap';
import ListItemKey from './ListItemKey';
import SearchForm from './SearchForm';

const AuthorFilter: React.FC = () => {
  const [sowSearch, SetSowSearch] = useState<boolean>(true);
  const [activeKey, setActiveKey] = useState('A');
  const [authors, setAuthors] = useState(allAuthorsMap.get(activeKey) || []);

  useMemo(() => {
    setAuthors(allAuthorsMap.get(activeKey) || []);
  }, [activeKey]);

  return (
    <FilterWrap>
      <FilterButton
        title="Autor"
        classWrap=" m-auto w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] z-10"
      >
        <div className="flex justify-between border-b border-gray-200 mb-6 pb-2">
          {!sowSearch ? (
            <SearchForm />
          ) : (
            <ListItemKey
              activeKey={activeKey}
              changeValue={setActiveKey}
              keyItemsFilter={keyAuthorFilter}
              allItemsKey={allAuthorsMap}
            />
          )}

          <button
            type="button"
            className="text-gray-500 relative w-8"
            onClick={(): void => SetSowSearch(!sowSearch)}
          >
            {sowSearch ? (
              <SearchCircle className="absolute top-0 rotate-[89deg]" />
            ) : (
              <CloseCircled className="absolute top-0" />
            )}
          </button>
        </div>
        <FilterList
          data={authors}
          className="grid grid-cols-3 max-h-[calc(100vh_-_410px)] overflow-auto"
        />
      </FilterButton>
    </FilterWrap>
  );
};
export default AuthorFilter;
