import { useState, useEffect } from 'react';

interface NormalItemProps {
  title: string;
  info: string;
}

const title = ['DURACIÓN', 'ECTS', 'PERÍODO DE MATRÍCULA', 'INICIO', 'FIN', 'EAN'];

const info = [
  '6 meses',
  '25 créditos',
  'Hasta 16/2/2023',
  '16/2/2023',
  '18/8/2023',
  '9788491101000',
];

const ItemNumber = 6;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const Info: React.FC<NormalItemProps> = ({ title, info }) => (
  <li className="mb-3">
    <p className="text-xs tracking-widest uppercase text-[#7a94a4] font-light">
      {title}
      <span className="normal-case font-medium text-sm ml-2">{info}</span>
    </p>
  </li>
);

const Ficha: React.FC = () => {
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

      <ul className="p-6 bg-[#f0f7fa]">
        {fichaInfo}
        <li>
          <p className="text-xs tracking-widest uppercase text-[#7a94a4] font-light">
            Enlaces
            <a href="#" className="normal-case font-medium text-sm ml-2 text-primary">
              Descarga el dossier completo
            </a>
          </p>
        </li>
      </ul>

  );
};

export default Ficha;
