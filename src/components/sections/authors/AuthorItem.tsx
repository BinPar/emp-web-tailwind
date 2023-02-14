import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AuthorItemProps {
  src: string;
  name: string;
  link: string;
}
const src = ['/img/autor1.jpeg', '/img/autor2.jpeg', '/img/autor3.jpeg', '/img/autor4.jpeg'];

const name = [
  'ÍÑIGO IRIARTE POSSE',
  'RAMON BALIUS MATAS',
  'LUIS CEREZAL PESQUERA',
  'CARLES PEDRET CARBALLIDO',
];

const link = ['/authorPage', '/authorPage', '/authorPage', '/authorPage'];

const ItemNumber = 4;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const AuthorItem: React.FC<AuthorItemProps> = ({ src, name, link }) => (
  <li className="flex items-start pb-5 flex-1 lg:flex-col lg:text-center min-w-full sm:min-w-[calc(50%_-_20px)] md:min-w-[calc(33%_-_20px)] lg:min-w-[calc(50%_-_20px)] xl2:min-w-[calc(33%_-_20px)] xl4:min-w-[calc(25%_-_20px)] mr-5  sm:border-r-2 border-gray-300 last:border-r-0">
    <a href={link} className="w-full flex items-center outline-2 outline-primary">
      <div className="min-w-[100px] max-w-[100px] min-h-[100px] border-2 rounded-full border-primary">
        <div className="w-full border-[6px] border-white rounded-full overflow-hidden">
          <Image src={src} alt={name} width={280} height={280} />
        </div>
      </div>
      <h3 className="text-primary uppercase text-left ml-8 font-medium">{name}</h3>
    </a>
  </li>
);

const AuthorList: React.FC = () => {
  const [itemsAuthor, setItemsAuthor] = useState<React.ReactNode>();
  useEffect(() => {
    setItemsAuthor(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <AuthorItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            src={src[i]}
            name={name[i]}
            link={link[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <ul className="flex flex-wrap">
      {itemsAuthor}
    </ul>
  );
};

export default AuthorList;
