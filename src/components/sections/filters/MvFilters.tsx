import { Dispatch, SetStateAction } from 'react';
import ArrowDown from '../../icons/ArrowDown';
import Close from '../../icons/Close';
import AuthorFilter from './AuthorFilter';
import OrderBy from './OrderBy';
import OthersFilter from './OthersFilter';
import PriceRangeFilter from './PriceRangeFilter';
import SpecialtyFilter from './SpecialityFilter';
import TypeFilter from './TypeFilter';

interface MvFiltersProps {
  openMvMethod: Dispatch<SetStateAction<boolean>>;
  mvState: boolean;
  setOpenFilter: Dispatch<SetStateAction<string>>;
  openFilter: string;
}

const MvFilters: React.FC<MvFiltersProps> = ({
  openMvMethod,
  mvState,
  setOpenFilter,
  openFilter,
}) => (
  <>
    <div className="bg-white flex items-center justify-between lg:hidden border-b border-b-gray-200 px-5 h-16 relative">
      <button
        type="button"
        className="text-gray-400 flex items-center gap-2 uppercase text-sm font-normal tracking-[1px]"
        onClick={(): void => openMvMethod(!mvState)}
      >
        Filtros
        <ArrowDown className="w-4" strokeWidth={4} />
      </button>
      <OrderBy />
    </div>
    <div
      className={`bg-white lg:hidden bottom-0 fixed top-0 w-full z-10${
        mvState ? ' block' : ' hidden'
      }`}
    >
      <div className="bg-primarylight text-primary h-16 flex px-5 justify-between items-center">
        <p className="tracking-[.8px] font-semibold">SELECIONA TUS FILTROS</p>
        <button type="button" onClick={(): void => openMvMethod(!mvState)}>
          <Close className="w-8" />
        </button>
      </div>
      <SpecialtyFilter openMethod={setOpenFilter} state={openFilter} />
      <TypeFilter openMethod={setOpenFilter} state={openFilter} />
      <AuthorFilter openMethod={setOpenFilter} state={openFilter} />
      <PriceRangeFilter openMethod={setOpenFilter} state={openFilter} />
      <OthersFilter openMethod={setOpenFilter} state={openFilter} />
    </div>
  </>
);
export default MvFilters;
