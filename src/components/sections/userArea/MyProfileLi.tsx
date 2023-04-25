interface MyProfileLiProps {
    label: string;
    value: string;
}
const MyProfileLi: React.FC<MyProfileLiProps> = ({label, value}) => (
    <li className='mb-2'>
        <span className='text-xs text-gray-400 font-light mb-1'>{label}</span>
        <p className='text-gray-500 text-sm font-semibold'>{value}</p>
    </li>
)
export default MyProfileLi