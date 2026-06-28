import React from "react";
import { View, Text, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Welcome' }} />

      <View className="flex-1 bg-background justify-center items-center p-4">
        <Text className="text-4xl font-bold mb-8 text-foreground">Welcome!</Text>
        <Pressable
          className="w-full max-w-sm flex-row items-center justify-center gap-2 bg-primary p-3 rounded-md"
          onPress={() => router.push("/menu")}
        >
          <Text className="font-semibold text-primary-foreground">Continue</Text>
        </Pressable>
      </View>
    </>
  );
}
