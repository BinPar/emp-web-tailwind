import DivWrapper from '../items/DivWrapper';
import Perk from './Perk';

const PerkSection: React.FC = () => (
  <section className='mt-10'>
    <DivWrapper>
      <ul className="grid grid-cols-1 lg:grid-cols-3">
        <Perk
          title="GESTIÓN EFICAZ DE TU TIEMPO DE ESTUDIO"
          text="Desde el primer día que ingreses en la plataforma, contarás con unos objetivos diarios personalizados que deberás cumplir hasta el día del examen."
          className="bg-promirLight"
        />
        <Perk
          title="APRENDIZAJE BASADO EN LA PRÁCTICA"
          text="Con el método PROMIR vas a contestar a miles de preguntas MIR. Muchas más que con cualquier otro método."
          className="bg-primary"
        />
        <Perk
          title="TUTORÍAS ONLINE PERSONALIZADAS"
          text="Queremos acompañarte en los meses de estudio previos al MIR. Por eso, cuando lo necesites, podrás tener una videollamada con tu tutor."
          className="bg-promirDark"
        />
      </ul>
    </DivWrapper>
  </section>
);
export default PerkSection;
