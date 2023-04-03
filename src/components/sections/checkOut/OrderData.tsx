import SubHeader from '../items/SubHeader';

interface OrderDataProps {
  title: string;
  data: string;
}
const OrderData: React.FC<OrderDataProps> = ({title, data}) => (
  <div className="mt-6">
    <SubHeader>{title}</SubHeader>
    <p className="p-3 border border-gray-300 font-light text-gray-400">{data}</p>
  </div>
);
export default OrderData;
