interface YoutubeProps {
  className?: string;
}

const Youtube: React.FC<YoutubeProps> = ({ className }) => (
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
      d="M1014.101 661.333c-5.49 40.217-20.152 76.209-41.81 106.915l0.508-0.76c-25.906 27.162-62.048 44.364-102.212 45.394l-0.188 0.004c-142.677 10.581-358.4 10.581-358.4 10.581v0s-214.357 0-357.717-10.581c-40.352-1.033-76.494-18.235-102.345-45.339l-0.055-0.058c-21.066-29.974-35.714-65.948-41.155-104.873l-0.147-1.282c-6.175-50.616-10.004-109.851-10.575-169.865l-0.006-0.802v-81.579c0.525-60.748 4.355-119.985 11.32-178.258l-0.739 7.592c5.518-40.292 20.047-76.38 41.493-107.309l-0.533 0.813c29.608-27.759 69.415-44.952 113.234-45.397l0.089-0.001c81.579-11.264 347.136-13.995 347.136-13.995s214.699 0 357.717 11.264c40.423 0.665 76.68 17.959 102.327 45.319l0.073 0.078c21.114 30.069 35.77 66.167 41.158 105.225l0.144 1.271c5.826 50.653 9.409 109.932 9.894 169.949l0.005 0.718v82.944c0 85.675-9.899 170.667-9.899 170.667zM682.667 459.264l-276.48-147.797v298.325l125.611-68.267z"
    />
  </svg>
);

export default Youtube;
