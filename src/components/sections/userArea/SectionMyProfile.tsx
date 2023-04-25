import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import MyProfileLi from './MyProfileLi';

const SectionMyProfile: React.FC = () => (
  <DivWrapper>
    <section>
      <div className="flex gap-7">
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
      </article>
    </section>
  </DivWrapper>
);
export default SectionMyProfile;
