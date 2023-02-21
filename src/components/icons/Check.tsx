
interface CheckProps {
    className?: string;
  }
  
  const Check: React.FC<CheckProps> = ({ className }) => (
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
        d="M443.733 277.333c-9.324 0.041-17.76 3.814-23.896 9.901l-136.531 136.531c-6.202 6.202-10.038 14.77-10.038 24.235 0 18.928 15.345 34.273 34.273 34.273 9.464 0 18.032-3.836 24.235-10.038v0l111.957-111.616 247.125 247.125c6.187 6.236 14.76 10.097 24.235 10.097s18.048-3.86 24.232-10.094l0.002-0.002c6.134-6.17 9.926-14.674 9.926-24.064s-3.792-17.894-9.927-24.066l-273.065-273.065c-5.895-5.534-13.787-9.002-22.486-9.215l-0.042-0.001z"
      />
    </svg>
  );
  
  export default Check;
  