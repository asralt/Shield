import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



const ProfileScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-light">
      <Text className="text-2xl font-bold text-accent mb-4">Profile Screen</Text>
      <TouchableOpacity
        className="bg-primary px-6 py-3 rounded-full"
        onPress={() => navigation.goBack()} 
      >
        <Text className="text-white font-semibold">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ProfileScreen;