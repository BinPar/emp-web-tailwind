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
  <div className="flex items-center gap-4 max-w-[860px]">
    <div className="w-[260px] min-w-[260px]">
      <Image alt="item" src="/img/pastilla.jpg" width="1038" height="1046" />
    </div>
    <div>
      <a href="#" className="mb-2 block">
        <BaseText>
          Experto Universitario en Psiquiatría y Salud Mental para Atención Primaria
        </BaseText>
      </a>
      <div className="flex gap-1">
        <NormalLink href="#">
          <TinyText className='group-hover:text-primary'>Gabriel Rubio Valladolid,</TinyText>
        </NormalLink>
        <NormalLink href="#">
          <TinyText className='group-hover:text-primary'>Rocío Martín Valero,</TinyText>
        </NormalLink>
        <NormalLink href="#">
          <TinyText className='group-hover:text-primary'>Raúl Cobreros Mielgo</TinyText>
        </NormalLink>
      </div>
      <InfoWrap>
        <TinyText className="uppercase mb-1 text-[#7a94a4]">ISBN 9788411061797</TinyText>
        <TinyText className="mb-2">
          Este curso revisa de forma multidisciplinar el manejo quirúrgico de los sarcomas, en
          especial de localización retroperitoneal y abdominopélvica.
        </TinyText>
        <div className="flex items-center gap-2">
          <TypeLink href="#" className="max-h-[22px]">
            Diplomas de especialización
          </TypeLink>
          <NewItemBadge initials="ne" fullText="nueva edición" />
        </div>
        <Price>
          <OldPrice>3.500</OldPrice>
          <CurrentPrice>2.975</CurrentPrice>
        </Price>
      </InfoWrap>
    </div>
  </div>
);

export default ItemFull;
