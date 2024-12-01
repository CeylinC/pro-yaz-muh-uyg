import { Image, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PercentChart from '@/components/Charts/PercentChart';
import CountChart from '@/components/Charts/CountChart';
import { useThemeColor } from '@/hooks/useThemeColor';
import { rules } from '@/constants/rules';
import { useEffect, useState } from 'react';
import { weekdays } from '@/constants/weekdays';
import Badge from '@/components/Badge';

type HomeScreenProps = {
  lightColor?: string;
  darkColor?: string;
};

export default function HomeScreen({ lightColor, darkColor }: HomeScreenProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const [rule, setRule] = useState(rules[0]);

  function randomWrite() {
    const randIndex = Math.floor(Math.random() * rules.length);
    setRule(rules[randIndex]);
  }

  useEffect(() => {
    setInterval(randomWrite, 30000);
  }, []);

  return (
    <ThemedView contentContainerStyle={styles.titleContainer}>
      <StatusBar style="auto" backgroundColor={backgroundColor}/>
      <ThemedText type="title">X Yolu</ThemedText>
      <ThemedText type='subtitle' style={styles.subtitle}>{rule}</ThemedText>
      <ThemedView contentContainerStyle={styles.buttonContainer}>
        {weekdays.map((weekday, i) => {
          return (
            <Badge text={weekday} onPress={() => console.log(weekday)}/>
          );
        })}
      </ThemedView>
      <PercentChart />
      <CountChart />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 8
  },
  subtitle: {
    textAlign: 'center',
    height: 48,
  }
});