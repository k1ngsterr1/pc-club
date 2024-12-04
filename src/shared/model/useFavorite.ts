import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useFavorites = () => {
    const [favoriteClubs, setFavoriteClubs] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem("favoriteClubs");
                if (storedFavorites) {
                    setFavoriteClubs(JSON.parse(storedFavorites));
                }
            } catch (error) {
                console.error("Error loading favorites", error);
            }
        };
        loadFavorites();
    }, []);

    const saveFavorites = async (clubs) => {
        try {
            await AsyncStorage.setItem("favoriteClubs", JSON.stringify(clubs));
        } catch (error) {
            console.error("Error saving favorites", error);
        }
    };

    const toggleFavorite = (club) => {
        setFavoriteClubs((prevFavorites) => {
            const isFavorite = prevFavorites.some((fav) => fav.id === club.id);
            let updatedFavorites;
            if (isFavorite) {
                updatedFavorites = prevFavorites.filter((fav) => fav.id !== club.id);
            } else {
                updatedFavorites = [...prevFavorites, club];
            }
            saveFavorites(updatedFavorites);
            return updatedFavorites;
        });
    };

    const isFavorite = (club) => {
        return favoriteClubs.some((fav) => fav.id === club.id);
    };

    return {
        favoriteClubs,
        toggleFavorite,
        isFavorite,
    };
};
