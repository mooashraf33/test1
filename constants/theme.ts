// export const Colors = {
//   primary: '#1D9E75',
//   primaryLight: '#E1F5EE',
//   primaryMid: '#5DCAA5',
//   primaryDark: '#0F6E56',

//   background: {
//     light: '#FAFAF8',
//     dark: '#0E0E0E',
//   },
//   surface: {
//     light: '#F0EEE8',
//     dark: '#1A1A1A',
//   },
//   surfaceCard: {
//     light: '#FFFFFF',
//     dark: '#222222',
//   },
//   text: {
//     primary: { light: '#1A1A1A', dark: '#F0EEE8' },
//     secondary: { light: '#6B6B6B', dark: '#9A9A9A' },
//     inverse: { light: '#FFFFFF', dark: '#0E0E0E' },
//   },
//   border: {
//     light: '#E5E3DC',
//     dark: '#2A2A2A',
//   },

//   success: '#1D9E75',
//   warning: '#EF9F27',
//   danger: '#E24B4A',

//   streakFilled: '#1D9E75',
//   streakEmpty: '#E1F5EE',
// };

// export const Spacing = {
//   xs: 4,
//   sm: 8,
//   md: 16,
//   lg: 24,
//   xl: 32,
//   xxl: 48,
// };

// export const Radius = {
//   sm: 8,
//   md: 12,
//   lg: 16,
//   xl: 24,
//   full: 999,
// };

// export const FontSize = {
//   xs: 11,
//   sm: 13,
//   md: 15,
//   base: 17,
//   lg: 20,
//   xl: 24,
//   xxl: 32,
// };

// export const FontWeight = {
//   regular: '400' as const,
//   medium: '500' as const,
//   semibold: '600' as const,
//   bold: '700' as const,
// };

// constants/theme.ts

export const theme = {
  colors: {
    darkest: '#092635',    // الكحلي الغامق جداً (الخلفية الأساسية)
    dark: '#1B4242',       // الأخضر الغامق (للكروت)
    medium: '#5C8374',     // الأخضر المتوسط (للأزرار أو الرموز)
    light: '#9EC8B9',      // الأخضر الفاتح (للنصوص الفرعية)
    text: '#FFFFFF',       // أبيض صريح للنصوص
    white: '#FFFFFF',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    lg: 16,
    xl: 24,
  }
};