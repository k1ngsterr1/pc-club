import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { SettingsCard } from "@features/ui/SettingsCard/settings-card";
import CardIcon from "@shared/icons/card-icon";
import { useLanguage } from 'src/context/LanguageContext';

export const CardsScreen = () => {
    const { i18n } = useLanguage()

    const cardsContent = [
        {
            title: `${i18n.t('cards')}`,
            icon: <CardIcon />,
            text: "Kaspi Bank Карта: 1234 1234 ****",
        },
    ];

    return (
        <Layout isTab isHeader isLogo>
            <View className="flex flex-col mt-8">
                <Text weight="bold" className="text-light text-2xl mb-4">
                    {i18n.t('cards')}
                </Text>
                {cardsContent.map((item, index) => {
                    return (
                        <View className="" key={index}>
                            <SettingsCard
                                title={item.title}
                                icon={item.icon}
                                text={item.text}
                            />
                        </View>
                    );
                })}
            </View>
        </Layout>
    );
};
