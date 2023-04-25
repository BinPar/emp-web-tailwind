import Image from 'next/image';
import Cap from '../../icons/Cap';
import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import MyProfileLi from './MyProfileLi';
import InputForms from '../checkOut/InputForms';
import Statistics from '../../icons/Statistics';
import AdminLink from './AdminLink';
import Calendar from '../../icons/Calendar';
import Docs from '../../icons/Docs';
import Mail from '../../icons/Mail';

const SectionMyProfile: React.FC = () => (
  <>
    <section className="my-10">
      <DivWrapper>
        <div className="flex gap-7 mb-20">
          <article className="w-2/5">
            <SubHeader className="flex justify-between items-center">
              MIS DATOS
              <button className="text-secondarygray uppercase text-xs hover:brightness-75">
                editar
              </button>
            </SubHeader>
            <ul>
              <MyProfileLi label="Nombre" value="Adrian" />
              <MyProfileLi label="Apellidos" value="Binpar" />
              <MyProfileLi label="Email" value="adrian@binpar.com" />
              <MyProfileLi label="Perfil" value="Público general" />
              <MyProfileLi label="Grado" value="Público general" />
            </ul>
          </article>
          <article className="w-full">
            <SubHeader className="flex justify-between items-center">
              MIS COMPRAS
              <button className="text-secondarygray uppercase text-xs hover:brightness-75">
                VER TODAS
              </button>
            </SubHeader>
          </article>
        </div>
        <article>
          <SubHeader className="flex justify-between items-center">
            MIS CURSOS
            <button className="text-secondarygray uppercase text-xs hover:brightness-75">
              ver todos
            </button>
          </SubHeader>
          <div className="inline-flex gap-4 flex-col items-center">
            <Cap className="w-10 h-10 text-primary" />
            <p className="text-gray-400 text-sm font-light tracking-[1px]">
              Descubre los cursos que tenemos para ti
            </p>
            <button className="h-10 border-2 border-primary text-primary text-1xs uppercase tracking-[1px] hover:bg-primary hover:text-white transition-all duration-150 px-4">
              ver cursos
            </button>
          </div>
        </article>
      </DivWrapper>
    </section>
    <section className="bg-lightgray py-10">
      <DivWrapper>
        <SubHeader>MI EUREKA</SubHeader>
        <div className="flex justify-around items-center">
          <Image alt="miEureca" width={170} height={170} src="/img/mie.png" className="mt-0" />
          <div className="text-center">
            <Image
              src="/img/mieCollections.jpg"
              alt="collection group"
              width={802}
              height={78.4}
              className="m-auto mb-6"
            />
            <button className="pointer-events-none opacity-50 h-10 border-2 border-primary text-1xs uppercase tracking-[1px] bg-primary text-white transition-all duration-150 px-4">
              próximamente
            </button>
          </div>
        </div>
      </DivWrapper>
    </section>
    <section className="py-10">
      <DivWrapper>
        <SubHeader className="flex justify-between items-center">
          MIS CÓDIGOS
          <button className="text-secondarygray uppercase text-xs hover:brightness-75">
            ver todos
          </button>
        </SubHeader>
        <p className="uppercase text-center text-primary font-semibold tracking-[.8px] mb-7">
          canjea tu código
        </p>
        <form className="flex gap-5 justify-center w-full">
          <InputForms
            type="text"
            id="code"
            label="Código *"
            className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
          />
          <button
            type="submit"
            className="bg-primary text-white text-1xs uppercase tracking-[1px] h-10 w-24 block"
          >
            Canjear
          </button>
        </form>
      </DivWrapper>
    </section>
    <section className="bg-lightgray py-10">
      <DivWrapper>
        <SubHeader>ADMINISTRACIÓN</SubHeader>
        <div className="flex gap-5">
          <AdminLink href="#" title="Estadísticas">
            <Statistics className="w-10 group-hover:text-white" />
          </AdminLink>
          <AdminLink href="#" title="Actualizador de fechas">
            <Calendar className="w-10 group-hover:text-white" />
          </AdminLink>
          <AdminLink href="#" title="Traducciones">
            <Docs className="w-10 group-hover:text-white" />
          </AdminLink>
          <AdminLink href="#" title="Invitaciones">
            <Mail className="w-10 group-hover:text-white" />
          </AdminLink>
        </div>
      </DivWrapper>
    </section>
  </>
);
export default SectionMyProfile;
