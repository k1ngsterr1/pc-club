import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ClockIcon = (props: any) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.5}
      d="M18 34.6666C27.2048 34.6666 34.6667 27.2047 34.6667 18C34.6667 8.79523 27.2048 1.33331 18 1.33331C8.79529 1.33331 1.33337 8.79523 1.33337 18C1.33337 27.2047 8.79529 34.6666 18 34.6666Z"
      stroke="white"
      strokeOpacity={0.5}
      strokeWidth={1.5}
    />
    <Path
      d="M18 11.3333V18L22.1667 22.1666"
      stroke="white"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ClockIcon;
