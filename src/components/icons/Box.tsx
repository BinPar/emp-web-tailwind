interface BoxProps {
  className?: string;
}

const Box: React.FC<BoxProps> = ({ className }) => (
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
      d="M1024 696.491v2.731l-3.072 5.803c-0.541 1.045-1.107 1.939-1.742 2.779l0.035-0.048-4.779 5.12h-2.048c-2.255 1.511-4.839 2.886-7.561 3.992l-0.29 0.104-477.867 170.667c-3.404 1.25-7.335 1.972-11.435 1.972s-8.031-0.723-11.672-2.048l0.237 0.076-477.867-170.667-8.192-4.096c-1.969-1.462-3.658-3.151-5.074-5.055l-0.046-0.065v-2.389l-3.072-6.144v-2.731c-3.698-2.702-6.855-5.86-9.473-9.436l-0.084-0.121v-477.867c0.006-14.682 9.282-27.196 22.292-32.009l0.236-0.077 477.867-170.667c3.238-1.301 6.992-2.056 10.923-2.056s7.685 0.755 11.125 2.128l-0.203-0.071 477.867 170.667c13.815 4.441 23.677 17.083 23.893 32.060v477.892c0.17 1.434 0.266 3.095 0.266 4.779s-0.097 3.345-0.285 4.978l0.019-0.199zM512 821.077l375.467-134.144-136.533-48.811-375.467 134.144zM273.067 736.085l375.467-134.144-136.533-49.152-375.467 134.144zM68.267 638.464l409.6-146.091v-405.504l-409.6 146.432zM955.733 233.301l-409.6-146.432v405.504l409.6 146.091z"
    />
  </svg>
);

export default Box;
