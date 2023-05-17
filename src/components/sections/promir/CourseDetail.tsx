import type { WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
import ButtonPromir from './ButtonPromir';
import PromirP from './PromirP';

const CourseDetail: React.FC<WithClassName> = ({ className }) => (
  <div className={twMerge('text-white pt-5 mt-5', className)}>
    <PromirP className="mb-3 text-white font-semibold">CURSO DE SEXTO 2025</PromirP>
    <PromirP className="mb-3 text-white font-semibold">
      EN ESTE CURSO HAY DOS OPCIONES DE MATRICULACIÓN:
    </PromirP>
    <ul className="pl-5 mb-5">
      <li className="font-semibold list-disc list-inside text-sm tracking-[1px]">
        Del 1 de septiembre al 30 de noviembre de 2023.
      </li>
      <li className="font-semibold list-disc list-inside text-sm tracking-[1px]">
        Del 1 de diciembre de 2023 al 28 de febrero del 2024{' '}
        <span className="font-light">
          (donde el calendario será más ajustado y el nivel de exigencia de estudio diario más
          elevado).
        </span>
      </li>
    </ul>
    <PromirP className="mb-4 text-white font-semibold uppercase">últimas plazas</PromirP>
    <ButtonPromir className="border-transparent bg-white">matricúlate</ButtonPromir>
  </div>
);
export default CourseDetail;
