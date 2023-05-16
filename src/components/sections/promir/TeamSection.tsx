import DivWrapper from '../items/DivWrapper';
import ButtonPromir from './ButtonPromir';
import HeaderPromir from './HeaderPromir';
import PromirP from './PromirP';
import TeamItem from './TeamItem';

const TeamSection: React.FC = () => (
  <section className="my-10">
    <DivWrapper>
      <div className='mb-6'>
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
          src="https://www.youtube.com/embed/KFUts2LjfeA"
          name="Miguel Castillo"
          specialty="Facultativo especialista en Cardiología"
          place="Hospital Ramón y Cajal"
        />
        <TeamItem
          src="https://www.youtube.com/embed/Mkk36LKiwyg"
          name="Jesús Corres"
          specialty="Jefe de Estudios y Médico de Urgencia Hospitalaria"
          place="Hospital Ramón y Cajal"
        />
      </div>
    </DivWrapper>
  </section>
);
export default TeamSection;
