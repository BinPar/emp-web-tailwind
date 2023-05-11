import InputPromir from './InputPromir';

const PromirDemoForm: React.FC = () => (
  <div className="bg-promirDark p-10 w-1/3">
    <h3 className="text-white text-center text-2sm tracking-[1px] uppercase pb-3 mb-5">
      ¿quieres probar promir?
    </h3>
    <span className="text-white text-2.5xs font-light tracking-[1px]">
      Prueba PROMIR durante 7 días con acceso a los entrenamientos y temarios completos.
    </span>
    <form>
      <div className="flex gap-5 mb-4">
        <InputPromir type="text" id="name" label="Nombre*" />
        <InputPromir type="text" id="lastName" label="Apellidos*" />
      </div>
      <InputPromir type="mail" id="email" label="Correo Electrónico*" className="mb-4" />
      <InputPromir type="tel" id="phone" label="Teléfono*" className="mb-4" />
    </form>
  </div>
);
export default PromirDemoForm;
