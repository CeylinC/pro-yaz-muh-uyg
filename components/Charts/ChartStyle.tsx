import { IData } from "@/models/IData";
import { StyleSheet, View, Text, Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;

export const chartColor = "white";

export const styles = StyleSheet.create({
    ChartCard: {
        marginBottom: 16,
    },
    ChartContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    ChartTitle: {
        fontWeight: 600,
        paddingLeft: 12,
        marginBottom: 8,
        fontSize: 16,
    }
});

export type ChartProps = {
    lightColor?: string;
    darkColor?: string;
    data: IData[];
};

// export const data = [
//     {
//         value: 5, label: '00:00-06:00',
//         labelComponent: () => (
//             <View style={labelStyles.labelContainer}>
//                 <Text style={labelStyles.labelText}>00:00</Text>
//                 <Text style={labelStyles.labelText}>06:00</Text>
//             </View>
//         ),
//     },
//     {
//         value: 45, label: '06:00-10:00',
//         labelComponent: () => (
//             <View style={labelStyles.labelContainer}>
//                 <Text style={labelStyles.labelText}>06:00</Text>
//                 <Text style={labelStyles.labelText}>10:00</Text>
//             </View>
//         )
//     },
//     {
//         value: 20, label: '10:00-13:00', labelComponent: () => (
//             <View style={labelStyles.labelContainer}>
//                 <Text style={labelStyles.labelText}>10:00</Text>
//                 <Text style={labelStyles.labelText}>13:00</Text>
//             </View>
//         )
//     },
//     {
//         value: 15, label: '13:00-16:00', labelComponent: () => (
//             <View style={labelStyles.labelContainer}>
//                 <Text style={labelStyles.labelText}>13:00</Text>
//                 <Text style={labelStyles.labelText}>16:00</Text>
//             </View>
//         )
//     },
//     {
//         value: 55, label: '16:00-20:00', labelComponent: () => (
//             <View style={labelStyles.labelContainer}>
//                 <Text style={labelStyles.labelText}>16:00</Text>
//                 <Text style={labelStyles.labelText}>20:00</Text>
//             </View>
//         )
//     },
//     {
//         value: 22, label: '20:00-24:00', labelComponent: () => (
//             <View style={labelStyles.labelContainer}>
//                 <Text style={labelStyles.labelText}>20:00</Text>
//                 <Text style={labelStyles.labelText}>00:00</Text>
//             </View>
//         )
//     },
// ];