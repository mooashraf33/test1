import { AdhkarCategory } from '@/constants/adhkar';

export function getTimeOfDay(): AdhkarCategory {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 21) return 'evening';
  return 'sleep';
}

export function getGreeting(name: string): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return `صباح الخير، ${name} 🌤️`;
  if (hour >= 12 && hour < 17) return `مساء الخير، ${name} ☀️`;
  if (hour >= 17 && hour < 21) return `مساء النور، ${name} 🌙`;
  return `تصبح على خير، ${name} 🌙`;
}

export function getTimeLabel(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'أذكار الصباح';
  if (hour >= 12 && hour < 21) return 'أذكار المساء';
  return 'أذكار النوم';
}