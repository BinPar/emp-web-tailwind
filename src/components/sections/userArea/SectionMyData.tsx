import FullStar from '../../icons/FullStar';
import Trash from '../../icons/Trash';
import Visa from '../../icons/Visa';
import AddressForm from '../checkOut/AddressForm';
import PersonalData from '../checkOut/PersonalData';
import DivWrapper from '../items/DivWrapper';

const SectionMyData: React.FC = () => (
  <section className="my-10">
    <DivWrapper>
      <PersonalData />
      <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300 mb-5 mt-2">
        MIS TARJETAS
      </p>
      <div className="grid grid-cols-3">
        <div className="p-3 border text-primary font-semibold flex items-center justify-between border-primary">
          <div className="flex items-center justify-center">
            <Visa className="w-11 mr-5" />
            <div>
              <span className="mt-1 font-semibold">**** **** **** 3547</span>
              <p className="font-light -mt-2">6 / 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <button type="button">
              <FullStar className="w-5 fill-primary" />
            </button>
            <button type="button" className="pl-3 ml-2 border-l border-primary">
              <Trash className="w-5" />
            </button>
          </div>
        </div>
      </div>
      <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300 mb-5 mt-5">
        DIRECCIONES
      </p>
      <p className="text-gray-500 text-1xs tracking-[1px] font-light pb-2 border-b border-gray-300 mb-5 mt-5">
        miCasa
      </p>
      <AddressForm />
    </DivWrapper>
  </section>
);
export default SectionMyData;
