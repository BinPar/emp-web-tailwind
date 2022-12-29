import Image from 'next/image';

import Authors from './items/Authors';
import DivWrapper from './items/DivWrapper';
import Section from './items/Section';
import SubHeader from './items/SubHeader';
import Titles from './items/Titles';

const Recommended: React.FC = () => (
  <Section className="bg-gray-50">
    <DivWrapper>
      <SubHeader>RECOMENDADOS PANAMERICANA</SubHeader>
      <div className="flex">
        <div className="w-[260px]">
          <Image alt="item" src="/img/pastilla.jpg" width="1038" height="1046" />
        </div>
        <div>
          <a href="#" className="mb-2 block">
            <Titles>
              Experto Universitario en Psiquiatría y Salud Mental para Atención Primaria
            </Titles>
          </a>
          <Authors>
            Gabriel Rubio Valladolid, Vicente Rodríguez Pèrez, Rocío Martín Valero, Raúl Cobreros
            Mielgo
          </Authors>
        </div>
      </div>
    </DivWrapper>
  </Section>
);

export default Recommended;
