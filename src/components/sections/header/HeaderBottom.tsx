import React from 'react';
import ArrowDown from '../../icons/ArrowDown';
import ItemMainNav from '../items/ItemMainNav';
import MainNavLink from '../items/MainNavLink';
import classNames from 'classnames';
interface HeaderBottomProps {
  isShrunk: boolean;
}
const HeaderBottom: React.FC<HeaderBottomProps> = ({ isShrunk }) => (
  <div className={classNames('mt-1 transition-all duration-300 delay-150 overflow-hidden h-[68px]', { '!h-0': isShrunk })}>
    <ul className="uppercase text-1xs text-gray-500 tracking-widest flex justify-center">
      <ItemMainNav className="relative">
        <MainNavLink href="#">
          libros
          <ArrowDown
            strokeWidth={4}
            className="ml-2 w-4 h-4 group-hover:rotate-180 transition-all"
          />
        </MainNavLink>

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
          <li className="capitalize text-gray-500 hover:text-primary mb-4 last:mb-0">
            <a href="/collections">Colecciones</a>
          </li>
        </ul>
      </ItemMainNav>
      <ItemMainNav className="relative ml-14">
        <MainNavLink href="#">
          formación
          <ArrowDown
            strokeWidth={4}
            className="ml-2 w-4 h-4 group-hover:rotate-180 transition-all"
          />
        </MainNavLink>
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
      </ItemMainNav>
      <ItemMainNav className="relative ml-14">
        <MainNavLink href="#">
          oposiciones
          <ArrowDown
            strokeWidth={4}
            className="ml-2 w-4 h-4 group-hover:rotate-180 transition-all"
          />
        </MainNavLink>
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
      </ItemMainNav>
      <ItemMainNav className="ml-14">
        <MainNavLink href="#">promir</MainNavLink>
      </ItemMainNav>
      <ItemMainNav className="ml-14">
        <MainNavLink href="#">eureka</MainNavLink>
      </ItemMainNav>
    </ul>
  </div>
);

export default HeaderBottom;
