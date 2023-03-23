import { useState } from 'react';
import ArrowDown from '../../icons/ArrowDown';
import Close from '../../icons/Close';
import DivWrapper from '../items/DivWrapper';
import AuthorFilter from './AuthorFilter';
import OrderBy from './OrderBy';
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
  const [openMvFilter, setOpenMvFilter] = useState(false);

  return (
    <>
      <div className="bg-white flex items-center justify-between lg:hidden border-b border-b-gray-200 px-5 h-16 relative">
        <button
          type="button"
          className="text-gray-400 flex items-center gap-2 uppercase text-sm font-normal tracking-[1px]"
          onClick={(): void => setOpenMvFilter(!openMvFilter)}
        >
          Filtros
          <ArrowDown className="w-4" strokeWidth={4} />
        </button>
        <OrderBy />
      </div>
      <div
        className={`bg-white lg:hidden bottom-0 fixed top-0 w-full z-10${
          openMvFilter ? ' block' : ' hidden'
        }`}
      >
        <div className="bg-primarilight text-primary h-16 flex px-5 justify-between items-center">
          <p className="tracking-[.8px] font-semibold">SELECIONA TUS FILTROS</p>
          <button type="button" onClick={(): void => setOpenMvFilter(!openMvFilter)}>
            <Close className="w-8" />
          </button>
        </div>
        <TypeFilter openMethod={setOpenFilter} state={openFilter} />
        <AuthorFilter openMethod={setOpenFilter} state={openFilter} />
        <SpecialtyFilter openMethod={setOpenFilter} state={openFilter} />
        <PriceRangeFilter openMethod={setOpenFilter} state={openFilter} />
        <OthersFilter openMethod={setOpenFilter} state={openFilter} />
      </div>
      <DivWrapper className="hidden lg:flex relative items-center justify-between bg-white">
        <div className="flex items-center">
          <p className="text-xs font-light text-gray-400 mr-5">Filtrar por</p>
          <TypeFilter openMethod={setOpenFilter} state={openFilter} />
          <AuthorFilter openMethod={setOpenFilter} state={openFilter} />
          <SpecialtyFilter openMethod={setOpenFilter} state={openFilter} />
          <PriceRangeFilter openMethod={setOpenFilter} state={openFilter} />
          <OthersFilter openMethod={setOpenFilter} state={openFilter} />
        </div>
        <VisualGroup method={method} state={state} />
      </DivWrapper>
    </>
  );
};
export default Filters;
