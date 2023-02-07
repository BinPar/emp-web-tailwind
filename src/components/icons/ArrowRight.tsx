interface ArrowRightProps {
  className?: string;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => (
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
      d="M433.152 256.171c-18.79 0.081-33.99 15.332-33.99 34.133 0 9.475 3.861 18.048 10.095 24.233l0.002 0.002 133.12 133.461-132.779 133.461c-6.134 6.17-9.926 14.674-9.926 24.064s3.792 17.894 9.927 24.066l-0.002-0.002c6.17 6.134 14.674 9.926 24.064 9.926s17.894-3.792 24.066-9.927l-0.002 0.002 156.672-157.355c6.236-6.187 10.097-14.76 10.097-24.235s-3.86-18.048-10.094-24.232l-0.002-0.002-157.013-157.355c-6.168-6.289-14.74-10.199-24.227-10.24h-0.008z
        "
    />
  </svg>
);

export default ArrowRight;
