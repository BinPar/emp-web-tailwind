interface CheckedProps {
  className?: string;
}

const Checked: React.FC<CheckedProps> = ({ className }) => (
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
      d="M712.363 448c0-110.657-89.705-200.363-200.363-200.363s-200.363 89.705-200.363 200.363c0 110.657 89.705 200.363 200.363 200.363s200.363-89.705 200.363-200.363zM512-60.587c-280.885 0-508.587 227.702-508.587 508.587s227.702 508.587 508.587 508.587c280.885 0 508.587-227.702 508.587-508.587v0c-0.194-280.806-227.78-508.392-508.568-508.587h-0.019zM512 888.32c-243.182 0-440.32-197.138-440.32-440.32s197.138-440.32 440.32-440.32c243.182 0 440.32 197.138 440.32 440.32v0c-0.194 243.104-197.217 440.126-440.302 440.32h-0.018z

            "
    />
  </svg>
);

export default Checked;
