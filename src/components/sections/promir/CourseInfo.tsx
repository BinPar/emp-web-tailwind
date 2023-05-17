import PromirP from './PromirP';
import CourseDetail from './CourseDetail';
const CourseInfo: React.FC = () => (
  <div className="w-full lg:w-2/4 pr-8 mb-10 lg:mb-0">
    <PromirP className="text-white">
      Dirigido a estudiantes de 6º de Medicina.
      <br />
      <br />
      Este curso se divide en dos etapas: una primera donde realizarás la fase de calentamiento,
      diseñada para que sea compatible con tus horarios (clases, estudio de asignaturas del curso,
      exámenes universitarios…),y una segunda etapa para cuando hayas finalizado tu Grado, en la que
      cursarás las fases de Construcción, Consolidación y Competición.
      <br />
      <br />
      Con PROMIR, reforzarás los conocimientos que has adquirido en los años anteriores, lo que te
      será de gran utilidad para superar con éxito tu último año de carrera y, una vez que te
      gradúes, PROMIR te acompañará en tu día a día para optimizar al máximo tu rendimiento en la
      preparación del examen MIR.
      <br />
      <br />
      Sabemos que durante este curso, necesitarás apoyo. Por este motivo, desde el primer día que
      ingreses en la plataforma, se te asignará tu propio tutor con el que podrás concertar todas
      las videollamadas que necesites. Estará al tanto de tus avances en el estudio, tus puntos
      débiles y tus fortalezas gracias a toda la información que le proporciona la plataforma.
      <br />
      <br />
      Todos los días tendrás unos objetivos de estudio y el calendario adaptativo de la plataforma
      adaptará los eventos a tus necesidades. Además, PROMIR te ayudará a reforzar tus puntos
      débiles y te dirá cuál es tu posición con respecto a otros alumnos de la plataforma que se
      vayan a presentar a tu misma convocatoria.
    </PromirP>
    <CourseDetail className="border-t border-white" />
    <CourseDetail className="border-t border-white" />
    
  </div>
);
export default CourseInfo;
