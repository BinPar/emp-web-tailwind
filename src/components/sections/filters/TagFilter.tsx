import { FilterRealData } from '../../../utils/dataInfoTest/filterModelTemp';
import FilterList from './FilterList';

interface TagFilterProps {
  title: string;
  data: FilterRealData[];
}

const TagFilter: React.FC<TagFilterProps> = ({ title, data }) => (
  <div className='mb-7'>
    <h3 className='uppercase font-semibold text-sm text-gray-400 text-left mb-3'>{title}</h3>
    <FilterList
      data={data}
      className="flex flex-wrap gap-x-5 gap-y-2"
      tagType
      itemClassName="border-2 border-gray-300 uppercase font-semibold inline-block mb-0 px-2 hover:bg-primary hover:text-white hover:border-primary"
    />
  </div>
);

export default TagFilter;
