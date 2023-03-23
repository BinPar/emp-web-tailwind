interface AlphabeticProps {
    className?: string;
  }
  
  const Alphabetic: React.FC<AlphabeticProps> = ({ className }) => (
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
        d="M462.848 277.333l-138.581 341.333c-6.485 17.408-11.947 31.061-16.043 41.301-4.584 10.352-9.602 19.207-15.371 27.501l0.352-0.535c-5.14 8.459-11.897 15.434-19.894 20.671l-0.245 0.15c-9.232 4.969-20.203 7.889-31.856 7.889-0.801 0-1.598-0.014-2.392-0.041l0.115 0.003c-0.679 0.024-1.476 0.038-2.277 0.038-11.653 0-22.624-2.92-32.222-8.068l0.365 0.179c-9.621-4.984-17.546-12.035-23.412-20.605l-0.14-0.216c-6.212-9.773-11.844-21.026-16.302-32.854l-0.423-1.279-13.653-34.133-136.533-344.064c-5.461-13.653-9.216-24.235-11.605-32.085-2.163-5.981-3.413-12.883-3.413-20.078 0-0.021 0-0.043 0-0.064v0.003c0.182-11.541 5.273-21.857 13.272-28.979l0.040-0.035c8.058-7.996 19.15-12.945 31.398-12.971h0.005c1.053-0.115 2.275-0.181 3.512-0.181 10.125 0 19.221 4.409 25.472 11.412l0.029 0.033c9.661 14.821 18.082 31.85 24.405 49.867l0.512 1.674 26.965 72.363h224.939l25.6-70.315 11.947-27.989c3.654-8.632 7.768-16.039 12.559-22.941l-0.271 0.413c3.568-4.296 7.873-7.838 12.743-10.469l0.228-0.113c5.286-2.377 11.457-3.762 17.953-3.762 0.289 0 0.577 0.003 0.864 0.008l-0.043-0.001c0.659-0.035 1.43-0.055 2.207-0.055 12.558 0 23.888 5.257 31.909 13.69l0.017 0.018c7.973 7.202 13.042 17.49 13.311 28.966l0.001 0.048c-2.381 20.157-8.047 38.503-16.475 55.217l0.432-0.945zM148.48 383.488l79.189 221.525c1.291 3.633 4.699 6.187 8.704 6.187s7.413-2.554 8.684-6.123l0.020-0.064 80.896-221.525zM1014.101 247.979c-8.141 5.705-18.253 9.117-29.162 9.117-1.751 0-3.481-0.088-5.186-0.259l0.215 0.017h-293.888l263.851 314.027c13.728 14.512 26.818 30.092 38.962 46.417l0.974 1.37c5.637 10.033 8.957 22.021 8.957 34.785 0 1.212-0.030 2.416-0.089 3.613l0.007-0.168c0 34.133-16.725 47.787-51.883 47.787h-302.763c-1.56 0.182-3.368 0.286-5.2 0.286-10.94 0-21.016-3.703-29.042-9.924l0.108 0.081c-6.325-5.877-10.27-14.242-10.27-23.528 0-0.489 0.011-0.975 0.033-1.458l-0.002 0.069c-0.013-0.328-0.020-0.713-0.020-1.1 0-8.951 3.96-16.977 10.224-22.422l0.036-0.031c8.057-5.918 18.172-9.471 29.117-9.471 1.767 0 3.512 0.093 5.231 0.273l-0.215-0.018h248.149l-296.619-354.987c-4.542-4.941-8.908-10.282-12.957-15.869l-0.355-0.515c-2.8-3.719-5.114-8.016-6.726-12.64l-0.1-0.33c-1.727-4.097-2.731-8.86-2.731-13.857 0-0.048 0-0.097 0-0.145v0.007c-0.038-0.702-0.060-1.524-0.060-2.35 0-13.862 6.076-26.306 15.711-34.812l0.050-0.043c11.794-8.862 26.682-14.192 42.815-14.192 1.87 0 3.723 0.072 5.556 0.212l-0.243-0.015h344.405c1.62-0.193 3.496-0.304 5.398-0.304 10.827 0 20.819 3.575 28.859 9.609l-0.124-0.089c6.334 6.202 10.261 14.841 10.261 24.397 0 0.423-0.008 0.844-0.023 1.264l0.002-0.061c0.074 0.767 0.116 1.658 0.116 2.559 0 9.258-4.44 17.478-11.307 22.648l-0.072 0.052z
"
      />
    </svg>
  );
  
  export default Alphabetic;
  