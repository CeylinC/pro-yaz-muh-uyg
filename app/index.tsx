import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PercentChart from '@/components/Charts/PercentChart';
import CountChart from '@/components/Charts/CountChart';
import { useThemeColor } from '@/hooks/useThemeColor';
import { rules } from '@/constants/rules';
import { useEffect, useState } from 'react';
import { weekdays } from '@/constants/weekdays';
import { apiUrl } from '@/constants/apikey';
import Badge from '@/components/Badge';
import { TrafikVerisi } from '@/models/TrafikVerisi';
import { IData } from '@/models/IData';

type HomeScreenProps = {
  lightColor?: string;
  darkColor?: string;
};

export default function HomeScreen({ lightColor, darkColor }: HomeScreenProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const [rule, setRule] = useState(rules[0]);
  const [data, setData] = useState<TrafikVerisi>();
  const [percentData, setPercentData] = useState<IData[] | null>(null);
  const [countData, setCountData] = useState<IData[] | null>(null);
  const [selectedDay, setSelectedDay] = useState<keyof TrafikVerisi>(weekdays[0].value);

  function randomWrite() {
    const randIndex = Math.floor(Math.random() * rules.length);
    setRule(rules[randIndex]);
  }

  useEffect(() => {
    setInterval(randomWrite, 30000);
  }, []);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        setData(json as TrafikVerisi)
      })
      .catch((error) => {
        console.error('API hatası:', error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setPercentData(null)
      setCountData(null)
      const tempPercentData: IData[] = [];
      const tempCountData: IData[] = [];
      Object.entries(data[selectedDay]).forEach(([zamanAraligi, veriler]) => {
        const label = zamanAraligi.split('-')
        tempPercentData.push(
          {
            value: veriler.doluluk, label: zamanAraligi,
            labelComponent: () => (
              <View style={labelStyles.labelContainer}>
                <Text style={labelStyles.labelText}>{label[0]}</Text>
                <Text style={labelStyles.labelText}>{label[1]}</Text>
              </View>
            ),
          }
        )
        tempCountData.push(
          {
            value: veriler.toplam_gecen_arac, label: zamanAraligi,
            labelComponent: () => (
              <View style={labelStyles.labelContainer}>
                <Text style={labelStyles.labelText}>{label[0]}</Text>
                <Text style={labelStyles.labelText}>{label[1]}</Text>
              </View>
            ),
          }
        )
      });
      setPercentData(tempPercentData)
      setCountData(tempCountData)
    }
  }, [selectedDay])

  return (
    <ThemedView contentContainerStyle={styles.titleContainer}>
      <StatusBar style="auto" backgroundColor={backgroundColor} />
      <ThemedText type="title">X Yolu</ThemedText>
      <ThemedText type='subtitle' style={styles.subtitle}>{rule}</ThemedText>
      <ThemedView contentContainerStyle={styles.buttonContainer}>
        {weekdays.map((weekday, i) => {
          return (
            <Badge text={weekday.text} onPress={() => setSelectedDay(weekday.value)} />
          );
        })}
      </ThemedView>
      <PercentChart data={percentData!}/>
      <CountChart data={countData!}/>
    </ThemedView>
  );
}

const chartColor = "white";

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

const labelStyles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 12,
    textAlign: 'center',
    color: chartColor,
  }
});