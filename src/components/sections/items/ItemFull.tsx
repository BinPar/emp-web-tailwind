import Image from 'next/image';
import BaseText from './BaseText';
import CurrentPrice from './CurrentPrice';
import InfoWrap from './InfoWrap';
import NewItemBadge from './NewItemBadge';
import NormalLink from './NormalLink';
import OldPrice from './OldPrice';
import Price from './Price';
import TinyText from './TinyText';
import TypeLink from './TypeLink';

const ItemFull: React.FC = () => (
  <div className="flex md:flex-row flex-col items-center gap-4 max-w-[860px]">
    <div className="w-[230px] min-w-[230px] md:w-[260px] md:min-w-[260px] text-center">
      <Image alt="item" src="/img/pastilla.jpg" width="1038" height="1046" />
      <TypeLink href="#" className="max-h-[22px] whitespace-nowrap inline md:hidden">
            Diplomas de especialización
          </TypeLink>
    </div>
    <div className='text-center md:text-left'>
      <a href="#" className="mb-2 block">
        <BaseText className="line-clamp-2">
          Diploma de Especialización en Bases de la Cirugía de Sarcomas de la AEC
        </BaseText>
      </a>
      <div className="flex gap-1 flex-wrap justify-center md:justify-start">
        <NormalLink href="#">
          <TinyText className="group-hover:text-primary line-clamp-1">
            AEC Asociación Española de Cirujanos,,...
          </TinyText>
        </NormalLink>
      </div>
      <InfoWrap>
        <TinyText className="uppercase mb-1 text-[#7a94a4] hidden md:block">ISBN 9788411061797</TinyText>
        <TinyText className="mb-2 md:line-clamp-4 hidden md:block">
          Este curso revisa de forma multidisciplinar el manejo quirúrgico de los sarcomas, en
          especial de localización retroperitoneal y abdominopélvica.
        </TinyText>
        <div className="flex items-center gap-2 absolute">
          <TypeLink href="#" className="max-h-[22px] whitespace-nowrap hidden md:inline">
            Diplomas de especialización
          </TypeLink>
          <NewItemBadge className='hidden lg:block' initials="n" fullText="novedad" />
        </div>
        <Price className='md:relative top-9 lg:top-10 justify-center md:justify-start'>
          <OldPrice>3.500</OldPrice>
          <CurrentPrice>2.975</CurrentPrice>
          <NewItemBadge className='block lg:hidden' initials="n" fullText="novedad" />
        </Price>
      </InfoWrap>
    </div>
  </div>
);

export default ItemFull;
