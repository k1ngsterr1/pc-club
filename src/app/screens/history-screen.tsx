import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { useLanguage } from 'src/context/LanguageContext';

export const HistoryScreen = () => {
    const { i18n } = useLanguage()

    const cardsContent = [
        {
            title: `${i18n.t('cards')}`,
        },
    ];

    return (
        <Layout isTab isHeader isLogo>
            <View className="flex flex-col mt-8">
                <Text weight="bold" className="text-light text-2xl mb-4">
                    {i18n.t('history')}
                </Text>
                {cardsContent.map((item, index) => {
                    return (
                        <View className="" key={index}>

                        </View>
                    );
                })}
            </View>
        </Layout>
    );
};
