
interface ClockProps {
    className?: string;
  }
  
  const Clock: React.FC<ClockProps> = ({ className }) => (
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
        d="M670.379 504.661h-146.773v192.171c0 18.851-15.282 34.133-34.133 34.133s-34.133-15.282-34.133-34.133v0-226.304c0-18.851 15.282-34.133 34.133-34.133v0h180.907c18.851 0 34.133 15.282 34.133 34.133s-15.282 34.133-34.133 34.133v0zM512 957.269c-281.262 0-509.269-228.008-509.269-509.269s228.008-509.269 509.269-509.269c281.262 0 509.269 228.008 509.269 509.269v0c-0.388 281.105-228.163 508.881-509.232 509.269h-0.038zM512 6.997c-243.559 0-441.003 197.444-441.003 441.003s197.444 441.003 441.003 441.003c243.559 0 441.003-197.444 441.003-441.003v0c-0.388-243.403-197.6-440.615-440.965-441.003h-0.037z
"
      />
    </svg>
  );
  
  export default Clock;
  