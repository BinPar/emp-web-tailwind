/* eslint-disable @typescript-eslint/no-shadow */
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import DivWrapper from './DivWrapper';
import ImageGroup from './ImageGroup';
import InfoGroup from './InfoGroup';
import SubHeader from './SubHeader';

const src1 = '/img/promir.jpg';
const title1 = 'PROREMIR 2024';
const author1 = 'Miguel Castillo Orive, Jesús Corres González';
const type1 = 'oposiciones';
const initial1 = 'N';
const fullText1 = 'NOVEDAD';
const oldPrice1 = '1.100';
const currentPrice1 = '880';

const src2 = '/img/book1.jpg';
const title2 = 'Neurociencia Cognitiva. (2ª Edición)';
const author2 = 'MDiego Redolar Ripoll';
const type2 = 'digital';
const type22 = 'Duo';
const initial2 = 'NE';
const fullText2 = 'Nueva edición';
const oldPrice2 = '92';
const currentPrice2 = '880';

const src3 = '/img/prodea.jpg';
const title3 =
  'PRODEA - Curso de preparación para el Diploma Europeo de Anestesiología y Cuidados Intensivos. 1 año';
const author3 =
  'AAEAR - Asociación Andaluza-Extremeña de Anestesiología, Reanimación y Terapéutica del Dolor,';
const type3 = 'oposiciones';
const initial3 = '';
const fullText3 = '';
const oldPrice3 = '';
const currentPrice3 = '590';

const src4 = '/img/expert1.jpg';
const title4 = 'Experto en Ecografía Musculoesquelética';
const author4 = 'Íñigo Iriarte Posse, Ramon Balius Matas';
const type4 = 'expertos';
const initial4 = '';
const fullText4 = '';
const oldPrice4 = '1.690';
const currentPrice4 = '1.436,50';

const src5 = '/img/profisio.jpg';
const title5 = 'PROFISIO - Máster de Formación Permanente en Actualización en Fisioterapia';
const author5 =
  'Jesús Seco Calvo, Vicente Rodríguez Pèrez, Rocío Martín Valero, Raúl Cobreros Mielgo';
const type5 = 'oposiciones';
const initial5 = '';
const fullText5 = '';
const oldPrice5 = '';
const currentPrice5 = '1.490';

const SectionCarousel: React.FC = () => (
  <section className="py-10 bg-lightgray flex md:gap-10 flex-col md:flex-row gap-8">
    <DivWrapper>
    <div className="w-full">
      <SubHeader>TUS CONSULTAS RECIENTES</SubHeader>
      <Carousel>
        <CarouselItem>
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
        </CarouselItem>
        <CarouselItem>
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
        </CarouselItem>
        <CarouselItem>
          <ImageGroup src={src3} type={type3} />
          <InfoGroup
            className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
            title={title3}
            author={author3}
            type={type3}
            initial={initial3}
            fullText={fullText3}
            oldPrice={oldPrice3}
            currentPrice={currentPrice3}
          />
        </CarouselItem>
        <CarouselItem>
          <ImageGroup src={src4} type={type4} />
          <InfoGroup
            className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
            title={title4}
            author={author4}
            type={type4}
            initial={initial4}
            fullText={fullText4}
            oldPrice={oldPrice4}
            currentPrice={currentPrice4}
          />
        </CarouselItem>
        <CarouselItem>
          <ImageGroup src={src5} type={type5} />
          <InfoGroup
            className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
            title={title5}
            author={author5}
            type={type5}
            initial={initial5}
            fullText={fullText5}
            oldPrice={oldPrice5}
            currentPrice={currentPrice5}
          />
        </CarouselItem>
      </Carousel>
    </div>
    </DivWrapper>
  </section>
);

export default SectionCarousel;
