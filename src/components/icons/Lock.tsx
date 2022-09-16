interface LockProps {
  className?: string;
}

const Lock: React.FC<LockProps> = ({ className }) => (
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
      d="M475.819 320.683c-9.208-9.295-14.927-22.061-15.019-36.164v-0.018c0.013-14.133 5.75-26.924 15.018-36.181l0.001-0.001h2.048v-43.349c0-18.851 15.282-34.133 34.133-34.133s34.133 15.282 34.133 34.133v0 41.643h2.048c9.268 9.257 15.006 22.048 15.019 36.179v0.003c-0.092 14.12-5.81 26.886-15.023 36.185l0.004-0.004c-9.541 9.385-22.64 15.179-37.091 15.179-13.574 0-25.955-5.112-35.321-13.516l0.049 0.044zM707.243 523.093v246.101c-0.194 105.301-85.505 190.611-190.787 190.805h-8.894c-105.301-0.194-190.611-85.505-190.805-190.787v-246.12c-79.928-60.147-131.072-154.831-131.072-261.46 0-180.219 146.096-326.315 326.315-326.315s326.315 146.096 326.315 326.315c0 106.629-51.143 201.313-130.238 260.859l-0.834 0.601zM385.024 769.195c0.193 67.598 54.94 122.345 122.52 122.539h8.894c67.718-0.194 122.539-55.135 122.539-122.88 0 0 0 0 0-0.001v0-204.8c-37.486 16.187-81.132 25.602-126.976 25.602s-89.49-9.415-129.109-26.416l2.133 0.814zM512 4.267c-142.704 0-258.389 115.685-258.389 258.389s115.685 258.389 258.389 258.389c142.704 0 258.389-115.685 258.389-258.389v0c-0.194-142.626-115.763-258.195-258.37-258.389h-0.019z"
    />
  </svg>
);

export default Lock;
