import React from "react";
import { View, Text, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Main Menu' }} />

      <View className="flex-1 bg-background justify-center items-center p-4">
        <Pressable
          className="w-full max-w-sm flex-row items-center justify-center gap-2 bg-primary p-3 rounded-md"
          onPress={() => router.push("/play")}
        >
          <Text className="font-semibold text-primary-foreground">Play</Text>
        </Pressable>
      </View>
    </>
  );
}
