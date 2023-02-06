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
const src = ['/img/promir.jpg', '/img/profisio.jpg', '/img/prodea.jpg', '/img/protel.jpg'];

const title = [
  'PROREMIR 2024',
  'PROFISIO - Máster de Formación Permanente en Actualización en Fisioterapia',
  'PRODEA - Curso de preparación para el Diploma Europeo de Anestesiología y Cuidados Intensivos. 1 año',
  'PROTEL - OPE Técnico Superior Especialista en Laboratorio de Diagnóstico Clínico. Suscripción anual'
];

const author = [
  'Miguel Castillo Orive, Jesús Corres González',
  'Jesús Seco Calvo, Vicente Rodríguez Pèrez, Rocío Martín Valero, Raúl Cobreros Mielgo',
  'AAEAR - Asociación Andaluza-Extremeña de Anestesiología, Reanimación y Terapéutica del Dolor,',
  'Francisco Javier Mérida de la Torre,'
];

const type = ['oposiciones', 'oposiciones','oposiciones', 'oposiciones'];

const initial = ['N', '', '', ''];

const fullText = ['NOVEDAD', '', '', ''];

const oldPrice = ['1.100', '', '', ''];

const currentPrice = ['880', '1.490', '590', '290'];


const ItemNumber = 4;
// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const NormalItem: React.FC<NormalItemProps> = ({src, title, author, type, initial, fullText, oldPrice, currentPrice,
}) => (
  <li className="flex items-start pb-5 flex-1 lg:flex-col lg:text-center md:min-w-[calc(50%_-_20px)]">
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

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <Section>
      <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] flex-col md:flex-row gap-8">
        <div className="w-full">
          <SubHeader>PREPARACIÓN DE EXÁMENES</SubHeader>
          <div className="flex lg:flex-row flex-col xl:h-[calc(100%_-_41px)] xl:max-h-[395px] justify-center">
            <ul className="flex flex-col md:flex-row xl:gap-16 gap-10 w-full md:flex-wrap lg:flex-nowrap gap">
              {itemsExpert}
            </ul>
          </div>
        </div>
      </DivWrapper>
    </Section>
  );
};

export default ItemNormal;
