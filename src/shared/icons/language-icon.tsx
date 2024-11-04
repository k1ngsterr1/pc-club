import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LanguageIcon = (props: any) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M28.3334 15C28.3334 22.364 22.3641 28.3333 15.0001 28.3333C7.63608 28.3333 1.66675 22.364 1.66675 15C1.66675 7.63601 7.63608 1.66667 15.0001 1.66667C22.3641 1.66667 28.3334 7.63601 28.3334 15Z"
      stroke="#EBFF00"
      strokeWidth={1.5}
    />
    <Path
      d="M3 9.67734C3 9.67734 6.916 13.6667 12.916 13.6667C17 13.6667 19.168 11.3027 21 10.6747C24.444 9.49334 27 9.67734 27 9.67734M3 17.6773C3 17.6773 5.78533 17.4933 9.53733 18.6747C11.5347 19.3013 13.896 21.6667 18.3467 21.6667C22.3627 21.6667 25.5213 20.1613 27.3613 19"
      stroke="#EBFF00"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default LanguageIcon;
