import Image from 'next/image';
import BaseText from '../items/BaseText';
import TinyText from '../items/TinyText';
import NormalLink from '../items/NormalLink';
import TypeLink from '../items/TypeLink';

interface ItemMyCourseProps {
  src: string;
  title: string;
  author: string;
  type: string;
}

const ItemMyCourse: React.FC<ItemMyCourseProps> = ({ src, title, author, type }) => (
  <div className="flex flex-col text-center md:text-left md:flex-row items-center gap-4 lg:gap-5">
    <Image
      width={210}
      height={210}
      alt="myCourses"
      src={src}
      className="min-w-[175px] lg:min-w-[210px]"
    />
    <div className="flex flex-col">
      <BaseText className="line-clamp-3 mb-3 order-2 md:order-1">{title}</BaseText>
      <div className="min-h-[37px] max-h-[37px] line-clamp-2 mb-3 order-3 md:order-2">
        <TinyText>
          <NormalLink href="#" className="block hover:text-primary">
            {author}
          </NormalLink>
        </TinyText>
      </div>
      <TypeLink href="#" className="m-auto md:ml-0 text-center leading-[8.8px] mb-3 md:mb-0 order-1 md:order-3">
        {type}
      </TypeLink>
      <button
        type="button"
        className="order-4 m-auto md:ml-0 border-2 border-primary hover:bg-primary hover:text-white transition-all duration-150 text-primary text-1xs uppercase tracking-[1px] h-10 px-4 block mt-4"
      >
        Acceder
      </button>
    </div>
  </div>
);
export default ItemMyCourse;
