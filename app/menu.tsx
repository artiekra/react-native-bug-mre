import React from "react";
import { View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Main Menu' }} />

      <View className="flex-1 bg-background justify-center items-center p-4">
        <Button
          className="w-full max-w-sm flex-row items-center justify-center gap-2"
          onPress={() => router.push("/play")}
        >
          <Text className="font-semibold text-primary-foreground">Play</Text>
        </Button>
      </View>
    </>
  );
}
