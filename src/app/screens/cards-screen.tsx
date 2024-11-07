import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { SettingsCard } from "@features/ui/SettingsCard/settings-card";
import CardIcon from "@shared/icons/card-icon";

const cardsContent = [
    {
        title: "Способ оплаты",
        icon: <CardIcon />,
        text: "Kaspi Bank Карта: 1234 1234 ****",
    },
];

export const CardsScreen = () => {
    return (
        <Layout isTab isHeader isLogo>
            <View className="flex flex-col mt-8">
                <Text weight="bold" className="text-light text-2xl mb-4">
                    Карты
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
