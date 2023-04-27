
interface CronoProps {
    className?: string;
  }
  
  const Crono: React.FC<CronoProps> = ({ className }) => (

    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 -300 1050 1050" fill="currentColor" stroke="currentColor">
    <path transform="scale(1,-1) translate(0,-650)" strokeWidth="2" d="M512-64c-249.026 0-450.901 201.875-450.901 450.901s201.875 450.901 450.901 450.901c249.026 0 450.901-201.875 450.901-450.901v0c-0.388-248.869-202.031-450.513-450.864-450.901h-0.038zM512 769.536c-211.323 0-382.635-171.311-382.635-382.635s171.311-382.635 382.635-382.635c211.323 0 382.635 171.311 382.635 382.635v0c-0.194 211.245-171.389 382.44-382.616 382.635h-0.019zM354.987 868.523c-1.487-0.227-3.203-0.357-4.949-0.357-19.048 0-34.49 15.442-34.49 34.49 0 17.302 12.74 31.629 29.352 34.11l0.189 0.023c49.803 15.464 107.061 24.371 166.4 24.371s116.596-8.907 170.51-25.456l-4.11 1.086c15.175-3.684 26.268-17.154 26.268-33.215 0-18.851-15.282-34.133-34.133-34.133-4.286 0-8.387 0.79-12.166 2.232l0.234-0.078c-43.879 13.603-94.326 21.437-146.603 21.437s-102.723-7.835-150.229-22.394l3.626 0.956c-2.87-1.433-6.201-2.507-9.708-3.048l-0.191-0.024zM614.4 213.845c-9.324 0.041-17.76 3.814-23.896 9.901l-131.070 131.070c-6.134 6.17-9.926 14.674-9.926 24.064s3.792 17.894 9.927 24.066l177.833 177.833c6.187 6.236 14.76 10.097 24.235 10.097s18.048-3.86 24.232-10.094l0.002-0.002c6.134-6.17 9.926-14.674 9.926-24.064s-3.792-17.894-9.927-24.066l0.002 0.002-153.259-152.917 106.837-106.837c6.134-6.17 9.926-14.674 9.926-24.064s-3.792-17.894-9.927-24.066l0.002 0.002c-6.228-6.701-15.080-10.89-24.911-10.923h-0.006z"/>
    
  </svg>
  );
  
  export default Crono;
  