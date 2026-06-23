import React from "react";
import { View, Pressable, Text } from "react-native";
import { Stack, useRouter, useFocusEffect } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";

export default function PlayScreen() {
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      return () => {
        ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP,
        );
      };
    }, []),
  );

  return (
    <>
      <Stack.Screen options={{ headerShown: false, animation: "none" }} />
      <View className="flex-1 flex-row bg-background items-center justify-center gap-4">
        <Pressable
          onPress={() => router.back()}
          className="rounded-md bg-muted p-4"
        >
          <Text className="text-foreground">Go Back</Text>
        </Pressable>
        <Text className="text-xl text-muted-foreground font-semibold">
          Placeholder
        </Text>
      </View>
    </>
  );
}
