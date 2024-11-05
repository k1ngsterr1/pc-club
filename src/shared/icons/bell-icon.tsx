import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BellIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.35205 20.242C8.7872 20.7923 9.3417 21.2364 9.97366 21.541C10.6056 21.8455 11.2985 22.0025 12.0001 22C12.7016 22.0025 13.3945 21.8455 14.0264 21.541C14.6584 21.2364 15.2129 20.7923 15.6481 20.242C13.2271 20.5697 10.773 20.5697 8.35205 20.242Z"
      fill="white"
      fillOpacity={0.25}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7501 9.704V9C18.7501 5.134 15.7271 2 12.0001 2C8.27306 2 5.25006 5.134 5.25006 9V9.704C5.25006 10.549 5.01006 11.375 4.55806 12.078L3.45006 13.801C2.43906 15.375 3.21106 17.514 4.97006 18.011C9.56635 19.3127 14.4338 19.3127 19.0301 18.011C20.7891 17.514 21.5611 15.375 20.5501 13.801L19.4421 12.078C18.9888 11.3692 18.7493 10.5453 18.7501 9.704ZM12.0001 5.25C12.199 5.25 12.3897 5.32902 12.5304 5.46967C12.671 5.61032 12.7501 5.80109 12.7501 6V10C12.7501 10.1989 12.671 10.3897 12.5304 10.5303C12.3897 10.671 12.199 10.75 12.0001 10.75C11.8011 10.75 11.6104 10.671 11.4697 10.5303C11.3291 10.3897 11.2501 10.1989 11.2501 10V6C11.2501 5.80109 11.3291 5.61032 11.4697 5.46967C11.6104 5.32902 11.8011 5.25 12.0001 5.25Z"
      fill="white"
      fillOpacity={0.25}
    />
  </Svg>
);
export default BellIcon;