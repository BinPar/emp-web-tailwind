import { WithChildren } from '../../../model/react';

interface TagsItemProps{
    link: string;
}

const TagsItem: React.FC<WithChildren<TagsItemProps>> = ({ children, link }) => (
  <li className="text-gray-400 mb-1 first:mt-1">
    <a href={link} className='text-xs tracking-[1px] text-gray-400 hover:text-primary'>{children}</a>
  </li>
);

export default TagsItem;
