interface PhoneProps {
    className?: string;
  }
  
  const Phone: React.FC<PhoneProps> = ({ className = 'w-4 h-4' }) => (

    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" className={className} viewBox="0 -50 1000 1000" >
    <path strokeWidth="2" d="M699.051-64h-375.467c-61.943 0.193-112.105 50.356-112.299 112.28v799.421c0.192 62.064 50.549 112.303 112.639 112.303 0.36 0 0.72-0.002 1.080-0.005h375.412c61.943-0.193 112.105-50.356 112.299-112.28v-799.421c-0.192-62.064-50.549-112.303-112.639-112.303-0.36 0-0.72 0.002-1.080 0.005h0.055zM324.949 891.733c-0.002 0-0.003 0-0.005 0-23.941 0-43.349-19.408-43.349-43.349 0-0.24 0.002-0.48 0.006-0.719v0.036-799.403c-0.003-0.203-0.005-0.443-0.005-0.683 0-23.941 19.408-43.349 43.349-43.349 0.002 0 0.004 0 0.006 0h375.466c23.941 0 43.349 19.408 43.349 43.349v0 800.085c0.004 0.21 0.006 0.457 0.006 0.704 0 23.941-19.408 43.349-43.349 43.349-0.482 0-0.962-0.008-1.441-0.023l0.070 0.002zM604.16 749.397h-184.32c-18.851 0-34.133 15.282-34.133 34.133s15.282 34.133 34.133 34.133v0h184.32c18.851 0 34.133-15.282 34.133-34.133s-15.282-34.133-34.133-34.133v0zM570.709 129.877c0-32.424-26.285-58.709-58.709-58.709s-58.709 26.285-58.709 58.709c0 32.424 26.285 58.709 58.709 58.709s58.709-26.285 58.709-58.709z" />
    
  </svg>
  );
  
  export default Phone;
  