import { RealData, TempData } from './modelTemp';

export const srcHomeBooks = [
  '/img/book1.jpg',
  '/img/bookProx.jpg',
  '/img/bookProx.jpg',
  '/img/bookProx.jpg',
  '/img/book5.jpg',
  '/img/bookProx.jpg',
  '/img/book7.jpg',
  '/img/book8.jpg',
];

export const titleHomeBooks = [
  'Neurociencia Cognitiva. (2ª Edición)',
  'Instrumentación quirúrgica: Principios y práctica. (8ª Edición)',
  'Perfil del Desarrollo Motor del Bebé: Infant Motor Profile (IMP)',
  'Fundamentos de Psiquiatría: Bases científicas para el manejo clínico.. (2ª Edición)',
  'Manejo de la Vía Aérea y Ventilación Mecánica',
  'Drogodependencias. (4ª Edición)',
  'Tratado de Esterilidad e Infertilidad Humanas',
  'Guía de Actuación en Urgencias. (6ª Edición)',
];

export const authorHomeBooks = [
  'MDiego Redolar Ripoll',
  'Joanna Kotcher Fuller',
  'Mijna Hadders-Algra, Kirsten R. Heineman',
  'Gabriel Rubio Valladolid, Guillermo Lahera Forteza, Roberto Rodríguez Jiménez,',
  'Eugenio Daniel Martínez Hurtado, María Luisa Mariscal Flores, Antonio García Rueda',
  'María Isabel Colado Megía, Magí Farré Albaladejo',
  'Enrique Pérez de la Blanca Cobos, José Antonio Domínguez Arroyo, Luis Rodríguez-Tabernero Martí',
  'Manuel José Vázquez Lima, José Ramón Casal Codesido',
];

export const typeHomeBooks = [
  'digital',
  'digital',
  'digital',
  'digital',
  'digital',
  'digital',
  'digital',
  'digital',
];
export const type2HomeBooks = ['duo', 'duo', 'duo', 'duo', 'duo', 'duo', 'duo', 'duo'];
export const initialHomeBooks = ['NE', 'NE', 'N', 'NE', 'N', 'NE', 'N', 'NE'];
export const fullTextHomeBooks = [
  'Nueva edición',
  'Nueva edición',
  'novedad',
  'Nueva edición',
  'Nuevedad',
  'Nueva edición',
  'novedad',
  'Nueva edición',
];
export const oldPriceHomeBooks = ['92', '', '', '', '', '', '140', '60'];
export const currentPriceHomeBooks = ['880', 'prox', 'prox', 'prox', 'prox', 'prox', '590', '290'];

const data: RealData[] = [];
const tempData: TempData = {
  authorList: authorHomeBooks,
  currentPriceList: currentPriceHomeBooks,
  fullTextList: fullTextHomeBooks,
  initialList: initialHomeBooks,
  oldPriceList: oldPriceHomeBooks,
  srcList: srcHomeBooks,
  titleList: titleHomeBooks,
  typeList: typeHomeBooks,
  type2List: type2HomeBooks,
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
