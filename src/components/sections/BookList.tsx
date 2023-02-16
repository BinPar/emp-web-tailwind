import { useState, useEffect } from 'react';

import ItemGeneric from './items/ItemGeneric';


interface NormalItemProps {
  src: string;
  title: string;
  author: string;
  type: string;
  type2?: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}
const src = ['/img/book1.jpg', '/img/bookProx.jpg', '/img/bookProx.jpg', '/img/bookProx.jpg', '/img/book5.jpg', '/img/bookProx.jpg', '/img/book7.jpg', '/img/book8.jpg'];

const title = [
  'Neurociencia Cognitiva. (2ª Edición)',
  'Instrumentación quirúrgica: Principios y práctica. (8ª Edición)',
  'Perfil del Desarrollo Motor del Bebé: Infant Motor Profile (IMP)',
  'Fundamentos de Psiquiatría: Bases científicas para el manejo clínico.. (2ª Edición)',
  'Manejo de la Vía Aérea y Ventilación Mecánica',
  'Drogodependencias. (4ª Edición)',
  'Tratado de Esterilidad e Infertilidad Humanas',
  'Guía de Actuación en Urgencias. (6ª Edición)'
];

const author = [
  'MDiego Redolar Ripoll',
  'Joanna Kotcher Fuller',
  'Mijna Hadders-Algra, Kirsten R. Heineman',
  'Gabriel Rubio Valladolid, Guillermo Lahera Forteza, Roberto Rodríguez Jiménez,',
  'Eugenio Daniel Martínez Hurtado, María Luisa Mariscal Flores, Antonio García Rueda',
  'María Isabel Colado Megía, Magí Farré Albaladejo',
  'Enrique Pérez de la Blanca Cobos, José Antonio Domínguez Arroyo, Luis Rodríguez-Tabernero Martí',
  'Manuel José Vázquez Lima, José Ramón Casal Codesido'
];

const type = ['digital', 'digital','digital', 'digital', 'digital', 'digital','digital', 'digital'];
const type2 = ['duo', 'duo','duo', 'duo', 'duo', 'duo','duo', 'duo'];
const initial = ['NE', 'NE', 'N', 'NE', 'N', 'NE', 'N', 'NE'];
const fullText = ['Nueva edición', 'Nueva edición', 'novedad', 'Nueva edición', 'Nuevedad', 'Nueva edición', 'novedad', 'Nueva edición'];
const oldPrice = ['92', '', '', '', '', '', '140', '60'];
const currentPrice = ['880', 'prox', 'prox', 'prox', 'prox', 'prox', '590', '290'];
const ItemNumber = 8;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const BookLi: React.FC<NormalItemProps> = ({src, title, author, type, type2, initial, fullText, oldPrice, currentPrice,
}) => (
  <ItemGeneric className='md:min-w-[calc(25%_-_20px)]' src={src} type={type} type2={type2} title={title} author={author} initial={initial} fullText={fullText} oldPrice={oldPrice} currentPrice={currentPrice}/>

);

const BookList: React.FC = () => {
  const [booksLi, setBooksLi] = useState<React.ReactNode>();
  useEffect(() => {
    setBooksLi(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <BookLi
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            src={src[i]}
            title={title[i]}
            author={author[i]}
            type={type[i]}
            type2={type2[i]}
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

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-col md:flex-row xl:gap-16 gap-10 w-full md:flex-wrap gap">
              {booksLi}
            </ul>
        
  );
};

export default BookList
;
