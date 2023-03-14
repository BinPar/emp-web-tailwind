import FilterButton from './FilterButton';
import FilterWrap from './FilterWrap';
import MultiRangeSlider, { RangeValues } from './MultiRangeSlider';

const PriceRangeFilter: React.FC = () => (
  <FilterWrap>
    <FilterButton title="Precio">
      {/* <Minus className="w-5 text-gray-200 absolute" /> */}
      <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }: RangeValues): void => console.log(`min = ${min}, max = ${max}`)}
      />
      {/* <Plus className="w-5 text-gray-200 absolute" /> */}
    </FilterButton>
  </FilterWrap>
);

export default PriceRangeFilter;
