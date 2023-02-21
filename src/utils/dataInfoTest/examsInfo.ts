import { RealData, TempData } from './modelTemp';

export const srcExams = [
  '/img/promir.jpg',
  '/img/profisio.jpg',
  '/img/prodea.jpg',
  '/img/protel.jpg',
];

export const titleExams = [
  'PROREMIR 2024',
  'PROFISIO - Máster de Formación Permanente en Actualización en Fisioterapia',
  'PRODEA - Curso de preparación para el Diploma Europeo de Anestesiología y Cuidados Intensivos. 1 año',
  'PROTEL - OPE Técnico Superior Especialista en Laboratorio de Diagnóstico Clínico. Suscripción anual',
];

export const authorExams = [
  'Miguel Castillo Orive, Jesús Corres González',
  'Jesús Seco Calvo, Vicente Rodríguez Pèrez, Rocío Martín Valero, Raúl Cobreros Mielgo',
  'AAEAR - Asociación Andaluza-Extremeña de Anestesiología, Reanimación y Terapéutica del Dolor,',
  'Francisco Javier Mérida de la Torre,',
];

export const typeExams = ['oposiciones', 'oposiciones', 'oposiciones', 'oposiciones'];

export const initialExams = ['N', '', '', ''];

export const fullTextExams = ['NOVEDAD', '', '', ''];

export const oldPriceExams = ['1.100', '', '', ''];

export const currentPriceExams = ['880', '1.490', '590', '290'];

const data: RealData[] = [];
const tempData: TempData = {
    authorList: authorExams,
    currentPriceList: currentPriceExams,
    fullTextList: fullTextExams,
    initialList: initialExams,
    oldPriceList: oldPriceExams,
    srcList: srcExams,
    titleList: titleExams,
    typeList: typeExams
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
        };
      }
      data[i][k.replace('List', '') as keyof RealData] = str;
    });
  }
});

export default data;
