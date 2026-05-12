import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export default function EveningPage() {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.darkest }]}>
      <Text style={{ color: theme.colors.white, fontSize: 20 }}>هنا مكان أذكار المساء 🌙</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});