import AppearanceSwitch from './AppearenceSwitch';
import OrderBy from './OrderBy';

interface VisualGroupProps {
    method: React.Dispatch<React.SetStateAction<boolean>>;
    state: boolean;
}

const VisualGroup: React.FC<VisualGroupProps> = ({method, state}) => (
  <div className='flex items-center gap-5'>
    <OrderBy />
    <AppearanceSwitch method={method} state={state}/>
  </div>
);

export default VisualGroup;
