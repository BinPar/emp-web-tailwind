const Months: React.FC = () => {
  return (
    <div className="flex">
      {[...Array(17)].map((_, index) => (
        <span key={index} className="block h-3 w-3 m-2 first:ml-0 mt-0 rounded-full bg-gray-200" />
      ))}
    </div>
  );
};
export default Months;
