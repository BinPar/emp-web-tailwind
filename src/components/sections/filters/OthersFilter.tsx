import FilterButton from './FilterButton';
import FilterWrap from './FilterWrap';
import MultiRangeSlider, { RangeValues } from './MultiRangeSlider';

const OthersFilter: React.FC = () => (
  <FilterWrap>
    <FilterButton title="Más filtros">
      <MultiRangeSlider
        min={2007}
        max={2023}
        onChange={({ min, max }: RangeValues): void => console.log(`min = ${min}, max = ${max}`)}
      />
    </FilterButton>
  </FilterWrap>
);
export default OthersFilter;
