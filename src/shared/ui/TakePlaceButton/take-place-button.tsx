import { BlurView } from "expo-blur";
import { View } from "react-native";
import Text from "../Text/text";
import MyTouchableOpacity from "../MyTouchableOpacity/my-touchable-opacity";

interface ITakePlacetButtonProps {
  number: number;
  taken: boolean;
  take: number[];
  handleTake: (index: number) => void;
  index: number;
}

export const TakePlacetButton = ({
  number,
  taken,
  take,
  index,
  handleTake,
}: ITakePlacetButtonProps) => {
  const isSelected = take.includes(index); // Check if this button is selected

  return (
    <MyTouchableOpacity disabled={taken} onPress={() => handleTake(index)}>
      <View
        style={{
          borderRadius: 8,
          overflow: "hidden",
          width: 65,
          height: 65,
          backgroundColor: taken
            ? "#300060"
            : isSelected
            ? "#EBFF00"
            : "#FFFFFF40",
        }}
      >
        <BlurView
          intensity={16}
          tint="light"
          className="h-full flex items-center justify-center"
        >
          <View className="rounded-[8px] flex items-center justify-center">
            <Text
              weight="medium"
              className={`${isSelected ? "text-dark" : "text-light"} text-2xl`}
            >
              {number}
            </Text>
          </View>
        </BlurView>
      </View>
    </MyTouchableOpacity>
  );
};
