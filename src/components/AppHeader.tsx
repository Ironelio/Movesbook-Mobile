import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { BrandLogo } from './BrandLogo';

type Props = {
  onMenuPress?: () => void;
};

export function AppHeader({ onMenuPress }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.side} />
      <BrandLogo size={48} />
      <View style={styles.side}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open menu"
          hitSlop={12}
          onPress={onMenuPress}
          style={styles.menuBtn}
        >
          <View style={styles.bar} />
          <View style={[styles.bar, styles.barMid]} />
          <View style={styles.bar} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  side: {
    width: 44,
    alignItems: 'flex-end',
  },
  menuBtn: {
    width: 28,
    height: 22,
    justifyContent: 'space-between',
  },
  bar: {
    height: 2.5,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 2,
  },
  barMid: {
    width: '85%',
    alignSelf: 'flex-end',
  },
});
