import { useColorScheme as useRNColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';

export function useColorScheme() {
  const scheme = useRNColorScheme();
  const isDark = scheme === 'dark';

  return {
    isDark,
    scheme: scheme ?? 'light',
    colors: {
      primary: Colors.primary,
      primaryLight: Colors.primaryLight,
      primaryDark: Colors.primaryDark,
      background: isDark ? Colors.background.dark : Colors.background.light,
      surface: isDark ? Colors.surface.dark : Colors.surface.light,
      surfaceCard: isDark ? Colors.surfaceCard.dark : Colors.surfaceCard.light,
      textPrimary: isDark ? Colors.text.primary.dark : Colors.text.primary.light,
      textSecondary: isDark ? Colors.text.secondary.dark : Colors.text.secondary.light,
      textInverse: isDark ? Colors.text.inverse.dark : Colors.text.inverse.light,
      border: isDark ? Colors.border.dark : Colors.border.light,
      streakFilled: Colors.streakFilled,
      streakEmpty: isDark ? '#1A3D2E' : Colors.streakEmpty,
    },
  };
}