import { RealData, TempData } from './modelTemp';

export const srcPublication = ['/img/bookAuthor1.jpg', '/img/expert1.jpg', '/img/bookAuthor2.jpg'];
export const titlePublication = [
    'Ecografía Musculoesquelética: Atlas Ilustrado',
    'Experto en Ecografía Musculoesquelética',
    'Ecografía Musculoesquelética: Exploración anatómica y Patología'
  ];
export const authorPublication = [
'SEMES - Sociedad Española de Medicina de Urgencias y Emergencias,',
'Íñigo Iriarte Posse, Ramon Balius Matas',
'Íñigo Iriarte Posse, Carles Pedret Carballido, Ramon Balius Matas, Luis Cerezal Pesquera',
];
export const infoPublication = ['Los ecógrafos han sufrido una evolución vertiginosa en los últimos 10 años. Las mejoras técnicas, el creciente interés en la ecografía musculoesquelética y la introducción de las técnicas intervencionistas guiadas por ecografía, han supuesto un amplio desarrollo del diagnóstico y el tratamiento de las patologías del sistema musculoesquelético.','Los ecógrafos han mejorado mucho en calidad y resolución y la técnica se ha expandido hacia otras especialidades. Es por esto que la ecografía musculoesquelética se ha desarrollado tremendamente en los últimos 7-8 años.','Se trata de una ambiciosa obra que incluye todo lo necesario para adquirir un alto nivel en conocimientos anatómicos y diagnósticos de la mayoría de las patologías musculoesqueléticas.']
export const typePublication = ['digital', 'expertos', 'digital'];
export const type2Publication = ['duo', '', 'duo'];
export const initialPublication = ['', '', ''];
export const fullTextPublication = ['', '', ''];
export const oldPricePublication = ['49', '1.690', '137'];
export const currentPricePublication = ['46,55', '1.436,50', '130,15'];


const data: RealData[] = [];
const tempData: TempData = {
  authorList: authorPublication,
  currentPriceList: currentPricePublication,
  fullTextList: fullTextPublication,
  initialList: initialPublication,
  oldPriceList: oldPricePublication,
  srcList: srcPublication,
  titleList: titlePublication,
  typeList: typePublication,
  type2List: type2Publication,
  infoList: infoPublication,
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
          info: '',
        };
      }
      data[i][k.replace('List', '') as keyof RealData] = str;
    });
  }
});

export default data;