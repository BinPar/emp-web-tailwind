import React from 'react';
import ArrowDown from '../../icons/ArrowDown';

const HeaderBottom: React.FC = () => (
  <div className="mt-1 border-b border-gray-200">
    <ul className="uppercase text-1xs text-gray-500 tracking-widest flex justify-center">
      <li className="hover:text-primary border-b-4 border-b-white hover:border-yellowmenu group transition-all duration-300 relative">
        <a
          href="https://www.medicapanamericana.com/es/general/libros"
          className="h-16 flex items-center"
        >
          libros
          <ArrowDown
            strokeWidth={4}
            className="ml-2 w-4 h-4 group-hover:rotate-180 transition-all"
          />
        </a>
        <ul className="group-hover:block hidden absolute bg-white border-t-4 border-t-yellowmenu w-44 top-16 -left-1/2 p-5 border border-gray-200 ">
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/papel">Papel</a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/digital">Digital</a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/duo">DÚO</a>
          </li>
        </ul>
      </li>
      <li className="ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu group transition-all duration-300 relative">
        <a
          href="https://www.medicapanamericana.com/es/general/formacion"
          className="h-16 flex items-center"
        >
          formación
          <ArrowDown
            strokeWidth={4}
            className="ml-2 w-4 h-4 group-hover:rotate-180 transition-all"
          />
        </a>
        <ul className="group-hover:block hidden absolute bg-white border-t-4 border-t-yellowmenu w-44 top-16 -left-1/2 p-5 border border-gray-200 ">
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/autoevaluacion">
              Autoevaluaciones
            </a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/libroacreditado">
              Evaluación Online
            </a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/cursosonline">Cursos Online</a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/expertos">Expertos</a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/diplomadeespecializacion">
              Diplomas de especialización
            </a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/masteres">Másteres</a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/general/programasdeformacion">
              Programas de formación
            </a>
          </li>
        </ul>
      </li>
      <li className="ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu group transition-all duration-300 relative">
        <a
          href="https://www.medicapanamericana.com/es/oposiciones"
          className="h-16 flex items-center"
        >
          oposiciones
          <ArrowDown
            strokeWidth={4}
            className="ml-2 w-4 h-4 group-hover:rotate-180 transition-all"
          />
        </a>
        <ul className="group-hover:block hidden absolute bg-white border-t-4 border-t-yellowmenu w-44 top-16 -left-1/2 p-5 border border-gray-200 ">
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/oposiciones/examen-mir">Examen MIR</a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/oposiciones/fisioterapia">
              Fisioterapia
            </a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/oposiciones/enfermeria">Enfermería</a>
          </li>
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="https://www.medicapanamericana.com/es/oposiciones/medicina">Medicina</a>
          </li>
        </ul>
      </li>
      <li className="ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu group transition-all duration-300">
        <a
          href="https://www.medicapanamericana.com/es/promir/inicio"
          className="h-16 flex items-center"
        >
          promir
        </a>
      </li>
      <li className="ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu group transition-all duration-300">
        <a href="https://www.medicapanamericana.com/es/eureka" className="h-16 flex items-center">
          eureka
        </a>
      </li>
    </ul>
  </div>
);

export default HeaderBottom;
