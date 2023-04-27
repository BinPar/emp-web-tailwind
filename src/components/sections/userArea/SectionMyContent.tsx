import Image from 'next/image';
import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';

const SectionMyContent: React.FC = () => (
  <section className="my-10">
    <DivWrapper>
      <SubHeader className='hidden lg:block'>MI BIBLIOTECA DIGITAL - MI EUREKA</SubHeader>
      <div className="flex flex-wrap justify-center items-center gap-14">
        <Image alt="miEureca" width={210} height={210} src="/img/mie.png" className="mt-0" />
        <div className="text-center">
          <p className="text-gray-400 text-sm font-light tracking-[1px] mb-8">
            Accede a tus contenidos a través de Mi Eureka
          </p>
          <button
            type="button"
            className="h-10 border-2 border-primary text-1xs uppercase tracking-[1px] text-primary hover:bg-primary hover:text-white transition-all duration-150 px-4"
          >
            acceder
          </button>
        </div>
      </div>
      <SubHeader className="mt-10 hidden lg:block">MI BIBLIOTECA DIGITAL - MI EUREKA</SubHeader>
      <p className="text-gray-400 text-sm font-light tracking-[1px] mt-10 text-center sm:text-left">
        No tienes materiales complementarios todavía.
      </p>
    </DivWrapper>
  </section>
);
export default SectionMyContent;
