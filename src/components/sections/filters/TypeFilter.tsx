import { SetStateAction } from 'react';
import dataType from '../../../utils/dataInfoTest/filterType';
import FilterButton from './FilterButton';
import FilterList from './FilterList';
import FilterWrap from './FilterWrap';

interface TypeFilterProps {
  openMethod: React.Dispatch<SetStateAction<string>>;
  state: string;
}
const TypeFilter: React.FC<TypeFilterProps> = ({openMethod, state}) => (
  <FilterWrap>
    <FilterButton openMethod={openMethod} state={state} title="Tipo" classWrap='text-left lg:text-center'>
      <FilterList data={dataType}/>
    </FilterButton>
  </FilterWrap>
);
export default TypeFilter;
