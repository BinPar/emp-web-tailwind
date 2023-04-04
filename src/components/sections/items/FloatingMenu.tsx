import { useState, useEffect } from 'react';

interface FloatingItemProps {
  href: string;
  title: string;
}
const href = ['data', 'introduction', 'university', 'description', 'addressed', 'objectives', 'contents', 'sample', 'title', 'method', 'payment', 'author', 'tags' ];

const title = [
  'Ficha técnica',
  'Introducción',
  'Universidad',
  'Descripción',
  'Dirigido a',
  'Objetivos',
  'Contenidos',
  'Tema de muestra',
  'Titulación',
  'Método',
  'Métodos de pago',
  'Autores',
  'Etiquetas',
];

const ItemNumber = 13;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const FloatingItem: React.FC<FloatingItemProps> = ({ href, title }) => (
  <li className="mt-2">
    <a
      href={`#${href}`}
      className="block relative -left-24 xl3:-left-[140px] hover:border-secondary p-2 pr-4 border-r-4 border-gray-200 text-3.5xs font-bold text-gray-400 hover:text-gray-500 uppercase tracking-[1px]"
    >
      {title}
    </a>
  </li>
);

const FloatingMenu: React.FC = () => {
  const [floatingItems, setFloatingItems] = useState<React.ReactNode>();
  useEffect(() => {
    setFloatingItems(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <FloatingItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            href={href[i]}
            title={title[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    <ul className="max-w-[130px] text-right fixed hidden xl2:block">
      {floatingItems}
    </ul>
  );
};

export default FloatingMenu;
