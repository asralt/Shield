import "react-native-reanimated";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "@/components/TabNavigation";






export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}