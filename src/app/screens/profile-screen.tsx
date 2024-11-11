import { View, TouchableOpacity } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { useNavigation } from "@react-navigation/native";
import { SettingsCard } from "@features/ui/SettingsCard/settings-card";
import { useLanguage } from 'src/context/LanguageContext';

// icons
import CardIcon from "@shared/icons/card-icon";
import YellowClockIcon from "@shared/icons/yellow-clock-icon";
import LogOutIcon from "@shared/icons/logout-icon";
import BinIcon from "@shared/icons/bin-icon";


export const ProfileScreen = () => {
    const { i18n } = useLanguage();
    const navigation = useNavigation();

    const settingsContent = [
        {
            title: `${i18n.t('payment')}`,
            icon: <CardIcon />,
            link: "CardsScreen"
        },
        {
            title: `${i18n.t('history')}`,
            icon: <YellowClockIcon />,
            link: 'HistoryScreen'
        },
        {
            title: `${i18n.t('delete')}`,
            icon: <BinIcon />,
            link: 'DeleteAccScreen'
        },
    ];

    return (
        <Layout isTab isHeader isLogo>
            <View className="flex flex-col mt-8">
                <Text weight="bold" className="text-light text-2xl mb-4">
                    {i18n.t('profile')}
                </Text>
                {settingsContent.map((item, index) => {
                    return (
                        <View className=" flex flex-col mb-4" key={index}>
                            <SettingsCard
                                title={item.title}
                                icon={item.icon}
                                text={item.text}
                                onPress={item.link}
                            />
                        </View>
                    );
                })}
                <TouchableOpacity onPress={() => navigation.navigate('Start')}>
                    <View className="flex flex-row items-center mt-8">
                        <LogOutIcon />
                        <Text className="text-light ml-2 text-base">{i18n.t('logOut')}</Text>
                    </View>


                </TouchableOpacity>
            </View>
        </Layout>
    );
};
