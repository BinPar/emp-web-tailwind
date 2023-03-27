
const ModalEmptyCart: React.FC = () => (
  <div className="w-full h-[100vh] flex items-center justify-center absolute top-0 bg-slate-300">
    <div className="bg-white border-4 border-primary p-5">
      <p className="font-light text-gray-400 tracking-[1px]">
        ¿Estas seguro de que quieres vaciar el carrito?
      </p>
      <div className="flex gap-8 justify-center my-10">
        <button
          type="button"
          className="border-2 text-primary border-primary px-4 uppercase tracking-[1px] h-10 text-sm"
        >
          cancelar
        </button>
        <button
          type="button"
          className="border-2 text-white bg-primary border-primary px-4 uppercase tracking-[1px] h-10 text-sm"
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
);

export default ModalEmptyCart;
