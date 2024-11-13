
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="none"
    width={1440}
    height={450}
    {...props}
  >
    <path
      id="shape"
      d="M0,0V450H1440V0ZM1311,164.67q-127.56,76.64-161.47,127.05T1013.92,381.8q-101.71,39.66-203.44-22.18t-334.24-8.74Q243.74,404,132.32,332.06t43.6-135.8Q330.92,132.41,403.58,80t218-4q145.32,48.41,232.51,37t335.85-18.15Q1438.58,88,1311,164.67Z"
      
      stroke="#eee"
    >
      <animate
        attributeName="d"
        dur="40s"
        repeatCount="indefinite"
        values="         M0,0V450H1440V0ZM1311,164.67q-127.56,76.64-161.47,127.05T1013.92,381.8q-101.71,39.66-203.44-22.18t-334.24-8.74Q243.74,404,132.32,332.06t43.6-135.8Q330.92,132.41,403.58,80t218-4q145.32,48.41,232.51,37t335.85-18.15Q1438.58,88,1311,164.67Z;         M0,0V450H1440V0ZM1272.85,299.92Q1137.22,347,974.14,313.37t-260,39Q617.3,425,476.83,396.73T218.48,311.35Q100.61,254.21,87.69,168.16T276.61,54.55Q478.44,27,622.14,82.12t227.67,39.66q84-15.47,227.67-4.71t237.35,73.28Q1408.49,252.87,1272.85,299.92Z;         M0,0V450H1440V0ZM1311,164.67q-127.56,76.64-161.47,127.05T1013.92,381.8q-101.71,39.66-203.44-22.18t-334.24-8.74Q243.74,404,132.32,332.06t43.6-135.8Q330.92,132.41,403.58,80t218-4q145.32,48.41,232.51,37t335.85-18.15Q1438.58,88,1311,164.67Z"
      />
    </path>
  </svg>
);
export default SVGComponent;
