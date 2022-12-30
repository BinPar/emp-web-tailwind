import Image from 'next/image';

import TinyText from './items/TinyText';
import DivWrapper from './items/DivWrapper';
import Section from './items/Section';
import SubHeader from './items/SubHeader';
import BaseText from './items/BaseText';
import TypeLink from './items/TypeLink';
import NewItemBadge from './items/NewItemBadge';
import OldPrice from './items/OldPrice';
import CurrentPrice from './items/CurrentPrice';
import Price from './items/Price';
import InfoWrap from './items/InfoWrap';

const Recommended: React.FC = () => (
  <Section className="bg-gray-50">
    <DivWrapper>
      <SubHeader>RECOMENDADOS PANAMERICANA</SubHeader>
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
            <a href="#">
              <TinyText>Gabriel Rubio Valladolid,</TinyText>
            </a>
            <a href="#">
              <TinyText>Rocío Martín Valero,</TinyText>
            </a>
            <a href="#">
              <TinyText>Raúl Cobreros Mielgo</TinyText>
            </a>
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
    </DivWrapper>
  </Section>
);

export default Recommended;
