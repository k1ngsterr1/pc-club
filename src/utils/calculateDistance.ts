import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

// Координаты клубов
const clubs = [
    { latitude: 43.250823, longitude: 76.940522, title: 'Клуб 1' },
    { latitude: 43.26260396935966, longitude: 76.93970105516743, title: 'Клуб 2' },
    { latitude: 43.2560, longitude: 76.9286, title: 'Клуб 3' },
];

// Функция для вычисления расстояния между двумя точками в километрах
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Радиус Земли в километрах
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Расстояние в километрах

    return distance;
};

// Кастомный хук для нахождения ближайшего клуба
const useClosestClub = () => {
    const [location, setLocation] = useState(null);
    const [closestClub, setClosestClub] = useState(null);
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        const requestLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission denied');
                return;
            }

            const locationData = await Location.getCurrentPositionAsync({});
            setLocation(locationData.coords);
        };

        requestLocationPermission();
    }, []);

    useEffect(() => {
        if (location) {
            let closest = null;
            let minDistance = Infinity;

            clubs.forEach((club) => {
                const distance = calculateDistance(
                    location.latitude,
                    location.longitude,
                    club.latitude,
                    club.longitude
                );
                if (distance < minDistance) {
                    minDistance = distance;
                    closest = club;
                }
            });

            setClosestClub(closest);
            setDistance(minDistance);
        }
    }, [location]);

    return { closestClub, distance };
};

export default useClosestClub;
