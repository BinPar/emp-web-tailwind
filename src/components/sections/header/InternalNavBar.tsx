import DivWrapper from '../items/DivWrapper';

const InternalNavBar: React.FC = () => (
  <div className="bg-primarylight">
    <DivWrapper>
      <ul className="w-full flex">
        <li>
          <a>home</a>
        </li>
      </ul>
    </DivWrapper>
  </div>
);
export default InternalNavBar;
