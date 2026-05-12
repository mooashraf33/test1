import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { theme } from '../constants/theme'; // تأكد إن المسار صح حسب مشروعك

export default function Home() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>قائمة الأذكار</Text>

      {/* كارت أذكار الصباح */}
      <Link href="/morning" asChild>
        <Pressable 
          style={({ pressed }) => [
            styles.card,
            { 
              opacity: pressed ? 0.8 : 1, 
              transform: [{ scale: pressed ? 0.97 : 1 }],
              // تغيير طفيف في لون الإطار عند الضغط لزيادة التفاعل
              borderColor: pressed ? theme.colors.light : 'rgba(158, 200, 185, 0.2)'
            }
          ]}
        >
          <View style={styles.cardContent}>
            <View style={styles.iconWrapper}>
              <Text style={styles.cardIcon}>☀️</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>أذكار الصباح</Text>
              <Text style={styles.cardSubtitle}>ابدأ يومك بنور الذكر</Text>
            </View>
          </View>
        </Pressable>
      </Link>

      {/* كارت أذكار المساء */}
      <Link href="/evening" asChild>
        <Pressable 
          style={({ pressed }) => [
            styles.card,
            { 
              backgroundColor: theme.colors.dark,
              opacity: pressed ? 0.8 : 1, 
              transform: [{ scale: pressed ? 0.97 : 1 }],
              borderColor: pressed ? theme.colors.light : 'rgba(158, 200, 185, 0.2)'
            }
          ]}
        >
          <View style={styles.cardContent}>
            <View style={styles.iconWrapper}>
              <Text style={styles.cardIcon}>🌙</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>أذكار المساء</Text>
              <Text style={styles.cardSubtitle}>طمأنينة لقلبك قبل النوم</Text>
            </View>
          </View>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkest, // اللون الغامق جداً للخلفية
  },
  content: {
    padding: theme.spacing.lg,
    paddingTop: 80, // مساحة علوية مريحة للعين
  },
  header: {
    color: theme.colors.white,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#1B4242', // لون الكارت الأساسي من الباليت
    padding: 20,
    borderRadius: 24, // زوايا ناعمة جداً (Smooth)
    marginBottom: 20,
    
    // الإطار الخفيف اللي طلبته
    borderWidth: 1.5,
    borderColor: 'rgba(158, 200, 185, 0.2)', 
    
    // التجسيم (الظلال)
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  cardContent: {
    flexDirection: 'row-reverse', // ترتيب عربي (أيقونة يمين، نص يسار)
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 55,
    height: 55,
    backgroundColor: 'rgba(92, 131, 116, 0.3)', // خلفية خفيفة للأيقونة
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 15, // مسافة بين النص والأيقونة
  },
  cardIcon: {
    fontSize: 28,
  },
  cardTitle: {
    color: theme.colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: theme.colors.light,
    fontSize: 14,
    marginTop: 4,
    opacity: 0.8,
  },
});