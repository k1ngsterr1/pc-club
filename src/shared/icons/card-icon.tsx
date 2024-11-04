import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CardIcon = (props: any) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.66675 16C2.66675 10.972 2.66675 8.45733 4.22941 6.896C5.79208 5.33467 8.30541 5.33333 13.3334 5.33333H18.6667C23.6947 5.33333 26.2094 5.33333 27.7707 6.896C29.3321 8.45867 29.3334 10.972 29.3334 16C29.3334 21.028 29.3334 23.5427 27.7707 25.104C26.2081 26.6653 23.6947 26.6667 18.6667 26.6667H13.3334C8.30541 26.6667 5.79075 26.6667 4.22941 25.104C2.66808 23.5413 2.66675 21.028 2.66675 16Z"
      stroke="#EBFF00"
      strokeWidth={1.5}
    />
    <Path
      d="M13.3334 21.3333H8.00008M18.6667 21.3333H16.6667M2.66675 13.3333H29.3334"
      stroke="#EBFF00"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default CardIcon;
