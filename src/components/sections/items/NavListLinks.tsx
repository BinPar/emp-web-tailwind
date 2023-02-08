import React, { useState } from 'react';
import ArrowDown from '../../icons/ArrowDown';
import MvNavLi from './MvNavLi';
import MvNavLink from './MvNavLink';

const NavListLinks: React.FC = () => {
  const [openBook, setOpenBook] = useState<boolean>(false);
  const [openOposition, setOpenOposition] = useState<boolean>(false);
  const [openForms, setOpenForms] = useState<boolean>(false);
  return (
    <>
      <MvNavLink>
        <button className="text-1xs text-primary font-semibold uppercase" type="button">
          Iniciar sesión
        </button>
      </MvNavLink>
      <MvNavLink className="pr-6 flex-wrap h-auto">
        <button
          className="text-1xs text-primary font-semibold uppercase w-full flex justify-between h-16 items-center"
          type="button"
          onClick={(): void => setOpenBook(!openBook)}
        >
          Libros
          <ArrowDown
            className={`transition-all duration-200 w-4 h-4${openBook ? ' rotate-180' : ''}`}
          />
        </button>
        <ul className={`w-full${openBook ? ' block' : ' hidden'}`}>
          <MvNavLi className="border-b border-gray-200">ver todo</MvNavLi>
          <MvNavLi className="border-b border-gray-200">papel</MvNavLi>
          <MvNavLi className="border-b border-gray-200">fisioterapia</MvNavLi>
          <MvNavLi className="border-b border-gray-200">digital</MvNavLi>
          <MvNavLi className="border-b border-gray-200">duo</MvNavLi>
          <MvNavLi>colecciones</MvNavLi>
        </ul>
      </MvNavLink>
      <MvNavLink className="pr-6 flex-wrap h-auto">
        <button
          className="text-1xs text-primary font-semibold uppercase w-full flex justify-between h-16 items-center"
          type="button"
          onClick={(): void => setOpenForms(!openForms)}
        >
          Formación
          <ArrowDown
            className={`transition-all duration-200 w-4 h-4${openForms ? ' rotate-180' : ''}`}
          />
        </button>
        <ul className={`w-full${openForms ? ' block' : ' hidden'}`}>
          <MvNavLi className="border-b border-gray-200">ver todo</MvNavLi>
          <MvNavLi className="border-b border-gray-200">autoevaluaciones</MvNavLi>
          <MvNavLi className="border-b border-gray-200">evaluación online</MvNavLi>
          <MvNavLi className="border-b border-gray-200">cursos online</MvNavLi>
          <MvNavLi className="border-b border-gray-200">expertos</MvNavLi>
          <MvNavLi className="border-b border-gray-200"> diplomas de epecializacion</MvNavLi>
          <MvNavLi className="border-b border-gray-200">másteres</MvNavLi>
          <MvNavLi>programas de formación</MvNavLi>
        </ul>
      </MvNavLink>
      <MvNavLink className="pr-6 flex-wrap h-auto">
        <button
          className="text-1xs text-primary font-semibold uppercase w-full flex justify-between h-16 items-center"
          type="button"
          onClick={(): void => setOpenOposition(!openOposition)}
        >
          Oposiciones
          <ArrowDown
            className={`transition-all duration-200 w-4 h-4${openOposition ? ' rotate-180' : ''}`}
          />
        </button>
        <ul className={`w-full${openOposition ? ' block' : ' hidden'}`}>
          <MvNavLi className="border-b border-gray-200">ver todo</MvNavLi>
          <MvNavLi className="border-b border-gray-200">examen mir</MvNavLi>
          <MvNavLi className="border-b border-gray-200">fisioterapia</MvNavLi>
          <MvNavLi className="border-b border-gray-200">expertos</MvNavLi>
          <MvNavLi className="border-b border-gray-200">enfermería</MvNavLi>
          <MvNavLi className="border-b border-gray-200">medicina</MvNavLi>
          <MvNavLi>técnico sanitario</MvNavLi>
        </ul>
      </MvNavLink>
      <MvNavLink>
        <a href="#" className="text-1xs text-primary font-semibold uppercase" type="button">
          promir
        </a>
      </MvNavLink>
      <MvNavLink>
        <a href="#" className="text-1xs text-primary font-semibold uppercase" type="button">
          eureka
        </a>
      </MvNavLink>
      <MvNavLink>
        <a href="#" className="text-1xs text-primary font-semibold uppercase" type="button">
          mi eureka
        </a>
      </MvNavLink>
    </>
  );
};

export default NavListLinks;
