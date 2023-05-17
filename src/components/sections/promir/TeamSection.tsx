import DivWrapper from '../items/DivWrapper';
import BioLi from './BioLi';
import ButtonPromir from './ButtonPromir';
import HeaderPromir from './HeaderPromir';
import PromirP from './PromirP';
import TeamItem from './TeamItem';

const TeamSection: React.FC = () => (
  <section className="my-10">
    <DivWrapper>
      <div className="mb-6">
        <HeaderPromir>CONOCE AL EQUIPO DOCENTE DE PROMIR</HeaderPromir>
        <PromirP className="text-center">
          Nuestro equipo está compuesto por dos Directores Científicos, dos coordinadores de
          tutorías, veintiocho Coordinadores de Asignatura y sesenta y seis autores. Todos comparten
          un único objetivo: que consigas el mejor resultado posible en el examen.
        </PromirP>
      </div>
      <h3 className="uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
        DIRECTORES CIENTÍFICOS
      </h3>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <TeamItem
          isVideo
          srcVideo="https://www.youtube.com/embed/KFUts2LjfeA"
          src="miguelCastillo.jpg"
          name="Miguel Castillo"
          specialty="Facultativo especialista en Cardiología"
          place="Hospital Ramón y Cajal"
        >
          <BioLi>
            Facultativo Especialista de Área en Cardiología en el Hospital Ramón y Cajal
          </BioLi>
          <BioLi>
            Facultativo Especialista de Área en Cardiología en el Sanatorio San Francisco de Asís de
            Madrid
          </BioLi>
          <BioLi>Es profesor colaborador de la Universidad de Alcalá de Henares de Madrid</BioLi>
          <BioLi>Profesor MIR durante 4 años (2008 - 2012)</BioLi>
        </TeamItem>
        <TeamItem
          isVideo
          srcVideo="https://www.youtube.com/embed/Mkk36LKiwyg"
          src="jesusCorres.jpg"
          name="Jesús Corres"
          specialty="Jefe de Estudios y Médico de Urgencia Hospitalaria"
          place="Hospital Ramón y Cajal"
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
            Profesor preparador del examen MIR y otras oposiciones médicas durante los últimos 18
            años
          </BioLi>
        </TeamItem>
      </div>
    </DivWrapper>
  </section>
);
export default TeamSection;
