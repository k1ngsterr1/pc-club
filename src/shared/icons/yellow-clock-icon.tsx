import * as React from "react";
import Svg, { Path } from "react-native-svg";


const YellowClockIcon = () => (
    <Svg
        width="29"
        height="29"
        fill="none"
        viewBox="0 0 29 29"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-4"
    >
        <Path
            stroke="#EBFF00"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M14 10v5.333l3.333 3.334"
        ></Path>
        <Path
            stroke="#EBFF00"
            strokeWidth="1.5"
            d="M27.667 14.333c0 7.364-5.97 13.334-13.334 13.334S1 21.697 1 14.333 6.97 1 14.333 1s13.334 5.97 13.334 13.333Z"
        ></Path>
    </Svg>
);

export default YellowClockIcon;
