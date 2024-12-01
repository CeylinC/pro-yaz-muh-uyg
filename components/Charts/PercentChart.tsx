import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { LinearGradient } from 'expo-linear-gradient';
import { chartColor, ChartProps, data, screenWidth, styles } from "./ChartStyle";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function PercentChart({ lightColor, darkColor }: ChartProps) {
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <View style={styles.ChartCard}>
            <Text style={{ ...styles.ChartTitle, color: textColor }}>Doluluk Oranı</Text>
            <LinearGradient
                colors={['#5581f1', '#1153FC']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.ChartContainer}
            >
                <BarChart
                    barWidth={Math.ceil(screenWidth / 15)}
                    noOfSections={5}
                    barBorderRadius={4}
                    frontColor={chartColor}
                    data={data}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    maxValue={100}
                    yAxisLabelSuffix="%"
                    yAxisTextStyle={{ color: chartColor }}
                    xAxisLabelTextStyle={{ color: chartColor }}
                    renderTooltip={(item: any) => {
                        return (
                            <View
                                style={{
                                    marginBottom: 0,
                                    marginLeft: -4,
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 6,
                                    paddingVertical: 4,
                                    borderRadius: 4,
                                    bottom: -50,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.29,
                                    shadowRadius: 4.65,
                                    elevation: 7,
                                }}>
                                <Text>{item.value}%</Text>
                            </View>
                        );
                    }}
                />
            </LinearGradient >
        </View>
    );
}
