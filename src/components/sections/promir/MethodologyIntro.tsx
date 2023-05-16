import SubHeader from '../items/SubHeader';
import PromirP from './PromirP';

const MethodologyIntro: React.FC = () => (
  <>
    <SubHeader>METODOLOGÍA</SubHeader>
    <PromirP>
      Tras años estudiando el examen MIR, hemos desarrollado un sistema propio a la vanguardia de la
      tecnología, aplicando los últimos avances en Inteligencia Artificial, para ajustar la
      plataforma a tus necesidades. La metodología se ha configurado según la sistemática del examen
      y los contenidos que hay que repasar, reforzando al máximo el proceso de estudio y aprendizaje
      basado en preguntas, imprescindible para integrar conceptos, resolver preguntas complejas y
      entrenar la técnica de examen.
      <br />
      <br /> La estructura de la metodología docente está basada en las siguientes premisas:
    </PromirP>
    <ul className="md:flex md:gap-6 my-5">
      <li className="before:content-['1.'] mb-5 md:mb-0 before:text-primary before:mr-4 flex md:w-1/3">
        <PromirP>
          Los contenidos se deben presentar con un orden y estructura concretos para facilitar el
          estudio, atendiendo a la importancia que tienen ciertas asignaturas para asimilar otras y
          a la cantidad de contenidos de cada una.
        </PromirP>
      </li>
      <li className="before:content-['2.'] mb-5 md:mb-0 before:text-primary before:mr-4 flex md:w-1/3">
        <PromirP>
          El repaso diario es la estrategia adecuada para asimilar la gran cantidad de materias,
          recordando con cierta periodicidad conceptos vistos previamente para reforzar la memoria a
          largo plazo.
        </PromirP>
      </li>
      <li className="before:content-['3.'] before:text-primary before:mr-4 flex md:w-1/3">
        <PromirP>
          El aprendizaje basado en preguntas es el mejor entrenamiento para enfrentarse al modelo de
          examen MIR.
        </PromirP>
      </li>
    </ul>
  </>
);
export default MethodologyIntro;
