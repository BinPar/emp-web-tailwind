import Image from 'next/image';

import BaseText from '../items/BaseText';
import CurrentPrice from '../items/CurrentPrice';
import InfoWrap from '../items/InfoWrap';
import NormalLink from '../items/NormalLink';
import Price from '../items/Price';
import TinyText from '../items/TinyText';
import TypeLink from '../items/TypeLink';

interface ItemColeccionesProps {
  src: string;
  href: string;
  title: string;
  quantity: number;
  type: string;
  currentPrice: string;
}
const ItemColecciones: React.FC<ItemColeccionesProps> = ({ src, href, title, quantity, type, currentPrice }) => (
  <>
    <NormalLink
      href={href}
      className="w-[180px] min-w-[180px] flex m-auto items-start my-0 min-h-[180px] overflow-hidden flex-col gap-2 lg:gap-0"
    >
      <Image alt="item" src={src} width="1038" height="1046" />
    </NormalLink>
    <div className="pt-1 w-full flex flex-col h-full items-center ml-0">
        <TypeLink href="#" className="m-auto text-center leading-[8.8px] my-2 inline">
          {type}
        </TypeLink>
      <NormalLink
        href="#"
        className="mb-2 flex-col h-full justify-center flex xl:min-h-[53px]"
      >
        <BaseText className="line-clamp-3 max-w-[250px]">{title}</BaseText>
      </NormalLink>
      <div className="flex h-full justify-end flex-col w-full">
          <TinyText className='mb-2'>
              {quantity} Obras
          </TinyText>
        <InfoWrap className='mt-0'>
          <Price className="mt-0 relative justify-center gap-1">
            <CurrentPrice>{currentPrice}</CurrentPrice>
            <span className='text-greencart text-xl font-semibold'>/ MES</span>
          </Price>
        </InfoWrap>
      </div>
    </div>
  </>
);

export default ItemColecciones;
