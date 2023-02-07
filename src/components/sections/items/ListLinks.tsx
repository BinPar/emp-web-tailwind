import { useState, useEffect } from 'react';

interface FooterLinkProps {
  link: string;
  title: string;
}
const title = [
  'Protección de Datos',
  'Condiciones de la Licencia de Acceso',
  'Cookies',
  'Aviso Legal y términos de uso',
  'Preguntas frecuentes',
  'Visor Panamericana',
  'Librerías y Distribuidores',
  'Desistimiento',
];
const link = ['#', '#', '#', '#', '#', '#', '#', '#'];
const ItemNumber = 8;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const ItemLink: React.FC<FooterLinkProps> = ({ link, title }) => (
  <li className="my-1 md:text-xs text-2xs font-light hover:opacity-80 tracking-[1.2px]">
    <a href={link}>{title}</a>
  </li>
);

const FooterLinkList: React.FC = () => {
  const [footerLink, setFooterLink] = useState<React.ReactNode>();

  useEffect(() => {
    setFooterLink(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <ItemLink
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            title={title[i]}
            link={link[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <ul className="grid grid-cols-1 xs:grid-cols-2 gap-x-5 md:mt-8 lg:mt-0 text-center lg:text-left">
      {footerLink}
    </ul>
  );
};

export default FooterLinkList;
