import { SetStateAction } from 'react';
import FilterButton from './FilterButton';
import FilterWrap from './FilterWrap';
import MultiRangeSlider, { RangeValues } from './MultiRangeSlider';
import { allTagsMap } from '../../../utils/dataInfoTest/filterTag';
import SwitchButton from './SwitchButton';
import TagFilter from './TagFilter';

interface OthersFilterProps {
  openMethod: React.Dispatch<SetStateAction<string>>;
  state: string;
}

const OthersFilter: React.FC<OthersFilterProps> = ({openMethod, state}) => (
  <FilterWrap>
    <FilterButton title="Más filtros" classWrap="left-0 z-10" openMethod={openMethod} state={state}>
      <TagFilter data={allTagsMap.tags} title="etiquetas" />
      <TagFilter data={allTagsMap.editorial} title="editoriales" />
      <div className="flex gap-8 items-center">
        <MultiRangeSlider
          min={2007}
          max={2023}
          onChange={({ min, max }: RangeValues): void => console.log(`min = ${min}, max = ${max}`)}
        />
        <div className="max-w-[400px]">
          <TagFilter data={allTagsMap.availability} title="disponibilidad" />
        </div>

        <SwitchButton title="material complementario" />
      </div>
    </FilterButton>
  </FilterWrap>
);
export default OthersFilter;
