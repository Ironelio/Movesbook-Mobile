import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type Props = {
  onPress?: () => void;
};

export function HeroVideoCard({ onPress }: Props) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.06,
          duration: 1400,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1400,
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [pulse]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Play Break All Limits video"
      onPress={onPress}
      style={styles.card}
    >
      <LinearGradient
        colors={['#1a0530', '#4a0e4a', '#0b1a40', '#1a1530']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Diagonal accent bands */}
      <View style={styles.bandWrap} pointerEvents="none">
        <LinearGradient
          colors={['#ff2d95', '#ffd400', '#3b82f6', '#ffffff']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.band}
        />
        <LinearGradient
          colors={['transparent', '#ff2d9588', '#22d3ee66', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bandSoft}
        />
      </View>

      {/* Athlete silhouettes (stylized placeholders) */}
      <View style={styles.athletes} pointerEvents="none">
        <View style={[styles.athlete, styles.athleteLeft]}>
          <Ionicons name="body" size={54} color="rgba(255,255,255,0.92)" />
        </View>
        <View style={[styles.athlete, styles.athleteMid]}>
          <Ionicons name="bicycle" size={58} color="rgba(255,255,255,0.95)" />
        </View>
        <View style={[styles.athlete, styles.athleteRight]}>
          <Ionicons name="water" size={52} color="rgba(255,255,255,0.9)" />
        </View>
      </View>

      <View style={styles.copy}>
        <Animated.Text style={[styles.headline, { transform: [{ scale: pulse }] }]}>
          BREAK ALL LIMITS
        </Animated.Text>
        <Text style={styles.caption}>Push Beyond Yesterday...</Text>
      </View>

      {/* Video chrome */}
      <View style={styles.controls}>
        <Ionicons name="play" size={16} color={colors.white} />
        <Text style={styles.time}>0:00</Text>
        <View style={styles.track}>
          <View style={styles.trackFill} />
        </View>
        <Ionicons name="volume-high" size={15} color={colors.white} />
        <Ionicons name="expand" size={15} color={colors.white} style={{ marginLeft: 8 }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    minHeight: 200,
    justifyContent: 'flex-end',
  },
  bandWrap: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
  },
  band: {
    height: 48,
    transform: [{ rotate: '-18deg' }, { scaleX: 1.4 }],
    opacity: 0.85,
  },
  bandSoft: {
    ...StyleSheet.absoluteFill,
    opacity: 0.55,
  },
  athletes: {
    ...StyleSheet.absoluteFill,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingBottom: 42,
  },
  athlete: {
    opacity: 0.88,
  },
  athleteLeft: {
    marginBottom: 8,
  },
  athleteMid: {
    marginBottom: 0,
  },
  athleteRight: {
    marginBottom: 10,
  },
  copy: {
    paddingHorizontal: 18,
    paddingBottom: 14,
    zIndex: 2,
  },
  headline: {
    color: colors.white,
    fontSize: 28,
    fontFamily: 'BebasNeue_400Regular',
    letterSpacing: 1.2,
    textShadowColor: 'rgba(0,0,0,0.55)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  caption: {
    marginTop: 2,
    color: colors.white,
    fontSize: 13,
    fontFamily: 'Outfit_400Regular',
    opacity: 0.92,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.55)',
    gap: 8,
  },
  time: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Outfit_400Regular',
    minWidth: 32,
  },
  track: {
    flex: 1,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.videoTrack,
    overflow: 'hidden',
  },
  trackFill: {
    width: '8%',
    height: '100%',
    backgroundColor: colors.videoFill,
  },
});
