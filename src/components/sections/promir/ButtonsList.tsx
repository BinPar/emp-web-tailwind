import { Dispatch, SetStateAction } from 'react';
import ButtonProduct from './ButtonProduct';

interface ButtonListProps {
  selected: Dispatch<SetStateAction<string>>;
  value: string;
}

const ButtonsList: React.FC<ButtonListProps> = ({ selected, value }) => (
  <ul className="flex items-center justify-center min-h-[84px] gap-3 mb-7">
    <ButtonProduct
      selected={selected}
      value={value}
      title="estudiante"
      bg="bg-[#b0dbea]"
      color="text-[#0089a9]"
      src="isotipo-promir.svg"
    />
    <ButtonProduct
      selected={selected}
      value={value}
      title="sexto"
      bg="bg-[#f1f6e9]"
      color="text-[#a1c25e]"
      src="isotipo-sexto.svg"
    />
    <ButtonProduct
      selected={selected}
      value={value}
      title="promir internacional"
      bg="bg-[#dbedff]"
      color="text-[#004c98]"
      src="isotipo-internacional.svg"
    />
    <ButtonProduct
      selected={selected}
      value={value}
      title="proremir"
      bg="bg-[#edf5f3]"
      color="text-[#6eb5b2]"
      src="isotipo-proremir.svg"
    />
    <ButtonProduct
      selected={selected}
      value={value}
      title="segunda especialidad"
      bg="bg-[#e8f3fd]"
      color="text-[#5b8ac8]"
      src="isotipo-specialty.svg"
    />
    <ButtonProduct
      selected={selected}
      value={value}
      title="intensivo"
      bg="bg-[#f0e9f4]"
      color="text-[#947db5]"
      src="isotipo-intensivo.svg"
    />
    <ButtonProduct
      selected={selected}
      value={value}
      title="entrenamir"
      bg="bg-[#fcf4e0]"
      color="text-[#dd9346]"
      src="isotipo-entrenamir.svg"
    />
    <ButtonProduct
      selected={selected}
      value={value}
      title="residente"
      bg="bg-[#99d0dd4d]"
      color="text-[#0089a9]"
      src="isotipo-residente.svg"
    />
  </ul>
);
export default ButtonsList;
