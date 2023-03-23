import { useState } from 'react';
import DivWrapper from '../items/DivWrapper';
import AuthorFilter from './AuthorFilter';
import OthersFilter from './OthersFilter';
import PriceRangeFilter from './PriceRangeFilter';
import SpecialtyFilter from './SpecialityFilter';
import TypeFilter from './TypeFilter';
import VisualGroup from './VisualGroup';

interface FiltersProps {
  method: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}
const Filters: React.FC<FiltersProps> = ({ method, state }) => {
  const [openFilter, setOpenFilter] = useState('');
  return (
    <DivWrapper className="flex relative items-center justify-between bg-white">
      <div className="flex items-center">
        <p className="text-xs font-light text-gray-400 mr-5">Filtrar por</p>
        <TypeFilter openMethod={setOpenFilter} state={openFilter}/>
        <AuthorFilter openMethod={setOpenFilter} state={openFilter}/>
        <SpecialtyFilter openMethod={setOpenFilter} state={openFilter}/>
        <PriceRangeFilter openMethod={setOpenFilter} state={openFilter}/>
        <OthersFilter openMethod={setOpenFilter} state={openFilter}/>
      </div>
      <VisualGroup method={method} state={state} />
    </DivWrapper>
  );
};
export default Filters;
