import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Polyline } from 'react-native-svg';
import { colors } from '../theme/colors';

export function WhyChooseMeSection() {
  const fade = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 700,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(rise, {
        toValue: 0,
        duration: 700,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fade, rise]);

  return (
    <Animated.View
      style={[
        styles.section,
        { opacity: fade, transform: [{ translateY: rise }] },
      ]}
    >
      <Text style={styles.title}>
        <Text style={styles.titleWhite}>Why </Text>
        <Text style={styles.titleOrange}>Choose Me</Text>
      </Text>
      <View style={styles.accent} />

      <View style={styles.iconBox}>
        <Svg width={36} height={28} viewBox="0 0 36 28" fill="none">
          <Polyline
            points="2,22 10,14 16,18 26,6"
            stroke={colors.orange}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <Path
            d="M24 6h6v6"
            stroke={colors.orange}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 40,
    alignItems: 'center',
    paddingBottom: 48,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Outfit_700Bold',
    letterSpacing: 0.2,
  },
  titleWhite: {
    color: colors.white,
  },
  titleOrange: {
    color: colors.orange,
  },
  accent: {
    marginTop: 12,
    width: 56,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.orange,
  },
  iconBox: {
    marginTop: 22,
    width: 56,
    height: 44,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: colors.bgElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
