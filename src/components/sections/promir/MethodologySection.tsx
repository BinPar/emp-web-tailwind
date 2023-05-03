import DivWrapper from '../items/DivWrapper';
import ButtonPromir from './ButtonPromir';
import HeaderPromir from './HeaderPromir';
import Methodology from './Methodology';
import PromirP from './PromirP';

const MethodologySection: React.FC = () => (
  <section className="mt-20 pb-10">
    <DivWrapper>
      <HeaderPromir>metodología de estudio</HeaderPromir>
      <PromirP className="text-left">
        Los elementos que componen la metodolgía de PROMIR son:
      </PromirP>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-14 mb-16">
        <Methodology
          title="autodiagnóstico"
          src="/img/clock.svg"
          text="Indispensable para que tomes conciencia de tu nivel día a día, lo que te permitirá centrarte en tus puntos débiles y consolidar los conocimientos que ya dominas. Sin duda, la forma más eficiente de estudiar.

"
        />
        <Methodology
          title="objetivos diarios"
          src="/img/calendar.svg"
          text="El calendario te irá pautando diariamente los eventos de estudio, de forma totalmente personalizada, en función de la fase en la que te encuentres y tu ritmo de aprendizaje.

"
        />
        <Methodology
          title="refuerzo de la memoria a largo plazo"
          src="/img/brain.svg"
          text="Olvídate de dar vueltas al temario una y otra vez. Con PROMIR repasarás de manera continua conceptos, haciendo hincapié en aquellos que no estén afianzados y recordando de forma periódica los ya asimilados.

"
        />
        <Methodology
          title="método adaptativo de aprendizaje"
          src="/img/media.svg"
          text="La Inteligencia Artificial de nuestra plataforma, analizará de forma constante tu proceso de aprendizaje, para alcanzar el máximo rendimiento en el menor tiempo posible. Será cómo tener un entrenador personal.

"
        />
        <Methodology
          title="ponte a prueba con más de 30.000 preguntas"
          src="/img/computer.svg"
          text="Tienes que entrenar el tipo de examen, por eso tendrás entrenamientos y simulacros pautados. Familiarízate con la técnica y compara tus resultados con el resto de los alumnos de la plataforma.

"
        />
      </ul>
      <ButtonPromir className="m-auto block">saber más</ButtonPromir>
    </DivWrapper>
  </section>
);
export default MethodologySection;
