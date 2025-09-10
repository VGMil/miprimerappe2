import { SplashScreen, Stack } from "expo-router";
// Previene que la pantalla de bienvenida se oculte automáticamente
SplashScreen.preventAutoHideAsync();

// Oculta la pantalla de bienvenida después de 1 segundo (1000 milisegundos)
setTimeout(() => {
  SplashScreen.hideAsync();
}, 1000);

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
