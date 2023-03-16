import FilterButton from './FilterButton';
import FilterWrap from './FilterWrap';
import MultiRangeSlider, { RangeValues } from './MultiRangeSlider';

const PriceRangeFilter: React.FC = () => (
  <FilterWrap>
    <FilterButton title="Precio">
      <MultiRangeSlider
        min={0}
        max={1000}
        valueSuffix="€"
        onChange={({ min, max }: RangeValues): void => (console.log(`min = ${min}, max = ${max}`))}
      />
    </FilterButton>
  </FilterWrap>
);

export default PriceRangeFilter;
