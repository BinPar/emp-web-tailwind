import React from 'react';

import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import Publication from './Publication';
import ImageGroup from '../items/ImageGroup';
import InfoGroup from '../items/InfoGroup';
import List from '../../icons/list';

const src1 = '/img/expert1.jpg';
const title1 = 'Experto en Ecografía Musculoesquelética';
const author1 = 'Íñigo Iriarte Posse, Ramon Balius Matas';
const type1 = 'expertos';
const initial1 = '';
const fullText1 = '';
const oldPrice1 = '1.690';
const currentPrice1 = '1.436,50';

const src2 = '/img/bookAuthor1.jpg';
const title2 = 'Ecografía Musculoesquelética: Atlas Ilustrado';
const author2 = 'SEMG Sociedad Española de Médicos Generales y de Familia';
const type2 = 'digital';
const type22 = 'Duo';
const initial2 = '';
const fullText2 = '';
const oldPrice2 = '49';
const currentPrice2 = '1.436,50';

const src3 = '/img/bookAuthor2.jpg';
const title3 = 'Ecografía Musculoesquelética: Exploración anatómica y Patología';
const author3 ='Íñigo Iriarte Posse, Carles Pedret Carballido, Ramon Balius Matas, Luis Cerezal Pesquera';
const type3 = 'digital';
const type23 = 'Duo';
const initial3 = '';
const fullText3 = '';
const oldPrice3 = '137';
const currentPrice3 = '130,15';

const AuthorPublications: React.FC = () => (
  <section className="bg-lightgray py-10">
    <DivWrapper className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)]">
      <SubHeader>
        PUBLICACIONES Y FORMACIÓN
        <button type="button">
          <List />
        </button>
      </SubHeader>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl2:grid-cols-5 gap-5 md:gap-10 xl2:gap-16">
        <Publication>
          <ImageGroup src={src2} type={type2} />
          <InfoGroup
            className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
            title={title2}
            author={author2}
            type={type2}
            type2={type22}
            initial={initial2}
            fullText={fullText2}
            oldPrice={oldPrice2}
            currentPrice={currentPrice2}
          />
        </Publication>
        <Publication>
          <ImageGroup src={src1} type={type1} />
          <InfoGroup
            className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
            title={title1}
            author={author1}
            type={type1}
            initial={initial1}
            fullText={fullText1}
            oldPrice={oldPrice1}
            currentPrice={currentPrice1}
          />
        </Publication>
        <Publication>
          <ImageGroup src={src3} type={type3} />
          <InfoGroup
            className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
            title={title3}
            author={author3}
            type={type3}
            type2={type23}
            initial={initial3}
            fullText={fullText3}
            oldPrice={oldPrice3}
            currentPrice={currentPrice3}
          />
        </Publication>
      </div>
    </DivWrapper>
  </section>
);

export default AuthorPublications;
