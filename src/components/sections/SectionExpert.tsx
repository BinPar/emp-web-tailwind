import { useState, useEffect } from 'react';
import DivWrapper from './items/DivWrapper';
import ImageGroup from './items/ImageGroup';
import InfoGroup from './items/InfoGroup';
import Section from './items/Section';
import SubHeader from './items/SubHeader';

interface NormalItemProps {
  src: string;
  title: string;
  author: string;
  type: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}
const src = ['/img/expert1.jpg', '/img/expert2.jpg'];
const src2 = ['/img/master1.jpg', '/img/master2.jpg'];
const title = [
  'Experto en Ecografía Musculoesquelética',
  'Experto en Diagnóstico Diferencial de los Tumores de Ovario mediante Ultrasonidos',
];
const title2 = [
  'Máster en Histeroscopia y Cirugía Intrauterina',
  'Máster en Enfermería de Urgencias y Emergencias de la SEMES',
];
const author = ['Íñigo Iriarte Posse, Ramon Balius Matas', 'Juan Luis Alcázar Zambrano'];
const author2 = [
  'Luis Alonso Pacheco, Jose Carugno, Sergio Haimovich,',
  'SEMES - Sociedad Española de Medicina de Urgencias y Emergencias,',
];
const type = ['expertos', 'expertos'];
const type2 = ['Máster de Formación Permanente', 'Máster de Formación Permanente'];
const initial = ['', ''];
const initial2 = ['N', 'NE'];
const fullText = ['', ''];
const fullText2 = ['novedad', 'Nueva Edición'];
const oldPrice = ['1.690', '1.690'];
const oldPrice2 = ['1.690', '1.690'];
const currentPrice = ['1.436,50', '1.436,50'];
const currentPrice2 = ['1.436,50', '1.436,50'];

const ItemNumber = 2;
// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const NormalItem: React.FC<NormalItemProps> = ({ src, title, author, type, initial, fullText, oldPrice, currentPrice,
}) => (
  <li className="flex items-start pb-5 flex-1 lg:flex-col lg:text-center">
    <ImageGroup src={src} type={type} />
    <InfoGroup
      title={title}
      author={author}
      type={type}
      initial={initial}
      fullText={fullText}
      oldPrice={oldPrice}
      currentPrice={currentPrice}
    />
  </li>
);

const ItemNormal: React.FC = () => {
  const [itemsExpert, setItemsExpert] = useState<React.ReactNode>();
  const [itemsMaster, setItemsMasters] = useState<React.ReactNode>();

  useEffect(() => {
    setItemsExpert(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <NormalItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            src={src[i]}
            title={title[i]}
            author={author[i]}
            type={type[i]}
            initial={initial[i]}
            fullText={fullText[i]}
            oldPrice={oldPrice[i]}
            currentPrice={currentPrice[i]}
          />
        )),
    );
  }, []);

  useEffect(() => {
    setItemsMasters(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <NormalItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            src={src2[i]}
            title={title2[i]}
            author={author2[i]}
            type={type2[i]}
            initial={initial2[i]}
            fullText={fullText2[i]}
            oldPrice={oldPrice2[i]}
            currentPrice={currentPrice2[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <Section>
      <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] flex-col md:flex-row gap-8">
        <div className="md:w-1/2 w-full">
          <SubHeader>EXPERTOS</SubHeader>
          <div className="flex lg:flex-row flex-col xl:h-[calc(100%_-_41px)] xl:max-h-[395px] justify-center">
            <ul className="flex flex-col xl:flex-row xl:gap-16 gap-10 w-full lg:max-w-[450px] xl:max-w-[100%]">
              {itemsExpert}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <SubHeader>MÁSTERES</SubHeader>
          <div className="flex lg:flex-row flex-col xl:h-[calc(100%_-_41px)] xl:max-h-[395px] justify-center">
            <ul className="flex flex-col xl:flex-row xl:gap-16 gap-10 lg:max-w-[450px] xl:max-w-[100%]">
              {itemsMaster}
            </ul>
          </div>
        </div>
      </DivWrapper>
    </Section>
  );
};

export default ItemNormal;
