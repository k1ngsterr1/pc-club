import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BookingIcon = (props: any) => (
  <Svg
    width={22}
    height={12}
    viewBox="0 0 22 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9 1H1M7 6H1M9 11H1"
      stroke="#252525"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 11C18.7614 11 21 8.76142 21 6C21 3.23858 18.7614 1 16 1C13.2386 1 11 3.23858 11 6C11 8.76142 13.2386 11 16 11Z"
      stroke="#252525"
      strokeWidth={1.5}
    />
    <Path
      d="M16 4V5.846L17 7"
      stroke="#252525"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BookingIcon;
