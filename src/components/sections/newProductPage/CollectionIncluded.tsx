import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import Image from 'next/image';
import NormalLink from '../items/NormalLink';
import BaseText from '../items/BaseText';
import TinyText from '../items/TinyText';

interface CollectionIncludedProps {
  src: string;
  title: string;
  author: string;
  href: string;
  hrefAuthor: string;
}
const CollectionIncluded: React.FC<WithClassName<CollectionIncludedProps>> = ({
  className,
  src,
  title,
  author,
  href,
  hrefAuthor,
}) => (
  <li className={twMerge('flex items-start flex-col text-center max-w-[250px] m-[0_auto]', className)}>
    <NormalLink
      href={href}
      className="min-w-[100px] w-[100px] lg:w-[180px] lg:min-w-[180px] flex m-auto items-start my-0 min-h-[100px] lg:min-h-[180px] overflow-hidden flex-col gap-2 lg:gap-0"
    >
      <Image alt="item" src={src} width="1038" height="1046" />
    </NormalLink>
    <div className="pt-1 w-full flex flex-col h-full lg:items-center">
      <NormalLink
        href={href}
        className="mb-1 lg:mb-2 flex-col h-full justify-center !flex xl:min-h-[53px]"
      >
        <BaseText className="line-clamp-3 leading-[18px] lg:leading-5">{title}</BaseText>
      </NormalLink>
      <TinyText>
        <NormalLink
          href={hrefAuthor}
          className="block hover:text-primary line-clamp-2 leading-[18px]"
        >
          {author}
        </NormalLink>
      </TinyText>
    </div>
  </li>
);
export default CollectionIncluded;
