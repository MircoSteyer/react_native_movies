import { Stack } from "expo-router";
import "./globals.css";
import { useColorScheme } from "nativewind";
import { View } from "react-native";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  console.log("colorScheme", colorScheme);
  
  return (
    <View className={colorScheme === "dark" ? "dark flex-1" : "flex-1"}>
      <Stack />
    </View>
  );
}
