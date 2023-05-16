import MethodologyItem from './MethodologyItem';
import PromirP from './PromirP';

const MethodologyItemsList: React.FC = () => (
  <div>
    <PromirP className="mb-5">
      Para elaborar la metodología hemos tenido en cuenta los siguientes elementos:
    </PromirP>
    <ul className="flex flex-wrap gap-4 max-w-[1024px] m-auto mb-10">
      <MethodologyItem
        src="clock.svg"
        title="AUTODIAGNÓSTICO"
        text="Indispensable para que tomes conciencia de tu nivel día a día, lo que te permitirá centrarte en tus puntos débiles y estudiar de forma más eficiente."
      />
      <MethodologyItem
        src="calendar.svg"
        title="OBJETIVOS DIARIOS"
        text="El calendario te irá pautando diariamente los eventos de estudio, de forma totalmente personalizada, en función de la fase en la que te encuentres y tu ritmo de aprendizaje."
      />
      <MethodologyItem
        src="brain.svg"
        title="REFUERZO DE LA MEMORIA A LARGO PLAZO"
        text="Olvídate de dar vueltas al temario una y otra vez. Con PROMIR repasarás de manera continua conceptos, haciendo hincapié en aquellos que no estén afianzados y recordando de forma periódica los ya asimilados."
      />
      <MethodologyItem
        src="media.svg"
        title="MÉTODO ADAPTATIVO DE APRENDIZAJE"
        text="La Inteligencia Artificial de nuestra plataforma analizará de forma constante tu proceso de aprendizaje, para alcanzar el máximo rendimiento en el menor tiempo posible. Será como tener un entrenador personal."
      />
      <MethodologyItem
        src="computer.svg"
        title="PONTE A PRUEBA CON MÁS DE 30.000 PREGUNTAS"
        text="Tienes que entrenar el tipo de examen, por eso tendrás entrenamientos y simulacros pautados. Familiarízate con la técnica y compara tus resultados con el resto de los alumnos de la plataforma."
      />
      <MethodologyItem
        src="custom.svg"
        title="CONTENIDOS ENRIQUECIDOS Y PERSONALIZABLES"
        text="El estudio y repaso se apoyan en textos enriquecidos con videoclases, hipervínculos a preguntas MIR de convocatorias pasadas y la posibilidad de crear marcadores, e incluso preguntar a nuestro equipo docente sobre lo que estás estudiando, sin salirte del contenido."
      />
    </ul>
  </div>
);
export default MethodologyItemsList;
