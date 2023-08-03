

interface WindowsProps {
    className?: string;
  }
  
  const Windows: React.FC<WindowsProps> = ({ className }) => (
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
        d="M377.856 826.197v-314.368h-336.213v269.995l336.213 44.373zM418.133 872.277l-416.427-55.296v-345.429h416.427v400.725zM982.357 913.579v-401.749h-474.453v332.459l474.453 68.267zM1024 960l-556.373-80.896v-407.552h556.373v488.448zM377.856 384.171v-314.368l-336.213 44.373v269.995h336.213zM418.133 424.448h-416.427v-345.429l416.427-55.296v400.725zM982.357 384.171v-401.749l-474.453 68.267v333.483h474.453zM1024 424.448h-556.373v-407.552l556.373-80.896v488.448z
"
      />
    </svg>
  );
  
  export default Windows;
  