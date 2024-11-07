import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface ISettingsIconProps {
    isActive?: boolean;
    props?: any;
}

const ProfileIcon = ({ isActive, props }: ISettingsIconProps) => (
    <Svg
        height="42"
        width="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16 17.046c4.142 0 7.5-3.592 7.5-8.023C23.5 4.592 20.142 1 16 1c-4.142 0-7.5 3.592-7.5 8.023 0 4.431 3.358 8.023 7.5 8.023zM31 31.974C31 36.958 31 41 16 41S1 36.958 1 31.974s6.716-9.026 15-9.026c8.284 0 15 4.042 15 9.026z"
            stroke={isActive ? "#EBFF00" : "white"} strokeOpacity=".25"
            strokeWidth="1.5"
        />
        <Path
            d="M16 17.046c4.142 0 7.5-3.592 7.5-8.023C23.5 4.592 20.142 1 16 1c-4.142 0-7.5 3.592-7.5 8.023 0 4.431 3.358 8.023 7.5 8.023zM31 31.974C31 36.958 31 41 16 41S1 36.958 1 31.974s6.716-9.026 15-9.026c8.284 0 15 4.042 15 9.026z"
            stroke={isActive ? "#EBFF00" : "white"} strokeOpacity=".25"
            strokeWidth="1.5"
        />
    </Svg>
);

export default ProfileIcon;