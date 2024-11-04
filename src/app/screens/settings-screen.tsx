import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";

// icons
import CardIcon from "@shared/icons/card-icon";
import CityIcon from "@shared/icons/city-icon";
import LanguageIcon from "@shared/icons/language-icon";
import { SettingsCard } from "@features/ui/SettingsCard/settings-card";

const settingsContent = [
  {
    title: "Способ оплаты",
    icon: <CardIcon />,
    text: "Kaspi Bank Карта: 1234 1234 ****",
  },
  {
    title: "Ваш Город",
    icon: <CityIcon />,
    text: "Г.Алматы",
  },
  {
    title: "Язык: Русский",
    icon: <LanguageIcon />,
  },
];

export const SettingsScreen = () => {
  return (
    <Layout isTab isHeader isLogo>
      <View className="flex flex-col mt-8">
        <Text weight="bold" className="text-light text-2xl mb-4">
          Настройки
        </Text>
        {settingsContent.map((item, index) => {
          return (
            <View className=" flex flex-col mb-4">
              <SettingsCard
                key={index}
                title={item.title}
                icon={item.icon}
                text={item.text}
              />
            </View>
          );
        })}
        <View className="flex items-center mt-8">
          <Text className="text-[#FFFFFF40]">Powered By</Text>
          <Text className="text-main">Spark Studio</Text>
        </View>
      </View>
    </Layout>
  );
};
