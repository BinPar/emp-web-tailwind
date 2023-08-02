interface TriangleProps {
  className?: string;
}

const Triangle: React.FC<TriangleProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 33.6 37.8"
    strokeWidth={1.25}
  >

    <g>
      <polygon fill="#ffffff" points="32.3,36.8 1.5,19 32.3,1.3 	" />
      <polyline fill="none" stroke="#DDE1E7" points="31.5,36.4 1.5,19 31.5,1.7 	" />
    </g>
  </svg>
);

export default Triangle;
