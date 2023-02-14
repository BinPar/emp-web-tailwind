import { useState, useEffect } from 'react';

interface AuthorInfoProps {
  info: string;
}

const info = [
  'Médico especialista en Rehabilitación y Medicina Física.',
  'Director del Centro de Rehabilitación ARS Médica, Bilbao.',
  'Profesor de Ecografía de la Sociedad Española de Rehabilitación y Medicina Física.',
  'Coordinador del Atlas Ilustrado de Ecografía Musculoesquelética y de Ecografía Musculoesquelética.',
  'Director del Curso online de Experto de Ecografía Musculoesquelética de Editorial Médica Panamericana.',
  'Director de los cursos de Ecografía Ars.',
];

const ItemNumber = 6;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const AuthorInfo: React.FC<AuthorInfoProps> = ({ info }) => (
  <li className='mb-4'>
    <p className="text-base text-gray-400 tracking-[1px] font-light">{info}</p>
  </li>
);

const AuthorInfoList: React.FC = () => {
  const [infoAuthor, setInfoAuthor] = useState<React.ReactNode>();
  useEffect(() => {
    setInfoAuthor(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <AuthorInfo
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            info={info[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <ul>{infoAuthor}</ul>
  );
};

export default AuthorInfoList;
