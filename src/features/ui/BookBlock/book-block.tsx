import { BlurView } from "expo-blur";
import { Alert, Vibration, View } from "react-native";
import Text from "@shared/ui/Text/text";
import { TabSwitcher } from "@shared/ui/TabSwitcher/tab-switcher";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { TakePlacetButton } from "@shared/ui/TakePlaceButton/take-place-button";
import { useTakePlaceStore } from "@entities/takeplace/model/useTakePlaceStore";
import { useSelectCategoryStore } from "@entities/categories/model/use-select-category-store";
import * as Haptics from 'expo-haptics';

const typesPlace = [
  { text: "Свободно", color: "bg-[#FFFFFF40]" },
  { text: "Занято", color: "bg-[#300060]" },
  { text: "Выбрано", color: "bg-[#EBFF00]" },
];

const takenPlacesContent = [
  { number: 1, taken: false },
  { number: 2, taken: true },
  { number: 3, taken: false },
  { number: 4, taken: false },
  { number: 5, taken: false },
  { number: 6, taken: false },
  { number: 7, taken: false },
  { number: 8, taken: false },
  { number: 9, taken: false },
  { number: 10, taken: false },
  { number: 11, taken: true },
  { number: 12, taken: false },
  { number: 13, taken: false },
  { number: 14, taken: true },
  { number: 15, taken: false },
  { number: 16, taken: false },
];

export const BookBlock = () => {
  const { take, isTake } = useTakePlaceStore();
  const { showPopup, selected } = useSelectCategoryStore();

  const handleTakePlace = (index: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    if (!isTake(index)) {
      Alert.alert("Ошибка", "Вы не можете забронировать более 5 мест.");

    }
  };

  return (
    <View
      className="w-full"
      style={{
        borderRadius: 32,
        overflow: "hidden",
      }}
    >
      <BlurView intensity={16} tint="light">
        <View className="w-full items-center flex py-5 px-8">
          <TabSwitcher tabs={["Посадка", "О залах"]} />
          <View className=" flex flex-row justify-between w-full mt-8">
            {typesPlace.map((type, index) => {
              return (
                <View className="flex flex-row items-center gap-2" key={index}>
                  <View className={`${type.color} rounded-full w-4 h-4`}></View>
                  <Text weight="medium" className="text-light">
                    {type.text}
                  </Text>
                </View>
              );
            })}
          </View>
          <MyTouchableOpacity
            onPress={() => showPopup()}
            className="bg-main rounded-[32px] w-full h-10 mt-8 flex items-center justify-center"
          >
            <Text weight="medium" className="text-dark text-base">
              {selected}
            </Text>
          </MyTouchableOpacity>
          <View className="flex flex-row flex-wrap justify-between items-center mt-4">
            {takenPlacesContent.map((place, index) => (
              <View key={index} className="w-1/4 p-1">
                <TakePlacetButton
                  number={place.number}
                  take={take}
                  taken={place.taken}
                  index={index}
                  handleTake={handleTakePlace}
                />
              </View>
            ))}
          </View>
        </View>
      </BlurView>
    </View>
  );
};
