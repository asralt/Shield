
import "react-native-reanimated";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";


const Tab = createBottomTabNavigator(); 
 export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={({ route }) => ({ // Use the route object to conditionally select icons
                // General styling for the tab bar
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                // 2. Define the Icon Renderer based on the current tab
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTab') {
                        // Select different icons based on focus state
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'ProfileTab') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // You can return any component here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    title: 'Home', // Tab label
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    title: 'Profile', // Tab label
                }}
            />
        </Tab.Navigator>
    );
}

