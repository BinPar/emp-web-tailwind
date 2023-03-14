interface MinusProps {
    className?: string;
  }
  
  const Minus: React.FC<MinusProps> = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -300 1050 1050"
      fill="currentColor"
      stroke="currentColor"
    >
      <path
        transform="scale(1,-1) translate(0,-650)"
        strokeWidth="2"
        d="M709.291 413.867h-409.6c-18.851 0-34.133 15.282-34.133 34.133s15.282 34.133 34.133 34.133v0h409.6c18.851 0 34.133-15.282 34.133-34.133s-15.282-34.133-34.133-34.133v0z"
      />
    </svg>
  );
  
  export default Minus;
  