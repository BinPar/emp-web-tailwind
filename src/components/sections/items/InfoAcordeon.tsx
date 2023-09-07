import Image from 'next/image';

import ObjetivesModule from './ ObjectivesModule';
import AddressedModule from './AddressedModule';
import AuthorsModule from './AuthorsModule';
import ContentModule from './ContentModule';
import DescriptionModule from './DescriptionModule';
import IntroductionModule from './IntroductionModule';
import ItemAcordeon from './ItemAcordeon';
import MethodModule from './MethodModule';
import PaymentModule from './PaymentModule';
import SampleModule from './SampleModule';
import TagsModule from './TagsModule';
import TitleModule from './TitleModule';

const InfoAcordeon: React.FC = () => (
  <>
    <ItemAcordeon id="introduction" title="Introducción">
      <IntroductionModule />
    </ItemAcordeon>
    <ItemAcordeon id="university" title="Universidad">
      <div className="w-52 m-auto">
        <Image alt="ufv" src="/assets/ufv.png" width={1400} height={377} />
      </div>
    </ItemAcordeon>
    <ItemAcordeon id="description" title="Descripción">
      <DescriptionModule />
    </ItemAcordeon>
    <ItemAcordeon id="addressed" title="Dirigido a">
      <AddressedModule />
    </ItemAcordeon>
    <ItemAcordeon id="objectives" title="Objetivos">
      <ObjetivesModule />
    </ItemAcordeon>
    <ItemAcordeon id="contents" title="Contenidos">
      <ContentModule />
    </ItemAcordeon>
    <ItemAcordeon id="sample" title="Tema de muestra">
      <SampleModule />
    </ItemAcordeon>
    <ItemAcordeon id="title" title="Titulación">
      <TitleModule />
    </ItemAcordeon>
    <ItemAcordeon id="method" title="Método">
      <MethodModule />
    </ItemAcordeon>
    <ItemAcordeon id="payment" title="Métodos de pago">
      <PaymentModule />
    </ItemAcordeon>
    <ItemAcordeon id="author" title="Autores">
      <AuthorsModule />
    </ItemAcordeon>
    <ItemAcordeon id="tags" title="Etiquetas">
      <TagsModule />
    </ItemAcordeon>
  </>
);
export default InfoAcordeon;
