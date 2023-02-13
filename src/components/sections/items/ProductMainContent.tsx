import React from 'react';
import Image from 'next/image';

import ObjetivesModule from './ ObjectivesModule';
import AddressedModule from './AddressedModule';
import DescriptionModule from './DescriptionModule';
import ItemAcordeon from './ItemAcordeon';
import ProductInfo from './ProductInfo';
import IntroductionModule from './IntroductionModule';
import ContentModule from './ContentModule';

import SampleModule from './SampleModule';

import TitleModule from './TitleModule';
import PaymentModule from './PaymentModule';
import MethodModule from './MethodModule';

const ProductMainContent: React.FC = () => (
  <>
    <ProductInfo />
    <ItemAcordeon title="INTRODUCCION">
      <IntroductionModule />
    </ItemAcordeon>
    <ItemAcordeon title="UNIVERSIDAD">
      <div className="w-52 m-auto">
        <Image alt="ufv" src="/assets/ufv.png" width={1400} height={377} />
      </div>
    </ItemAcordeon>
    <ItemAcordeon title="DESCRIPCIÓN">
      <DescriptionModule />
    </ItemAcordeon>
    <ItemAcordeon title="DIRIGIDO A">
      <AddressedModule />
    </ItemAcordeon>
    <ItemAcordeon title="OBJETIVOS">
      <ObjetivesModule />
    </ItemAcordeon>
    <ItemAcordeon title="CONTENIDOS">
      <ContentModule />
    </ItemAcordeon>
    <ItemAcordeon title="TEMA DE MUESTRA">
      <SampleModule />
    </ItemAcordeon>
    <ItemAcordeon title="TITULACIÓN">
      <TitleModule />
    </ItemAcordeon>
    <ItemAcordeon title="MÉTODO">
      <MethodModule />
    </ItemAcordeon>
    <ItemAcordeon title="MÉTODOS DE PAGO">
      <PaymentModule />
    </ItemAcordeon>
  </>
);

export default ProductMainContent;
