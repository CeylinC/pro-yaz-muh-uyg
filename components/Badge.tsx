import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


interface BadgeProp {
    onPress: () => void,
    text: string
}

export default function Badge({ text, onPress }: BadgeProp) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={['#5581f1', '#1153FC']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.button}
            >
          <Text style={styles.text}>{text}</Text>
          </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'lineer',
      width: 44,
      paddingVertical: 4,
      borderRadius: 4
    },
    text: {
        color: 'white',
        fontWeight: '600'
    }
  });