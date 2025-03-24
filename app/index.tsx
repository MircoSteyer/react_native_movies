import { Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

export default function Index() {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme("dark"); // or "light" or fetch from storage
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-background-light dark:bg-background-dark">
      <Text className="text-text-light dark:text-text-dark text-lg">
        Hello from NativeWind dark mode!
        {colorScheme}
      </Text>
    </View>
  );
}
