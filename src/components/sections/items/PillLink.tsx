import React from 'react';
import Mail from '../../icons/Mail';

const PillLink: React.FC = () => (
    <a
      href="#"
      className="hidden border-2 border-primary hover:bg-primary group rounded-full px-3 py-2 h-[55px] lg:flex w-[250px] justify-center"
    >
      <div className="mr-2 flex flex-col justify-center pr-2 border-r border-gray-300 group-hover:text-white text-primary">
        <p className="uppercase text-xs font-semibold text-right ">¿TIENES DUDAS?</p>
        <p className="uppercase text-2xs text-right">Solicita más información</p>
      </div>
      <Mail className="w-8 text-primary group-hover:text-white" />
    </a>
  );


export default PillLink;
