import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface ILocationIconProps {
  isActive?: boolean;
  props?: any;
}

const LocationIcon = ({ isActive, props }: ILocationIconProps) => (
  <Svg
    width={30}
    height={36}
    viewBox="0 0 30 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.66663 14.905C1.66663 7.40998 7.63663 1.33331 15 1.33331C22.3633 1.33331 28.3333 7.40998 28.3333 14.905C28.3333 22.3416 24.0783 31.0216 17.4383 34.1233C16.6751 34.4807 15.8427 34.6659 15 34.6659C14.1572 34.6659 13.3248 34.4807 12.5616 34.1233C5.92163 31.02 1.66663 22.3433 1.66663 14.9066V14.905Z"
      stroke={isActive ? "#EBFF00" : "white"}
      strokeOpacity={0.5}
      strokeWidth={1.5}
    />
    <Path
      d="M10.8333 14.6667H19.1666M14.9999 18.8333V10.5"
      stroke={isActive ? "#EBFF00" : "white"}
      strokeOpacity={0.5}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default LocationIcon;
