import { BlurView } from "expo-blur";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
};

type NotificationTabProps = {
  notification: Notification;
  onRemove: (id: string) => void;
};

export const NotificationTab: React.FC<NotificationTabProps> = ({
  notification,
  onRemove,
}) => {
  return (
    <BlurView
      intensity={80}
      tint="light"
      className="rounded-lg overflow-hidden mb-4"
    >
      <View className="p-4">
        <View className="flex-row justify-between items-start">
          <Text className="text-lg font-semibold text-gray-800">
            {notification.title}
          </Text>
          <TouchableOpacity onPress={() => onRemove(notification.id)}>
            <Text className="text-gray-500">X</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-gray-600 mt-1">{notification.message}</Text>
        <Text className="text-gray-400 text-sm mt-2">{notification.time}</Text>
      </View>
    </BlurView>
  );
};
