import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrowIcon = (props: any) => (
  <Svg
    width={10}
    height={18}
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M9 1L1 9L9 17" stroke="#EBFF00" />
  </Svg>
);
export default BackArrowIcon;
