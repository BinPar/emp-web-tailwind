import Cap from '../../icons/Cap';

const ItemNotCourse: React.FC = () => (
  <div className="inline-flex gap-4 flex-col items-center">
    <Cap className="w-10 h-10 text-primary" />
    <p className="text-gray-400 text-sm font-light tracking-[1px]">
      Descubre los cursos que tenemos para ti
    </p>
    <button
      type="button"
      className="h-10 border-2 border-primary text-primary text-1xs uppercase tracking-[1px] hover:bg-primary hover:text-white transition-all duration-150 px-4"
    >
      ver cursos
    </button>
  </div>
);
export default ItemNotCourse;
