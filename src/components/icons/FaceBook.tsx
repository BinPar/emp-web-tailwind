interface FaceBookProps {
  className?: string;
}

const FaceBook: React.FC<FaceBookProps> = ({ className }) => (
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
      d="M588.8 652.8v82.603c-0.287 1.868-0.452 4.023-0.452 6.217 0 23.753 19.255 43.008 43.008 43.008 0.879 0 1.753-0.026 2.619-0.078l-0.119 0.006h114.688v175.445h-158.037c-176.128 0-215.040-130.048-215.040-214.357v-92.843h-102.4v-204.8h102.4v-512h204.8v512h151.552l6.827 80.555 12.288 124.245z"
    />
  </svg>
);

export default FaceBook;
