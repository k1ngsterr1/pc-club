import { useMemo, useEffect, useState } from "react";
import * as Location from "expo-location";

const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;
    const R = 6371; // Радиус Земли в км
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export const useClosestClub = (clubs) => {
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === "granted") {
                const location = await Location.getCurrentPositionAsync({});
                setUserLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
            }
        })();
    }, []);

    const sortedClubs = useMemo(() => {
        if (!userLocation || clubs.length === 0) return [];
        return clubs
            .map((club) => ({
                ...club,
                distance: getDistance(
                    userLocation.latitude,
                    userLocation.longitude,
                    club.latitude,
                    club.longitude
                ),
            }))
            .sort((a, b) => a.distance - b.distance);
    }, [userLocation, clubs]);

    const closestClub = sortedClubs.length > 0 ? sortedClubs[0] : null;

    return { closestClub, sortedClubs, userLocation };
};
