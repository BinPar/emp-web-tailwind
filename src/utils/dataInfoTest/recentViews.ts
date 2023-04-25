import { RealData, TempData } from './modelTemp';

export const srcRecent = [
  '/img/promir.jpg',
  '/img/book1.jpg',
  '/img/prodea.jpg',
  '/img/expert1.jpg',
  '/img/profisio.jpg',
];

export const titleRecent = [
  'PROREMIR 2024',
  'Neurociencia Cognitiva. (2ª Edición)',
  'PRODEA - Curso de preparación para el Diploma Europeo de Anestesiología y Cuidados Intensivos. 1 año',
  'Experto en Ecografía Musculoesquelética',
  'PROFISIO - Máster de Formación Permanente en Actualización en Fisioterapia',
];

export const authorRecent = [
  'Miguel Castillo Orive, Jesús Corres González',
  'MDiego Redolar Ripoll',
  'AAEAR - Asociación Andaluza-Extremeña de Anestesiología, Reanimación y Terapéutica del Dolor,',
  'Íñigo Iriarte Posse, Ramon Balius Matas',
  'Jesús Seco Calvo, Vicente Rodríguez Pèrez, Rocío Martín Valero, Raúl Cobreros Mielgo',
];
export const typeRecent = [
  'oposiciones',
  'digital',
  'oposiciones',
  'expertos',
  'oposiciones',
];
export const type2Recent = [
  '',
  'duo',
  '',
  '',
  '',
  
];
export const initialRecent = [
  'N',
  'NE',
  '',
  '',
  '',
];
export const fullTextRecent = [
  'NOVEDAD',
  'Nueva edición',
  '',
  '',
  '',
];
export const oldPriceRecent = [
  '1.100',
  '92',
  '',
  '1.690',
  '',
];
export const currentPriceRecent = [
  '880',
  '88',
  '590',
  '1.436,50',
  '1.490',
];

const data: RealData[] = [];
const tempData: TempData = {
  authorList: authorRecent,
  currentPriceList: currentPriceRecent,
  fullTextList: fullTextRecent,
  initialList: initialRecent,
  oldPriceList: oldPriceRecent,
  srcList: srcRecent,
  titleList: titleRecent,
  typeList: typeRecent,
  type2List: type2Recent,
};
Object.keys(tempData).forEach((k) => {
  const array = tempData[k as keyof typeof tempData];
  if (array) {
    array.forEach((str, i) => {
      if (!data[i]) {
        data[i] = {
          author: '',
          currentPrice: '',
          fullText: '',
          initial: '',
          oldPrice: '',
          src: '',
          title: '',
          type: '',
          type2: '',
        };
      }
      data[i][k.replace('List', '') as keyof RealData] = str;
    });
  }
});

export default data;
