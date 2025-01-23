import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack>
        {/*
        [What is Stack?]
        A stack navigator is the foundation for navigating between different screens in an app.
        On Android, a stacked route animates on top of the current screen.
        On iOS, a stacked route animates from the right.
        Expo Router provides a Stack component to create a navigation stack to add new routes.
        */}
        <Stack.Screen name={"index"} options={{title:'Home'}}/>
        <Stack.Screen name={"about"} options={{title:'About'}}/>
      </Stack>
  );
}
