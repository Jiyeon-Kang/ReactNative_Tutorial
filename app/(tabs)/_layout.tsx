import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
      <Tabs
          screenOptions={{
              tabBarActiveTintColor: '#ffd33d',
              headerStyle: {
                  backgroundColor: '#25292e',
              },
              headerShadowVisible: false,
              headerTintColor: '#fff',
              tabBarStyle: {
                  backgroundColor: '#25292e',
              },
          }}
      >
        {/*
        [What is Stack?]
        A stack navigator is the foundation for navigating between different screens in an app.
        On Android, a stacked route animates on top of the current screen.
        On iOS, a stacked route animates from the right.
        Expo Router provides a Stack component to create a navigation stack to add new routes.
        */}
        <Tabs.Screen
            name="index"
            options={{
                title:'Home',
                tabBarIcon:({color,focused})=>(
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
        }}
        />
          <Tabs.Screen
              name="about"
              options={{
                  title: 'About',
                  tabBarIcon: ({ color, focused }) => (
                      <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
                  ),
              }}
          />
      </Tabs>
  );
}
