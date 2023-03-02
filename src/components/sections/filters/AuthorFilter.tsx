import { useMemo, useState } from 'react';
import { allAuthorsMap } from '../../../utils/dataInfoTest/filterAuthor';
import SearchCircle from '../../icons/SearchCircle';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterWrap from './FilterWrap';
import ListItemKey from './ListItemKey';

const AuthorFilter: React.FC = () => {
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
          <ListItemKey activeKey={activeKey} changeValue={setActiveKey} />
          <button type="button">
            <SearchCircle />
          </button>
        </div>
        <FilterList data={authors} className="grid grid-cols-3" />
      </FilterButton>
    </FilterWrap>
  );
};
export default AuthorFilter;
