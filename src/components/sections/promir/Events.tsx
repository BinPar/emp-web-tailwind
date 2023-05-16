import SubHeader from '../items/SubHeader';
import PromirP from './PromirP';

const Events: React.FC = () => (
  <div>
    <SubHeader>EVENTOS</SubHeader>
    <PromirP>
      Dentro de cada fase se desarrollarán una serie de eventos, que estarán claramente definidos en
      tu calendario. Teniendo en cuenta la metodología de PROMIR y el curso en el que te hayas
      matriculado, estos eventos tendrán frecuencia y duración variable.
    </PromirP>
    <ul className="lg:flex gap-5 my-5 flex-wrap">
      <li className="before:content-['1.'] mb-5 lg:mb-0 before:text-primary before:mr-4 flex lg:w-[calc(50%_-_10px)]">
        <PromirP>
          Entrenamiento: Test tipo MIR, que tienen en cuenta el peso de las asignaturas y los
          diferentes temas del examen. Cuentan con preguntas predominantemente MIR, adaptadas a tu
          nivel de conocimientos, y con la corrección inmediata al finalizar cada prueba.
        </PromirP>
      </li>
      <li className="before:content-['2.'] mb-5 lg:mb-0 before:text-primary before:mr-4 flex lg:w-[calc(50%_-_10px)]">
        <PromirP>
          Estudio: Los contenidos que tienes que estudiar cada día. Al finalizar cada evento de
          estudio podrás hacer una prueba de autoevaluación y comprobar la efectividad de tu
          aprendizaje.
        </PromirP>
      </li>
      <li className="before:content-['3.'] mb-5 before:text-primary before:mr-4 flex lg:w-[calc(50%_-_10px)]">
        <PromirP>
          Repaso: Pruebas que contienen preguntas de los temas estudiados ese día y de los que has
          estudiados previamente, para reforzar tu memoria a largo plazo.
        </PromirP>
      </li>
      <li className="before:content-['4.'] mb-5 before:text-primary before:mr-4 flex lg:w-[calc(50%_-_10px)]">
        <PromirP>
          Simulacro: Exámenes con la misma estructura y formato del MIR, incluida la plantilla para
          marcar las respuestas. Una vez finalizado, dispondrás automáticamente de una corrección
          comentada y un informe de tus resultados.
        </PromirP>
      </li>
    </ul>
    <PromirP className="mb-20">
      Además de la sistemática del examen MIR y los contenidos que hay que repasar, la metodología
      de PROMIR ha tenido en cuenta la neurofisiología de tu proceso de aprendizaje, para que
      consigas el máximo rendimiento en menor tiempo, de forma totalmente personalizada, y logres tu
      objetivo de superar con éxito el MIR.
    </PromirP>
  </div>
);
export default Events;
