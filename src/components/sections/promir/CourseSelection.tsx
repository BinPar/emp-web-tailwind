import DivWrapper from '../items/DivWrapper';
import ButtonProduct from './ButtonProduct';
import HeaderPromir from './HeaderPromir';
import PromirP from './PromirP';
import PromirSelect from './PromirSelect';

const CourseSelection: React.FC = () => (
  <section>
    <DivWrapper>
      <HeaderPromir>¿CUÁL ES TU CURSO PROMIR?</HeaderPromir>
      <PromirP className="text-center">
        Encuentra el curso que más se ajusta a tus necesidades:
      </PromirP>
      <form className="my-8">
        <PromirSelect label="¿Has terminado la carrera de Medicina?" option1="Sí" option2="No" />
      </form>
      <div className='flex gap-2'>
        <ButtonProduct title='estudiante' bg='bg-[#b0dbea]' color='text-[#0089a9]'/>
        <ButtonProduct title='sexto' bg='bg-[#f1f6e9]' color='text-[#a1c25e]'/>
        <ButtonProduct title='promir internacional' bg='bg-[#dbedff]' color='text-[#004c98]'/>
        <ButtonProduct title='proremir' bg='bg-[#edf5f3]' color='text-[#6eb5b2]'/>
        <ButtonProduct title='segunda especialidad' bg='bg-[#e8f3fd]' color='text-[#5b8ac8]'/>
        <ButtonProduct title='intensivo' bg='bg-[#f0e9f4]' color='text-[#947db5]'/>
        <ButtonProduct title='entrenamir' bg='bg-[#fcf4e0]' color='text-[#dd9346]'/>
        <ButtonProduct title='intensivo' bg='bg-[#99d0dd4d]' color='text-[#0089a9]'/>
      </div>
    </DivWrapper>
  </section>
);
export default CourseSelection;
