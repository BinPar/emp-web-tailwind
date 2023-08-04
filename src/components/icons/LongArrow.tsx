interface LongArrowProps {
  className?: string;
}

const LongArrow: React.FC<LongArrowProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 14.1 5.2"
    fill="currentColor"
    stroke="none"
  >
    <g>
      <path
        d="M12.4,3.1H0.5C0.3,3.1,0,2.9,0,2.6s0.2-0.5,0.5-0.5h11.8c0.3,0,0.5,0.2,0.5,0.5S12.6,3.1,12.4,3.1z"
      />
    </g>
    <g>
      <path
        d="M11.3,5.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l1.7-1.7L11,0.9c-0.2-0.2-0.2-0.5,0-0.7
			c0.2-0.2,0.5-0.2,0.7,0l2.4,2.4L11.7,5C11.6,5.1,11.5,5.1,11.3,5.1z"
      />
    </g>
  </svg>
);

export default LongArrow;
