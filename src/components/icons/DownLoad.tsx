interface DownLoadProps {
  className?: string;
}

const DownLoad: React.FC<DownLoadProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 11.1 10"
    fill="currentColor"
  >
    <g>
      <path
        d="M8.5,4.6C8.3,4.5,8.1,4.5,8,4.6l-2.1,2V1.3c0-0.2-0.2-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3v5.4l-2.1-2
		C3,4.5,2.8,4.5,2.6,4.7C2.5,4.8,2.5,5,2.6,5.1l2.6,2.5c0.2,0.2,0.4,0.2,0.6,0l2.6-2.5C8.6,5,8.6,4.7,8.5,4.6"
      />
      <path
        d="M9.8,9.1H1.3V8c0-0.2,0.1-0.3,0.3-0.3C1.8,7.6,2,7.8,2,8v0.5h7.1V8c0-0.2,0.1-0.3,0.3-0.3
		c0.2,0,0.3,0.1,0.3,0.3V9.1z"
      />
    </g>
  </svg>
);

export default DownLoad;
