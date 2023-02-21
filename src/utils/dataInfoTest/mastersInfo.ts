import { RealData, TempData } from './modelTemp';

export const srcMasters = ['/img/master1.jpg', '/img/master2.jpg'];
export const titleMasters = [
    'Máster en Histeroscopia y Cirugía Intrauterina',
    'Máster en Enfermería de Urgencias y Emergencias de la SEMES',
  ];
export const authorMasters = [
'Luis Alonso Pacheco, Jose Carugno, Sergio Haimovich,',
'SEMES - Sociedad Española de Medicina de Urgencias y Emergencias,',
];
export const typeMasters = ['Máster de Formación Permanente', 'Máster de Formación Permanente'];
export const initialMasters = ['N', 'NE'];
export const fullTextMasters = ['novedad', 'Nueva Edición'];
export const oldPriceMasters = ['1.690', '1.690'];
export const currentPriceMasters = ['1.436,50', '1.436,50'];


const mastersData: RealData[] = [];
const tempData: TempData = {
  authorList: authorMasters,
  currentPriceList: currentPriceMasters,
  fullTextList: fullTextMasters,
  initialList: initialMasters,
  oldPriceList: oldPriceMasters,
  srcList: srcMasters,
  titleList: titleMasters,
  typeList: typeMasters,
};
Object.keys(tempData).forEach((k) => {
  const array = tempData[k as keyof typeof tempData];
  if (array) {
    array.forEach((str, i) => {
      if (!mastersData[i]) {
        mastersData[i] = {
          author: '',
          currentPrice: '',
          fullText: '',
          initial: '',
          oldPrice: '',
          src: '',
          title: '',
          type: '',
        };
      }
      mastersData[i][k.replace('List', '') as keyof RealData] = str;
    });
  }
});

export default mastersData;