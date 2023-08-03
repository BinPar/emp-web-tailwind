import { useState, useEffect } from 'react';
import BaseText from './BaseText';
import NormalLink from './NormalLink';

interface AuthorProps {
  title: string;
}

const title = [
  'Íñigo Iriarte Posse,',
  'Ramon Balius Matas,',
  'Luis Cerezal Pesquera,',
  'Carles Pedret Carballido',
];

const ItemNumber = 4;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const Author: React.FC<AuthorProps> = ({ title }) => (
  <li className="inline ml-1 first:ml-0">
    <NormalLink href="#">
      <BaseText className="inline lg:text-1xs xl:text-2sm">{title}</BaseText>
    </NormalLink>
  </li>
);

const Ficha: React.FC = () => {
  const [author, setAuthor] = useState<React.ReactNode>();

  useEffect(() => {
    setAuthor(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <Author
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            title={title[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    <ul className="mb-2 lg2:mb-4 text-center lg2:text-left">{author}</ul>
  );
};

export default Ficha;
