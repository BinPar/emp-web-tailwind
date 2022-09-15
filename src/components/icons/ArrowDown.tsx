interface ArrowDownProps {
    className?: string;
    strokeWidth?: number;
  }
  
  const ArrowDown: React.FC<ArrowDownProps> = ({ className = 'w-4 h-4', strokeWidth = 2 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M19 9l-7 7-7-7" />
    </svg>
  );
  
  export default ArrowDown;
  