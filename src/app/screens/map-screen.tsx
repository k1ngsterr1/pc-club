import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RoundedButton } from "@shared/ui/BackButton/rounded-button";
import { useNavigation } from "@react-navigation/native";
import BackArrowIcon from "@shared/icons/back-arrow-icon";
import * as Location from 'expo-location';

export const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [heading, setHeading] = useState(0);
    const navigation = useNavigation();

    const markers = [
        { latitude: 43.250823, longitude: 76.940522, title: 'Точка 1' },
        { latitude: 43.26260396935966, longitude: 76.93970105516743, title: 'Точка 2' },
        { latitude: 43.2560, longitude: 76.9286, title: 'Точка 3' },
    ];

    useEffect(() => {
        const requestLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }


            const locationData = await Location.getCurrentPositionAsync({});
            setLocation(locationData.coords);

            Location.watchPositionAsync(
                { accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 1 },
                (newLocation) => {
                    setLocation(newLocation.coords);
                }
            );

            Location.watchHeadingAsync((newHeading) => {
                setHeading(newHeading.trueHeading);
            });
        };

        requestLocationPermission();
    }, []);

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
                showsUserLocation={true}
                followsUserLocation={false
                }
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        title={marker.title}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('BookScreen')}>
                            <Image source={require('../../../assets/images/MapPoint.png')} />
                        </TouchableOpacity>
                    </Marker>
                ))}

                {/* {location && (
                    <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        rotation={heading}
                    anchor={{ x: 0.5, y: 0.5 }}
                    >
                    </Marker>
                )} */}
            </MapView>

            <View style={styles.backButton}>
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
    backButton: {
        position: 'absolute',
        top: 48,
        left: 16,
    },
});

export default MapScreen;
