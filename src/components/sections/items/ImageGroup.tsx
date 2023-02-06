import Image from 'next/image';

import NormalLink from './NormalLink';
import TypeLink from './TypeLink';

interface ImageGroupProps {
  src: string;
  type: string;
  type2?: string;
}
const ImageGroup: React.FC<ImageGroupProps> = ({ src, type, type2 }) => (
  <NormalLink
    href="#"
    className="min-w-[100px] w-[100px] lg:w-[180px] lg:min-w-[180px] flex m-auto items-start my-0 lg:min-h-[180px] overflow-hidden flex-col gap-2 lg:gap-0"
  >
    <Image alt="item" src={src} width="1038" height="1046" />
    {type2 === undefined ? (
      <TypeLink href="#" className="lg:hidden inline m-auto my-0 text-center leading-[8.8px]">
        {type}
      </TypeLink>
    ) : (
      <>
        <TypeLink href="#" className="lg:hidden max-w-[52px] min-w-[52px] inline m-auto my-0 text-center leading-[8.8px]">
          {type}
        </TypeLink>
        <TypeLink href="#" className="lg:hidden max-w-[52px] min-w-[52px] inline m-auto my-0 text-center leading-[8.8px]">
          {type2}
        </TypeLink>
      </>
    )}
  </NormalLink>
);

export default ImageGroup;
