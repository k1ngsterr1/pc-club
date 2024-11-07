import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";

const cardsContent = [
    {
        title: "Платежные карты",
    },
];

export const DeleteAccScreen = () => {
    return (
        <Layout isTab isHeader isLogo>
            <View className="flex flex-col mt-8">
                <Text weight="bold" className="text-light text-2xl mb-4">
                    Удалить Аккаунт
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
