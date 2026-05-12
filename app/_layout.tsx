import { Stack } from 'expo-router';
import { theme } from '../constants/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.darkest,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // عشان نشيل الخط الفاصل بتاع الهيدر
        headerShadowVisible: false, 
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: 'الرئيسية' }} 
      />
      <Stack.Screen 
        name="morning" 
        options={{ title: 'أذكار الصباح' }} 
      />
      <Stack.Screen 
        name="evening" 
        options={{ title: 'أذكار المساء' }} 
      />
    </Stack>
  );
}