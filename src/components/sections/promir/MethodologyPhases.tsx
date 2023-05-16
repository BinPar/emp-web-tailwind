import SubHeader from '../items/SubHeader';
import PhaseBlock from './PhaseBlock';
import PromirP from './PromirP';

const MethodologyPhases: React.FC = () => (
  <>
    <SubHeader>FASES</SubHeader>
    <PromirP>
      Teniendo en cuenta todos estos elementos, la metodología de PROMIR se estructura en cuatro
      fases: Calentamiento, Construcción, Consolidación y Competición. Esta metodología se aplica en
      todos los cursos que PROMIR ofrece, adaptando el calendario a la convocatoria que te presentas
      y la fecha en la que te matricules.
    </PromirP>
    <ul className="flex lg:gap-x-7 flex-wrap mt-10">
      <PhaseBlock
        phaseActive="warm"
        title="CALENTAMIENTO"
        text="Es la fase de toma de contacto con la plataforma y sus recursos, y en ella se llevará a cabo una revisión del temario, combinando estudio con test de entrenamiento, repaso y simulacros"
      />
      <PhaseBlock
        phaseActive="construction"
        title="CONSTRUCCIÓN"
        text="Se trata de la fase fuerte de estudio en la que comenzarás con una preparación intensiva y dedicación completa al estudio.
          El esquema de trabajo en esta fase se basa en el autodiagnóstico, la consecución de metas diarias y el repaso acumulativo para potenciar tu memoria a largo plazo"
      />
      <PhaseBlock
        phaseActive="consolidation"
        title="CONSOLIDACIÓN"
        text="En esta fase afianzarás lo estudiado con anterioridad, poniendo especial énfasis en los puntos débiles que la plataforma ha detectado a lo largo de las fases anteriores.
          El estudio durante esta fase estará mucho más dirigido y personalizado, ya que en este momento, cuentas con un nivel muy alto de asimilación del temario y podrás concentrar tus esfuerzos en perfeccionar tu perfil."
      />
      <PhaseBlock
        phaseActive="competition"
        title="COMPETICIÓN"
        text="Es la recta final del curso. Una vez asimilado el temario, es el momento de potenciar el repaso y el entrenamiento de la técnica de examen basado en la resolución de preguntas."
      />
      <PhaseBlock
        phaseActive="calibration"
        title="CALIBRACIÓN"
        text="Si te presentas por segunda vez al examen MIR o estás en nuestro curso Recta Final, antes de comenzar deberás realizar una fase de Calibración para que la plataforma tenga datos de tus puntos fuertes y débiles y así elaborar un calendario adaptado a tus necesidades, teniendo en cuenta el poco tiempo disponible."
      />
    </ul>
  </>
);
export default MethodologyPhases;
