import Items from '../../icons/Items';
import List from '../../icons/List';

interface AppearanceSwitchProps {
  method: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}
const AppearanceSwitch: React.FC<AppearanceSwitchProps> = ({ method, state }) => (
  <div className="hidden lg:gap-5 lg:flex text-gray-400">
    <button type="button" onClick={(): void => method(!state)}>
      <List className={`w-5${state ? ' text-primary' : ''}`} />
    </button>
    <button type="button" onClick={(): void => method(!state)}>
      <Items className={`w-5${!state ? ' text-primary' : ''}`} />
    </button>
  </div>
);
export default AppearanceSwitch;
