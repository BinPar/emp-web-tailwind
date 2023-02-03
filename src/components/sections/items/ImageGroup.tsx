import Image from 'next/image';

import NormalLink from './NormalLink';
import TypeLink from './TypeLink';

interface ImageGroupProps {
  src: string;
  type: string;
}
const ImageGroup: React.FC<ImageGroupProps> = ({ src, type }) => (
  <NormalLink
    href="#"
    className="min-w-[100px] w-[100px] lg:w-[180px] lg:min-w-[180px] flex m-auto items-start my-0"
  >
    <Image alt="item" src={src} width="1038" height="1046" />
    <TypeLink href="#" className="lg:hidden inline">
      {type}
    </TypeLink>
  </NormalLink>
);

export default ImageGroup;
