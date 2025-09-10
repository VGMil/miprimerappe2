import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
    // headerStyle:{
    //   backgroundColor:"#7a5447",
    // },
    headerShown:false,
    statusBarStyle: 'dark',
    statusBarAnimation:"fade"
  }}
  />;
}
