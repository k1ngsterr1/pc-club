import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Image } from 'react-native';
import { RoundedButton } from "@shared/ui/BackButton/rounded-button";
import { useNavigation } from "@react-navigation/native";
import BackArrowIcon from "@shared/icons/back-arrow-icon";

export const MapScreen = () => {
    const markers = [
        { latitude: 43.250823, longitude: 76.940522, title: 'Точка 1' },
        { latitude: 43.26260396935966, longitude: 76.93970105516743, title: 'Точка 2' },
        { latitude: 43.2560, longitude: 76.9286, title: 'Точка 3' },
    ];
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 43.2560,
                    longitude: 76.9286,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        title={marker.title}>
                        <Image source={require('../../../assets/images/MapPoint.png')} />
                    </Marker>

                ))}
            </MapView>
            <View className="mt-12 ml-4 w-11">
                <RoundedButton
                    icon={<BackArrowIcon />}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

