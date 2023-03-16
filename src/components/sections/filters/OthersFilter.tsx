import FilterButton from './FilterButton';
import FilterWrap from './FilterWrap';
import MultiRangeSlider, { RangeValues } from './MultiRangeSlider';
import { allTagsMap } from '../../../utils/dataInfoTest/filterTag';
import SwitchButton from './SwitchButton';
import TagFilter from './TagFilter';

const OthersFilter: React.FC = () => (
  <FilterWrap>
    <FilterButton title="Más filtros" classWrap='z-20'>
      <TagFilter data={allTagsMap.tags} title="etiquetas" />
      <TagFilter data={allTagsMap.editorial} title="editoriales" />
      <div className="flex gap-8 items-center">
        <MultiRangeSlider
          min={2007}
          max={2023}
          onChange={({ min, max }: RangeValues): void => console.log(`min = ${min}, max = ${max}`)}
        />
        <TagFilter data={allTagsMap.availability} title="disponibilidad" />
        <SwitchButton title="material complementario" />
      </div>
    </FilterButton>
  </FilterWrap>
);
export default OthersFilter;
