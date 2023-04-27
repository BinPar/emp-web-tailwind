import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import ItemMyCourse from './ItemMyCourse';
import ItemNotCourse from './ItemNotCourse';

const SectionMyCourse: React.FC = () => {
  const cursos = true;
  return (
    <section className="my-10">
      <DivWrapper>
        <SubHeader className='hidden lg:block'>MI FORMACIÓN</SubHeader>
        <div className="grid grid-cols-1 gap-3 md:gap-5 lg:gap-10 md:grid-cols-2">
          {!cursos ? (
            <ItemNotCourse />
          ) : (
            <ItemMyCourse
              src="/img/master.jpg"
              title="Máster en Enfermería de Urgencias y Emergencias de la SEMES"
              author="Autores de la obra:  SEMES - Sociedad Española de Medicina de Urgencias y Emergencias, Javier Morillo Rodriguez, Concepción Abellas Álvarez, Carmen Casal Angulo"
              type="Máster de Formación Permanente"
            />
          )}
        </div>
      </DivWrapper>
    </section>
  );
};
export default SectionMyCourse;
