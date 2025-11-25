import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-primary mb-4">Home Screen</Text>
      <TouchableOpacity
        className="bg-secondary px-6 py-3 rounded-full"
        onPress={() => navigation.navigate("ProfileTab")}
      >
        <Text className="text-white font-semibold">Go to Profile Tab</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
