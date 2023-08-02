import { useEffect, useState } from 'react';

interface NormalItemProps {
  title: string;
  info: string;
}

const title = ['ISBN', 'ENCUADERNACION', 'PAGINAS', 'MEDIDAS', 'AÑO'];
const info = ['9788491101000', 'Rustica', '350', '17 x 24cm', '© 2023'];
const ItemNumber = 6;

const Info: React.FC<NormalItemProps> = ({ title, info }) => (
  <li>
    <p className="text-2.5xs tracking-widest uppercase text-secondarygray font-light">
      {title}
      <span className="normal-case font-bold text-1xs ml-2">{info}</span>
    </p>
  </li>
);

const ProductSheet: React.FC = () => {
  const [fichaInfo, setFichaInfo] = useState<React.ReactNode>();

  useEffect(() => {
    setFichaInfo(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <Info
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            title={title[i]}
            info={info[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className="p-6 bg-[#f0f7fa] rounded-xl flex">
      <div className="w-full px-5 first-of-type:border-r-[2px] first-of-type:border-gray-200">
        <h4 className="text-primary font-bold tracking-[.5px] mb-1">DUO</h4>
        <p className="text-secondarygray font-medium text-1xs leading-4 mb-5">
          El formato DÚO incluye la obra en papel y en digital, versión que aporta contenidos
          enriquecidos para el lector.
        </p>
        <ul>{fichaInfo}</ul>
      </div>
      <div className="w-full px-5 first-of-type:border-r-[2px] first-of-type:border-gray-200">
        <h4 className="text-primary font-bold tracking-[.5px] mb-1">DIGITAL</h4>
        <p className="text-secondarygray font-medium text-1xs leading-4 mb-5">
          El formato digital de una publicación incluye contenidos interactivos y material
          multimedia para el enriqueci - miento de su lectura.
        </p>
        <ul>{fichaInfo}</ul>
      </div>
    </div>
  );
};
export default ProductSheet;
