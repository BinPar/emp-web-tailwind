interface PlusProps {
    className?: string;
  }
  
  const Minus: React.FC<PlusProps> = ({ className }) => (
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
        d="M716.8 482.133h-170.667v170.667c0 18.851-15.282 34.133-34.133 34.133s-34.133-15.282-34.133-34.133v0-170.667h-170.667c-18.851 0-34.133-15.282-34.133-34.133s15.282-34.133 34.133-34.133v0h170.667v-170.667c0-18.851 15.282-34.133 34.133-34.133s34.133 15.282 34.133 34.133v0 170.667h170.667c18.851 0 34.133 15.282 34.133 34.133s-15.282 34.133-34.133 34.133v0z"
      />
    </svg>
  );
  
  export default Minus;
  