import { useState } from 'react';
import DesktopFilters from './DesktopFilters';
import MvFilters from './MvFilters';

interface FiltersProps {
  method: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}
const Filters: React.FC<FiltersProps> = ({ method, state }) => {
  const [openFilter, setOpenFilter] = useState('');
  const [openMvFilter, setOpenMvFilter] = useState(false);

  return (
    <>
      <MvFilters
        openMvMethod={setOpenMvFilter}
        mvState={openMvFilter}
        setOpenFilter={setOpenFilter}
        openFilter={openFilter}
      />
      <DesktopFilters
        setOpenFilter={setOpenFilter}
        openFilter={openFilter}
        method={method}
        state={state}
      />
    </>
  );
};
export default Filters;
