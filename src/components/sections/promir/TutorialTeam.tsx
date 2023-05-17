import DivWrapper from '../items/DivWrapper';
import BioLi from './BioLi';
import HeaderPromir from './HeaderPromir';
import PromirP from './PromirP';
import TeamItem from './TeamItem';

const TutorialTeam: React.FC = () => (
  <DivWrapper className="mt-10">
    <HeaderPromir>EQUIPO DOCENTE PROMIR</HeaderPromir>
    <PromirP>
      En PROMIR ponemos todos los medios a tu alcance para que la comunicación entre alumno y equipo
      docente sea siempre la mejor.
    </PromirP>
    <h3 className="w-full my-5 uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
      DIRECTORES CIENTÍFICOS
    </h3>
    <div className="lg:flex justify-center gap-10 my-10">
      <TeamItem
        src="miguelCastillo.jpg"
        name="Miguel Castillo"
        specialty="Facultativo especialista en Cardiología"
        place="Hospital Ramón y Cajal"
        className="m-auto mb-10 lg:m-[inherit]"
      >
        <BioLi>Facultativo Especialista de Área en Cardiología en el Hospital Ramón y Cajal</BioLi>
        <BioLi>
          Facultativo Especialista de Área en Cardiología en el Sanatorio San Francisco de Asís de
          Madrid
        </BioLi>
        <BioLi>Es profesor colaborador de la Universidad de Alcalá de Henares de Madrid</BioLi>
        <BioLi>Profesor MIR durante 4 años (2008 - 2012)</BioLi>
      </TeamItem>

      <TeamItem
        src="jesusCorres.jpg"
        name="Jesús Corres"
        specialty="Jefe de Estudios y Médico de Urgencia Hospitalaria"
        place="Hospital Ramón y Cajal"
        className="m-auto lg:m-[inherit]"
      >
        <BioLi>Doctor en Medicina</BioLi>
        <BioLi>Especialista en Reumatología</BioLi>
        <BioLi>Médico de Urgencia Hospitalaria en el Hospital Ramón y Cajal</BioLi>
        <BioLi>Jefe de Estudios del Hospital Ramón y Cajal</BioLi>
        <BioLi>
          Profesor clínico de la Universidad de Alcalá de Henares en el departamento de Urgencias
          del Hospital Ramón y Cajal
        </BioLi>
        <BioLi>
          Profesor preparador del examen MIR y otras oposiciones médicas durante los últimos 18 años
        </BioLi>
      </TeamItem>
    </div>
  </DivWrapper>
);
export default TutorialTeam;
