interface MvNavProps {
  className?: string;
}

const MvNav: React.FC<MvNavProps> = ({ className }) => (
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
      d="M813.739 645.632h-603.477c-18.851 0-34.133 15.282-34.133 34.133s15.282 34.133 34.133 34.133v0h603.477c18.851 0 34.133-15.282 34.133-34.133s-15.282-34.133-34.133-34.133v0zM698.709 413.867h-488.448c-18.851 0-34.133 15.282-34.133 34.133s15.282 34.133 34.133 34.133v0h488.448c18.851 0 34.133-15.282 34.133-34.133s-15.282-34.133-34.133-34.133v0zM573.44 182.101h-363.179c-18.851 0-34.133 15.282-34.133 34.133s15.282 34.133 34.133 34.133v0h363.179c18.851 0 34.133-15.282 34.133-34.133s-15.282-34.133-34.133-34.133v0z"
    />
  </svg>
);

export default MvNav;
