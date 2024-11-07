import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BinIcon = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="32"
        fill="none"
        viewBox="0 0 30 32"
        {...props}
    >
        <Path
            stroke="#EBFF00"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M29.167 6H.833m25.555 4.167-.766 11.5c-.295 4.423-.442 6.635-1.884 7.983S20.078 31 15.645 31h-1.29c-4.433 0-6.652 0-8.093-1.35-1.442-1.348-1.59-3.56-1.884-7.983l-.766-11.5"
        />
        <Path
            stroke="#EBFF00"
            strokeWidth="1.5"
            d="M5.833 6h.184a3.33 3.33 0 0 0 3.05-2.2l.056-.172.162-.485c.138-.415.208-.621.3-.798a2.5 2.5 0 0 1 1.823-1.313c.195-.032.414-.032.85-.032h5.484c.436 0 .655 0 .85.032a2.5 2.5 0 0 1 1.823 1.313c.092.177.162.383.3.798l.162.485A3.33 3.33 0 0 0 24.167 6"
        />
    </Svg>
);
export default BinIcon;
