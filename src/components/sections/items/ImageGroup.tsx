import Image from 'next/image';

import NormalLink from './NormalLink';
import TypeP from './TypeP';

interface ImageGroupProps {
  src: string;
  type: string;
  type2?: string;
}
const ImageGroup: React.FC<ImageGroupProps> = ({ src, type, type2 }) => (
  <NormalLink
    href="/productPage"
    className="min-w-[100px] w-[100px] lg:w-[180px] lg:min-w-[180px] flex m-auto items-start my-0 lg:min-h-[180px] overflow-hidden flex-col gap-2 lg:gap-0"
  >
    <Image alt="item" src={src} width="1038" height="1046" />
    {type2 === undefined ? (
      <TypeP className="lg:hidden inline m-auto my-0 text-center leading-[8.8px]">{type}</TypeP>
    ) : (
      <>
        <TypeP className="lg:hidden max-w-[52px] min-w-[52px] inline m-auto my-0 text-center leading-[8.8px]">
          {type}
        </TypeP>
        <TypeP className="lg:hidden max-w-[52px] min-w-[52px] inline m-auto my-0 text-center leading-[8.8px]">
          {type2}
        </TypeP>
      </>
    )}
  </NormalLink>
);

export default ImageGroup;
