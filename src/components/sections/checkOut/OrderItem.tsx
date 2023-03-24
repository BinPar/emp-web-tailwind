interface OrderItemProps {
  title: string;
  value: number;
  suffix: string;
}
const OrderItem: React.FC<OrderItemProps> = ({ title, value, suffix }) => (
  <li className="px-4 text-gray-400 flex justify-between items-center mt-3 first:mt-0">
    <span className="uppercase text-xs tracking-[1px]">{title}</span>
    <p>
      {value !== 0 ? value : 'GRATIS'}
      {value !== 0 && (<span className="ml-2">{suffix}</span>)}
    </p>
  </li>
);
export default OrderItem;
