import { Dispatch, SetStateAction } from 'react';
import DivWrapper from '../items/DivWrapper';
import AuthorFilter from './AuthorFilter';
import OthersFilter from './OthersFilter';
import PriceRangeFilter from './PriceRangeFilter';
import SpecialtyFilter from './SpecialityFilter';
import TypeFilter from './TypeFilter';
import VisualGroup from './VisualGroup';

interface DesktopFiltersProps {
  setOpenFilter: Dispatch<SetStateAction<string>>;
  openFilter: string;
  method: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}

const DesktopFilters: React.FC<DesktopFiltersProps> = ({
  setOpenFilter,
  openFilter,
  method,
  state,
}) => (
  <DivWrapper className="hidden lg:flex relative items-center justify-between bg-white">
    <div className="flex items-center">
      <p className="text-xs font-light text-gray-400 mr-5">Filtrar por</p>
      <TypeFilter openMethod={setOpenFilter} state={openFilter} />
      <SpecialtyFilter openMethod={setOpenFilter} state={openFilter} />
      <AuthorFilter openMethod={setOpenFilter} state={openFilter} />
      <PriceRangeFilter openMethod={setOpenFilter} state={openFilter} />
      <OthersFilter openMethod={setOpenFilter} state={openFilter} />
    </div>
    <VisualGroup method={method} state={state} />
  </DivWrapper>
);
export default DesktopFilters;
