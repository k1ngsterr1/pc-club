import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Animated,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { useActiveItem } from "@shared/model/useInputStore";
import { useNotificationPopupStore } from "@entities/notification/model/use-notification-popup";
import { NotificationTab } from "@entities/ui/NotificationTab/notifcation-tab";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
};

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "New Message",
    message: "You have a new message from John",
    time: "2m ago",
  },
  {
    id: "2",
    title: "Friend Request",
    message: "Sarah sent you a friend request",
    time: "15m ago",
  },
  {
    id: "3",
    title: "Photo Tagged",
    message: "You were tagged in a new photo",
    time: "1h ago",
  },
  {
    id: "4",
    title: "Event Reminder",
    message: "Your event starts in 1 hour",
    time: "2h ago",
  },
  {
    id: "5",
    title: "App Update",
    message: "A new version of the app is available",
    time: "5h ago",
  },
];

export const NotificationPopup = () => {
  const { isVisible, hidePopup } = useNotificationPopupStore();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [refreshing, setRefreshing] = useState(false);
  const translateY = useRef(
    new Animated.Value(-Dimensions.get("window").height)
  ).current;

  useEffect(() => {
    if (isVisible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 5,
        friction: 7,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: -Dimensions.get("window").height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate fetching new notifications
    setTimeout(() => {
      const newNotification = {
        id: String(Date.now()),
        title: "New Notification",
        message: "This is a new notification",
        time: "Just now",
      };
      setNotifications((prevNotifications) => [
        newNotification,
        ...prevNotifications,
      ]);
      setRefreshing(false);
    }, 2000);
  }, []);

  const removeNotification = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <Animated.View
      className="absolute  top-0 left-0 right-0 bottom-0 bg-gray-100 z-50"
      style={{ transform: [{ translateY }] }}
    >
      <BlurView
        intensity={80}
        tint="light"
        className="absolute top-0 left-0 right-0 h-full  z-100"
      >
        <View className="flex-row justify-between items-center px-4 pt-8 mt-8">
          <Text className="text-2xl text-white font-bold text-gray-800">
            Notifications
          </Text>
          <TouchableOpacity onPress={hidePopup}>
            <Text className="text-main">Close</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          className="flex-1 pt-20 px-4"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {notifications.map((notification) => (
            <NotificationTab
              key={notification.id}
              notification={notification}
              onRemove={removeNotification}
            />
          ))}
          {notifications.length === 0 && (
            <View className="flex-1 justify-center items-center mt-20">
              <Text className="text-gray-500 text-lg">No notifications</Text>
            </View>
          )}
        </ScrollView>
      </BlurView>
    </Animated.View>
  );
};
