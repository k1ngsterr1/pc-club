import React, { useState } from "react";
import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useLanguage } from "src/context/LanguageContext";
import { BlurView } from "expo-blur";

import LanguageIcon from "@shared/icons/language-icon";

const languages = ["en", "ru", "kz"];
const languageNames = {
  en: "English",
  ru: "Русский",
  kz: "Қазақша",
};

export const LanguageSwitcher = () => {
  const { language, changeLanguage, i18n } = useLanguage();
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(
    languages.indexOf(language)
  );

  const handleLanguageChange = () => {
    const nextIndex = (currentLanguageIndex + 1) % languages.length;

    changeLanguage();
    setCurrentLanguageIndex(nextIndex);
  };

  return (
    <MyTouchableOpacity onPress={handleLanguageChange}>
      <View
        style={{
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <BlurView intensity={16} tint="light">
          <View className="flex flex-row items-center gap-x-4 px-4 py-4">
            <LanguageIcon />
            <Text className="text-white text-base">
              {i18n.t("language")}:
              {languageNames[language as "en" | "ru" | "kz"]}
            </Text>
          </View>
        </BlurView>
      </View>
    </MyTouchableOpacity>
  );
};
