import { BlurView } from "expo-blur";
import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLanguage } from 'src/context/LanguageContext';


interface IAccountInfoProps {
  account: string;
  phoneNumber: string;
  computer: string;
  package: string;
  marginTop?: number;
}

const AccountInfo: React.FC<IAccountInfoProps> = ({
  account,
  phoneNumber,
  computer,
  package: pkg,
  marginTop = 0,
}) => {
  const { i18n } = useLanguage()
  return (
    <View style={{ marginTop }} className="rounded-lg overflow-hidden">
      <BlurView intensity={30} tint="light" className="rounded-lg px-4 py-6">
        <Text className="text-gray text-lg">{i18n.t('account')}</Text>
        <Text className="text-main text-xl font-semibold">{phoneNumber}</Text>
        <Text className="text-gray text-lg mt-4">{i18n.t('computer')}</Text>
        <Text className="text-main text-lg font-medium">{computer}</Text>
        <Text className="text-gray text-lg mt-4">{i18n.t('package')}</Text>
        <Text className="text-main text-lg font-medium">{pkg}</Text>
      </BlurView>
    </View>
  );
};

export default AccountInfo;
