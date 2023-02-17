/* eslint-disable max-len */
import React, { useState } from 'react';

import SubHeader from '../items/SubHeader';
import Publication from './Publication';
import List from '../../icons/List';
import Items from '../../icons/Items';
import ItemMode from './ItemMode';
import ListMode from './ListMode';
import Section from '../Section';

const src1 = '/img/expert1.jpg';
const title1 = 'Experto en Ecografía Musculoesquelética';
const author1 = 'Íñigo Iriarte Posse, Ramon Balius Matas';
const info1 =
  'Los ecógrafos han mejorado mucho en calidad y resolución y la técnica se ha expandido hacia otras especialidades. Es por esto que la ecografía musculoesquelética se ha desarrollado tremendamente en los últimos 7-8 años.';
const type1 = 'expertos';
const initial1 = '';
const fullText1 = '';
const oldPrice1 = '1.690';
const currentPrice1 = '1.436,50';

const src2 = '/img/bookAuthor1.jpg';
const title2 = 'Ecografía Musculoesquelética: Atlas Ilustrado';
const author2 = 'SEMG Sociedad Española de Médicos Generales y de Familia';
const info2 =
  'Los ecógrafos han sufrido una evolución vertiginosa en los últimos 10 años. Las mejoras técnicas, el creciente interés en la ecografía musculoesquelética y la introducción de las técnicas intervencionistas guiadas por ecografía, han supuesto un amplio desarrollo del diagnóstico y el tratamiento de las patologías del sistema musculoesquelético.';
const type2 = 'digital';
const type22 = 'Duo';
const initial2 = '';
const fullText2 = '';
const oldPrice2 = '49';
const currentPrice2 = '1.436,50';

const src3 = '/img/bookAuthor2.jpg';
const title3 = 'Ecografía Musculoesquelética: Exploración anatómica y Patología';
const author3 =
  'Íñigo Iriarte Posse, Carles Pedret Carballido, Ramon Balius Matas, Luis Cerezal Pesquera';
const type3 = 'digital';
const info3 =
  'Se trata de una ambiciosa obra que incluye todo lo necesario para adquirir un alto nivel en conocimientos anatómicos y diagnósticos de la mayoría de las patologías musculoesqueléticas.';
const type23 = 'Duo';
const initial3 = '';
const fullText3 = '';
const oldPrice3 = '137';
const currentPrice3 = '130,15';

const AuthorPublications: React.FC = () => {
  const [switchItems, setSwitchItems] = useState<boolean>(false);
  return (
    <Section className="bg-lightgray">
      <SubHeader className="flex items-center justify-between">
        PUBLICACIONES Y FORMACIÓN
        <div className="hidden lg:gap-5 lg:flex">
          <button type="button" onClick={(): void => setSwitchItems(!switchItems)}>
            <List className={`w-5${switchItems ? ' text-primary' : ''}`} />
          </button>
          <button type="button" onClick={(): void => setSwitchItems(!switchItems)}>
            <Items className={`w-5${!switchItems ? ' text-primary' : ''}`} />
          </button>
        </div>
      </SubHeader>
      <div
        className={`grid${
          switchItems
            ? ' grid-cols-1 gap-7 lg:gap-10'
            : ' grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl2:grid-cols-5 gap-5 md:gap-10 xl2:gap-16'
        }`}
      >
        <Publication
          className={`${switchItems ? ' lg:border-b lg:border-secondary lg:pb-7 !flex-row' : ''}`}
        >
          {!switchItems ? (
            <ItemMode
              src={src2}
              type={type2}
              title={title2}
              author={author2}
              type2={type22}
              initial={initial2}
              fullText={fullText2}
              oldPrice={oldPrice2}
              currentPrice={currentPrice2}
            />
          ) : (
            <ListMode
              src={src2}
              type={type2}
              title={title2}
              info={info2}
              author={author2}
              type2={type22}
              initial={initial2}
              fullText={fullText2}
              oldPrice={oldPrice2}
              currentPrice={currentPrice2}
            />
          )}
        </Publication>
        <Publication
          className={`${switchItems ? ' lg:border-b lg:border-secondary lg:pb-7 !flex-row' : ''}`}
        >
          {!switchItems ? (
            <ItemMode
              src={src1}
              type={type1}
              title={title1}
              author={author1}
              initial={initial1}
              fullText={fullText1}
              oldPrice={oldPrice1}
              currentPrice={currentPrice1}
            />
          ) : (
            <ListMode
              src={src1}
              type={type1}
              title={title1}
              info={info1}
              author={author1}
              initial={initial1}
              fullText={fullText1}
              oldPrice={oldPrice1}
              currentPrice={currentPrice1}
            />
          )}
        </Publication>
        <Publication
          className={`${switchItems ? ' lg:border-b lg:border-secondary lg:pb-7 !flex-row' : ''}`}
        >
          {!switchItems ? (
            <ItemMode
              src={src3}
              type={type3}
              type2={type23}
              title={title3}
              author={author3}
              initial={initial3}
              fullText={fullText3}
              oldPrice={oldPrice3}
              currentPrice={currentPrice3}
            />
          ) : (
            <ListMode
              src={src3}
              type={type3}
              type2={type23}
              title={title3}
              info={info3}
              author={author3}
              initial={initial3}
              fullText={fullText3}
              oldPrice={oldPrice3}
              currentPrice={currentPrice3}
            />
          )}
        </Publication>
      </div>
    </Section>
  );
};

export default AuthorPublications;
