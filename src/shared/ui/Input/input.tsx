import React, { useRef } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";

interface IInputProps extends TextInputProps {
  labelText: string;
}

const Input: React.FC<IInputProps> = ({ labelText, ...props }) => {
  const labelRef = useRef(null);

  const onFocus = () => {
    labelRef.current?.transitionTo({
      top: -20,
      fontSize: 12,
      color: "#FFFFFF66",
    });
  };

  const onBlur = (e: any) => {
    if (!e.nativeEvent.text) {
      labelRef.current?.transitionTo({
        top: 0,
        fontSize: 16,
        color: "#FFFFFF66",
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          width: "75%",
          position: "relative",
          borderBottomWidth: 1,
          borderColor: "#FFFFFF66",
          alignItems: "center",
          paddingVertical: 4,
        }}
      >
        <Animatable.Text
          ref={labelRef}
          style={{
            position: "absolute",
            alignSelf: "center",
            top: 0,
            fontSize: 16,
            color: "#FFFFFF66",
          }}
        >
          {labelText}
        </Animatable.Text>
        <TextInput
          {...props}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 16,
          }}
          className="text-main"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;
