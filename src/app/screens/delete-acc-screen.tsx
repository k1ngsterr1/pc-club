import { TouchableOpacity, View, Alert } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { useNavigation } from "@react-navigation/native";
import { useLanguage } from 'src/context/LanguageContext';


export const DeleteAccScreen = () => {
    const navigation = useNavigation()
    const { i18n } = useLanguage()
    const handleWarn = () => {
        Alert.alert(
            `${i18n.t('warning')}`,
            `${i18n.t('warningMessage')}`,
            [
                { text: `${i18n.t('cancellation')}`, style: "cancel" },
                { text: `${i18n.t('deleteButton')}`, onPress: () => navigation.navigate('Start') },
            ]
        );
    };

    return (
        <Layout isTab isHeader isLogo>
            <Text weight="bold" className="text-light text-2xl mt-8">
                {i18n.t('delete')}
            </Text>
            <View className="flex-1 justify-center items-center mt-64">
                <Text className="text-center mb-4 text-white text-base">
                    {i18n.t('deleteMessage')}
                </Text>
                <TouchableOpacity
                    className="bg-[#FF5454] p-3 rounded-full"
                    onPress={handleWarn}
                >
                    <Text className="text-white">{i18n.t('delete')}</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    );
};
