import { useState, useEffect } from 'react';

interface FloatingItemProps {
  href: string;
  title: string;
}
const title = ['Ficha técnica', 'Descripción', 'Dirigido a', 'Obras Incluidas'];
const href = ['data', 'description', 'addressed', 'included'];

const ItemNumber = 4;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const CollectionFloatingItem: React.FC<FloatingItemProps> = ({ href, title }) => (
  <li className="mt-2">
    <a
      href={`#${href}`}
      className="block relative -left-24 xl3:-left-[140px] hover:border-secondary p-2 pr-4 border-r-4 border-gray-200 text-3.5xs font-bold text-gray-400 hover:text-gray-500 uppercase tracking-[1px]"
    >
      {title}
    </a>
  </li>
);

const CollectionFloatingMenu: React.FC = () => {
  const [collectionFloatingItems, setCollectionFloatingItems] = useState<React.ReactNode>();
  useEffect(() => {
    setCollectionFloatingItems(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <CollectionFloatingItem
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
      {collectionFloatingItems}
    </ul>
  );
};

export default CollectionFloatingMenu;
