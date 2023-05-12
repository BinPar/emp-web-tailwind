import type { WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
import AdvantagesLi from './AdvantagesLi';

interface CourseAdvantagesProps {
  color: string;
  secondaryBg: string;
}
const CourseAdvantages: React.FC<CourseAdvantagesProps> = ({ color, secondaryBg }) => (
  <div className={`w-full lg:w-2/4 p-8 ${secondaryBg} text-[${color}]`}>
    <p className="text-2sm font-light brightness-75">Principales ventajas de este curso:</p>
    <ul className="mt-5">
      <AdvantagesLi color={color}>
        Está especialmente diseñado para que sea compatible con tus horarios de la facultad.
      </AdvantagesLi>
      <AdvantagesLi color={color}>
        Calendario adaptativo que te marcará unos objetivos diarios.
      </AdvantagesLi>
      <AdvantagesLi color={color}>
        Te ayudará a superar con éxito el último año de carrera.
      </AdvantagesLi>
      <AdvantagesLi color={color}>
        Gran número de videoclases integradas en el contenido.
      </AdvantagesLi>
      <AdvantagesLi color={color}>
        Posibilidad de personalizar los contenidos con marcadores y anotaciones.
      </AdvantagesLi>
      <AdvantagesLi color={color}>Podrás imprimir todo lo que necesites.</AdvantagesLi>
      <AdvantagesLi color={color}>
        Comunicación constante con el equipo docente de PROMIR durante todo el curso.
      </AdvantagesLi>
      <AdvantagesLi color={color} isNew>
        Asignación de un tutor personal al principio del curso con el que podrás tener tutorías
        personalizadas a través de videollamadas.
      </AdvantagesLi>
      <AdvantagesLi color={color}>
        Podrás resolver tus dudas con los coordinadores de asignatura, directamente, sin tener que
        salir del contenido que estás estudiando.
      </AdvantagesLi>
      <AdvantagesLi color={color}>
        La Inteligencia Artificial de la plataforma te ayudará a reforzar tus puntos débiles.
      </AdvantagesLi>
      <AdvantagesLi color={color}>Practica con entrenamientos y simulacros pautados.</AdvantagesLi>
      <AdvantagesLi color={color}>
        Conocerás en todo momento tu posición con respecto a otros alumnos de la plataforma que se
        vayan a presentar a tu misma convocatoria.
      </AdvantagesLi>
    </ul>
  </div>
);
export default CourseAdvantages;
