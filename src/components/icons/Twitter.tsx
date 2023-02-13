interface TwitterProps {
  className?: string;
}

const Twitter: React.FC<TwitterProps> = ({ className }) => (
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
      d="M1024 760.32c-34.988-15.907-75.594-27.864-118.116-33.859l-2.375-0.274c43.498 25.884 76.298 65.874 92.409 113.552l0.433 1.477c-38.546-22.882-83.365-40.403-131.039-50.050l-2.763-0.467c-38.515 40.515-92.811 65.717-152.992 65.717-114.525 0-207.733-91.265-210.863-205.033l-0.006-0.289c0.277-16.969 2.502-33.286 6.459-48.912l-0.315 1.467c-174.561 8.148-328.49 90.079-432.363 215.087l-0.789 0.977c-17.645-29.294-28.341-64.53-29.011-102.212l-0.003-0.188c0.376-71.206 37.032-133.769 92.411-170.189l0.773-0.477c-34.944 0.551-67.571 9.978-95.875 26.117l0.984-0.517v-3.072c0-0.102 0-0.223 0-0.344 0-26.718 5.395-52.176 15.155-75.344l-0.478 1.277c26.719-65.362 83.645-113.488 152.941-127.433l1.341-0.225c-16.663-4.961-35.811-7.827-55.625-7.851h-0.013c-13.961 0.098-27.493 1.709-40.508 4.678l1.255-0.241c28.62-83.041 105.087-142.068 195.654-144.379l0.271-0.005c-70.971-54.939-161.245-88.066-259.256-88.066-0.416 0-0.831 0.001-1.246 0.002h0.064c-7.544-0.406-16.374-0.637-25.259-0.637s-17.716 0.231-26.487 0.688l1.228-0.051c91.382-58.237 202.759-92.825 322.214-92.843h0.005c3.468-0.074 7.555-0.116 11.653-0.116 279.861 0 513.773 196.734 570.981 459.447l0.705 3.858c8.889 37.536 13.989 80.635 13.995 124.924v26.287c40.992 29.845 75.619 65.45 103.495 106.052l0.953 1.468z"
    />
  </svg>
);

export default Twitter;