import { View, TextInput } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import { ConfirmInput } from "@shared/ui/ConfirmInput/ui/confirm-input";
import { useRef, useEffect } from "react";
import { useActiveItem } from "@shared/model/useActiveItemStore";
import { useLanguage } from "src/context/LanguageContext";

const inputs = [1, 2, 3, 4];

export const PhoneConfirmationScreen = () => {
  const { active, setActive } = useActiveItem();

  const inputRefs = inputs.map(() => useRef<TextInput>(null));

  const handleActive = (index: number | string) => {
    setActive(index);
  };

  const handleNextInput = (index: number) => {
    if (index < inputs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const navigation = useNavigation();
  const { i18n } = useLanguage();

  return (
    <Layout isScrollable={false}>
      <View className="flex items-center flex-col justify-between h-[50%] mt-36">
        <View className="flex items-center flex-col mb-4">
          <Text weight="bold" className="text-light text-3xl text-center">
            {i18n.t("confirmMessage")}
          </Text>
          <View className="flex flex-row mb-32 mt-12 items-center">
            {inputs.map((input, index) => (
              <View key={input} className={`${index !== 0 ? "ml-4" : ""}`}>
                <ConfirmInput
                  index={index}
                  active={active}
                  handleActive={handleActive}
                  inputRef={inputRefs[index]}
                  onNext={() => handleNextInput(index)}
                  handleNextInput={handleNextInput}
                />
              </View>
            ))}
          </View>
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("Home" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center"
        >
          <Text weight="bold" className="text-dark text-lg">
            {i18n.t("confirmButton")}
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
