import { RealData, TempData } from './modelTemp';

export const srcExpert = ['/img/expert1.jpg', '/img/expert2.jpg'];
export const titleExpert = [
    'Experto en Ecografía Musculoesquelética',
    'Experto en Diagnóstico Diferencial de los Tumores de Ovario mediante Ultrasonidos',
  ];
export const authorExpert = ['Íñigo Iriarte Posse, Ramon Balius Matas', 'Juan Luis Alcázar Zambrano'];
export const typeExpert = ['expertos', 'expertos'];
export const initialExpert = ['', ''];
export const fullTextExpert = ['', ''];
export const oldPriceExpert = ['1.690', '1.690'];
export const currentPriceExpert = ['1.436,50', '1.436,50'];

const expertsData: RealData[] = [];
const tempData: TempData = {
    authorList: authorExpert,
    currentPriceList: currentPriceExpert,
    fullTextList: fullTextExpert,
    initialList: initialExpert,
    oldPriceList: oldPriceExpert,
    srcList: srcExpert,
    titleList: titleExpert,
    typeList: typeExpert,
};
Object.keys(tempData).forEach((k) => {
  const array = tempData[k as keyof typeof tempData];
  if (array) {
    array.forEach((str, i) => {
      if (!expertsData[i]) {
        expertsData[i] = {
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
      expertsData[i][k.replace('List', '') as keyof RealData] = str;
    });
  }
});

export default expertsData;