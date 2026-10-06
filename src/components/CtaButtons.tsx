import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type Props = {
  onFeatures?: () => void;
  onSignUp?: () => void;
};

export function CtaButtons({ onFeatures, onSignUp }: Props) {
  return (
    <View style={styles.wrap}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Feature of the version"
        onPress={onFeatures}
        style={({ pressed }) => [styles.primary, pressed && styles.pressed]}
      >
        <Text style={styles.primaryText}>Feature of the version</Text>
        <Text style={styles.primaryArrow}>→</Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        onPress={onSignUp}
        style={({ pressed }) => [styles.secondary, pressed && styles.pressed]}
      >
        <Ionicons name="briefcase-outline" size={16} color={colors.white} />
        <Text style={styles.secondaryText}>Sign up free</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 22,
    paddingHorizontal: 20,
    gap: 12,
  },
  primary: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Outfit_600SemiBold',
  },
  primaryArrow: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Outfit_600SemiBold',
    marginTop: -1,
  },
  secondary: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.white,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'transparent',
  },
  secondaryText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Outfit_500Medium',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.985 }],
  },
});
