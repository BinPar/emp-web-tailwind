interface MailProps {
  className?: string;
}

const Mail: React.FC<MailProps> = ({ className }) => (
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
      d="M921.6 813.227h-819.2c-56.554 0-102.4-45.846-102.4-102.4v0-524.288c0-56.554 45.846-102.4 102.4-102.4v0h819.2c56.554 0 102.4 45.846 102.4 102.4v0 522.923c0.006 0.406 0.009 0.885 0.009 1.365 0 56.554-45.846 102.4-102.4 102.4-0.003 0-0.006 0-0.010 0h0.001zM902.485 744.96l-390.485-325.632-389.461 324.608zM921.6 152.064h-819.2c-18.851 0-34.133 15.282-34.133 34.133v0 512l421.547-350.208c5.927-5.093 13.695-8.194 22.187-8.194s16.259 3.101 22.232 8.232l-0.045-0.038 421.547 350.891v-512c0.004-0.203 0.007-0.443 0.007-0.683 0-18.851-15.282-34.133-34.133-34.133-0.002 0-0.005 0-0.007 0v0z
        "
    />
  </svg>
);

export default Mail;
