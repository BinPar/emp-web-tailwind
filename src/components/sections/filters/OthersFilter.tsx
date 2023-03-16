import FilterButton from './FilterButton';
import FilterWrap from './FilterWrap';
import MultiRangeSlider, { RangeValues } from './MultiRangeSlider';
import SwitchButton from './SwitchButton';

const OthersFilter: React.FC = () => (
  <FilterWrap>
    <FilterButton title="Más filtros">
      <MultiRangeSlider
        min={2007}
        max={2023}
        onChange={({ min, max }: RangeValues): void => console.log(`min = ${min}, max = ${max}`)}
      />
      <SwitchButton title='material complementario'/>
    </FilterButton>
  </FilterWrap>
);
export default OthersFilter;
