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
    <ItemAcordeon id="introduction" title="INTRODUCCION">
      <IntroductionModule />
    </ItemAcordeon>
    <ItemAcordeon id="university" title="UNIVERSIDAD">
      <div className="w-52 m-auto">
        <Image alt="ufv" src="/assets/ufv.png" width={1400} height={377} />
      </div>
    </ItemAcordeon>
    <ItemAcordeon id="description" title="DESCRIPCIÓN">
      <DescriptionModule />
    </ItemAcordeon>
    <ItemAcordeon id="addressed" title="DIRIGIDO A">
      <AddressedModule />
    </ItemAcordeon>
    <ItemAcordeon id="objectives" title="OBJETIVOS">
      <ObjetivesModule />
    </ItemAcordeon>
    <ItemAcordeon id="contents" title="CONTENIDOS">
      <ContentModule />
    </ItemAcordeon>
    <ItemAcordeon id="sample" title="TEMA DE MUESTRA">
      <SampleModule />
    </ItemAcordeon>
    <ItemAcordeon id="title" title="TITULACIÓN">
      <TitleModule />
    </ItemAcordeon>
    <ItemAcordeon id="method" title="MÉTODO">
      <MethodModule />
    </ItemAcordeon>
    <ItemAcordeon id="payment" title="MÉTODOS DE PAGO">
      <PaymentModule />
    </ItemAcordeon>
    <ItemAcordeon id="author" title="AUTORES">
      <AuthorsModule />
    </ItemAcordeon>
    <ItemAcordeon id="tags" title="ETIQUETAS">
      <TagsModule />
    </ItemAcordeon>
  </>
);
export default InfoAcordeon;
