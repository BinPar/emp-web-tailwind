import dataType from '../../../utils/dataInfoTest/filterType';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterWrap from './FilterWrap';

const TypeFilter: React.FC = () => (
  <FilterWrap>
    <FilterButton title="Tipo">
      <FilterList data={dataType} />
    </FilterButton>
  </FilterWrap>
);
export default TypeFilter;
