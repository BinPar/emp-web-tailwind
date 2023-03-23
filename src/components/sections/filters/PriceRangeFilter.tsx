import { SetStateAction } from 'react';
import FilterButton from './FilterButton';
import FilterWrap from './FilterWrap';
import MultiRangeSlider, { RangeValues } from './MultiRangeSlider';

interface PriceFilterProps {
  openMethod: React.Dispatch<SetStateAction<string>>;
  state: string;
}

const PriceRangeFilter: React.FC<PriceFilterProps> = ({ openMethod, state }) => (
  <FilterWrap>
    <FilterButton title="Precio" classWrap="pt-7" openMethod={openMethod} state={state}>
      <MultiRangeSlider
        min={0}
        max={1000}
        valueSuffix="€"
        onChange={({ min, max }: RangeValues): void => console.log(`min = ${min}, max = ${max}`)}
      />
    </FilterButton>
  </FilterWrap>
);

export default PriceRangeFilter;
