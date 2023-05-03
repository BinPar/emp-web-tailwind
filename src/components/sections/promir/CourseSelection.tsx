import DivWrapper from '../items/DivWrapper';
import ButtonProduct from './ButtonProduct';
import HeaderPromir from './HeaderPromir';
import PromirP from './PromirP';
import PromirSelect from './PromirSelect';

const CourseSelection: React.FC = () => (
  <>
    <HeaderPromir>¿CUÁL ES TU CURSO PROMIR?</HeaderPromir>
    <PromirP className="text-center">
      Encuentra el curso que más se ajusta a tus necesidades:
    </PromirP>
    <form className="my-8">
      <PromirSelect label="¿Has terminado la carrera de Medicina?" option1="Sí" option2="No" />
    </form>
  </>
);
export default CourseSelection;
