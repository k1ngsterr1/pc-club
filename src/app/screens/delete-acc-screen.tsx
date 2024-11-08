import { TouchableOpacity, View, Alert } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { useNavigation } from "@react-navigation/native";

export const DeleteAccScreen = () => {
    const navigation = useNavigation()
    const handleWarn = () => {
        Alert.alert(
            "Предупреждение",
            "Ваш аккаунт будет удален безвозвратно. Вы уверены?",
            [
                { text: "Отмена", style: "cancel" },
                { text: "Удалить", onPress: () => navigation.navigate('Start') },
            ]
        );
    };

    return (
        <Layout isTab isHeader isLogo>
            <Text weight="bold" className="text-light text-2xl mt-8">
                Удалить Аккаунт
            </Text>
            <View className="flex-1 justify-center items-center mt-64">
                <Text className="text-center mb-4 text-white text-base">
                    Ваш аккаунт будет удален безвозвратно
                </Text>
                <TouchableOpacity
                    className="bg-[#FF5454] p-3 rounded-full"
                    onPress={handleWarn}
                >
                    <Text className="text-white">Удалить аккаунт</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    );
};
