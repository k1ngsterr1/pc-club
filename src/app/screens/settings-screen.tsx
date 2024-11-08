import React from 'react';
import { View, Linking } from 'react-native';
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { SettingsCard } from "@features/ui/SettingsCard/settings-card";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useLanguage } from 'src/context/LanguageContext';

// icons
import CardIcon from "@shared/icons/card-icon";
import CityIcon from "@shared/icons/city-icon";
import LanguageIcon from "@shared/icons/language-icon";

const openLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  }
};

export const SettingsScreen = () => {
  const { i18n, changeLanguage } = useLanguage();

  const settingsContent = [
    {
      title: `${i18n.t('cards')}`,
      icon: <CardIcon />,
      text: "Kaspi Bank Карта: 1234 1234 ****",
    },
    {
      title: `${i18n.t('city')}`,
      icon: <CityIcon />,
      text: "Г.Алматы",
    },
  ];

  return (
    <Layout isTab isHeader isLogo>
      <View className="flex flex-col mt-8">
        <Text weight="bold" className="text-light text-2xl mb-4">
          {i18n.t('settings')}
        </Text>
        {settingsContent.map((item, index) => (
          <View className="flex flex-col mb-4" key={index}>
            <SettingsCard
              title={item.title}
              icon={item.icon}
              text={item.text}
            />
          </View>
        ))}
        <View className="flex flex-row gap-4 mt-2">
          <MyTouchableOpacity onPress={() => changeLanguage('en')}>
            <Text className="text-white">English</Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity onPress={() => changeLanguage('ru')}>
            <Text className="text-white">Русский</Text>
          </MyTouchableOpacity>
          <MyTouchableOpacity onPress={() => changeLanguage('kz')}>
            <Text className="text-white">Қазақша</Text>
          </MyTouchableOpacity>
        </View>

        <MyTouchableOpacity onPress={() => openLink("https://sparkstudio.kz")}>
          <View className="flex items-center mt-8">
            <Text className="text-[#FFFFFF40]">Powered By</Text>
            <Text className="text-main">Spark Studio</Text>
          </View>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
