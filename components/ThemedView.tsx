import { ScrollView, type ScrollViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  contentContainerStyle,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <ScrollView
      style={[{ backgroundColor }, style]}
      contentContainerStyle={contentContainerStyle}
      {...otherProps}
    />
  );
}