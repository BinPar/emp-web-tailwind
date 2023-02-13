import React from 'react';
import Image from 'next/image';

import ObjetivesModule from './ ObjectivesModule';
import AddressedModule from './AddressedModule';
import DescriptionModule from './DescriptionModule';
import ItemAcordeon from './ItemAcordeon';
import ProductInfo from './ProductInfo';
import IntroductionModule from './IntroductionModule';

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
  </>
);

export default ProductMainContent;
