import React from "react";
import { View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Welcome' }} />

      <View className="flex-1 bg-background justify-center items-center p-4">
        <Text className="text-4xl font-bold mb-8 text-foreground">Welcome!</Text>
        <Button
          className="w-full max-w-sm flex-row items-center justify-center gap-2"
          onPress={() => router.push("/menu")}
        >
          <Text className="font-semibold text-primary-foreground">Continue</Text>
        </Button>
      </View>
    </>
  );
}
