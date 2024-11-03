import { View, TextInput } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import { ConfirmInput } from "@shared/ui/ConfirmInput/ui/confirm-input";
import { useRef } from "react";
import { useActiveItem } from "@shared/model/useInputStore";

const inputs = [1, 2, 3, 4];

export const PhoneConfirmationScreen = () => {
  const { active, setActive } = useActiveItem();

  // Create an array of refs for each input
  const inputRefs = inputs.map(() => useRef<TextInput>(null));

  const handleActive = (index: number) => {
    setActive(index);
  };

  const handleNextInput = (index: number) => {
    if (index < inputs.length - 1) {
      // Focus the next input if it exists
      inputRefs[index + 1].current?.focus();
    }
  };

  const navigation = useNavigation();

  return (
    <Layout>
      <View className="flex items-center flex-col justify-between mt-36">
        <View className="flex items-center flex-col mb-4">
          <Text weight="bold" className="text-light text-3xl">
            Confirm Your Phone
          </Text>
        </View>
        <View className="flex flex-row mb-32 mt-12 items-center">
          {inputs.map((input, index) => (
            <View key={input} className={`${index !== 0 ? "ml-4" : ""}`}>
              <ConfirmInput
                index={input}
                active={active}
                handleActive={handleActive}
                inputRef={inputRefs[index]}
                onNext={() => handleNextInput(index)}
              />
            </View>
          ))}
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("PhoneConfirmation" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center"
        >
          <Text weight="bold" className="text-dark text-lg">
            Confirm
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
