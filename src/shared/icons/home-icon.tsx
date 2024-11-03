import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IHomeIconProps {
  isActive?: boolean;
  props?: any;
}

const HomeIcon = ({ isActive, props }: IHomeIconProps) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.33337 18.34C1.33337 14.525 1.33337 12.6183 2.20004 11.0383C3.06337 9.45665 4.64504 8.47665 7.80671 6.51331L11.14 4.44498C14.4817 2.36998 16.1534 1.33331 18 1.33331C19.8467 1.33331 21.5167 2.36998 24.86 4.44498L28.1934 6.51331C31.355 8.47665 32.9367 9.45665 33.8017 11.0383C34.6667 12.62 34.6667 14.525 34.6667 18.3383V20.875C34.6667 27.375 34.6667 30.6266 32.7134 32.6466C30.76 34.6666 27.6184 34.6666 21.3334 34.6666H14.6667C8.38171 34.6666 5.23837 34.6666 3.28671 32.6466C1.33504 30.6266 1.33337 27.3766 1.33337 20.875V18.34Z"
      stroke={isActive ? "#EBFF00" : "white"}
      strokeOpacity={0.5}
      strokeWidth={1.5}
    />
    <Path
      d="M18 23V28"
      stroke={isActive ? "#EBFF00" : "white"}
      strokeOpacity={0.5}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default HomeIcon;
