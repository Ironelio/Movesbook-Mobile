import React, { useEffect, useRef } from 'react';
import {
  Alert,
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { AppHeader } from '../components/AppHeader';
import { HeroVideoCard } from '../components/HeroVideoCard';
import { CtaButtons } from '../components/CtaButtons';
import { WhyChooseMeSection } from '../components/WhyChooseMeSection';

type Props = {
  onOpenFeatures: () => void;
};

export function HomeScreen({ onOpenFeatures }: Props) {
  const insets = useSafeAreaInsets();
  const intro = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(intro, {
      toValue: 1,
      duration: 650,
      useNativeDriver: true,
    }).start();
  }, [intro]);

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <AppHeader
        onMenuPress={() =>
          Alert.alert('Menu', 'Navigation drawer coming soon.')
        }
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <Animated.View
          style={{
            opacity: intro,
            transform: [
              {
                translateY: intro.interpolate({
                  inputRange: [0, 1],
                  outputRange: [18, 0],
                }),
              },
            ],
          }}
        >
          <View style={styles.heroCopy}>
            <Text style={styles.title}>
              <Text style={styles.titleWhite}>Movesbook </Text>
              <Text style={styles.titleOrange}>FitAI</Text>
              <Text style={styles.titleWhite}> Coach</Text>
            </Text>
            <Text style={styles.subtitle}>
              Comprehensive solutions for modern sport & fitness digital
              challenges
            </Text>
            <View style={styles.accent} />
          </View>

          <HeroVideoCard
            onPress={() =>
              Alert.alert('Video', 'Promo player will stream here.')
            }
          />

          <CtaButtons
            onFeatures={onOpenFeatures}
            onSignUp={() =>
              Alert.alert('Sign up', 'Connect to Movesbook /api/auth/register.')
            }
          />

          <WhyChooseMeSection />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    paddingBottom: 24,
  },
  heroCopy: {
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 8,
    paddingBottom: 22,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 36,
    fontFamily: 'Outfit_700Bold',
  },
  titleWhite: {
    color: colors.white,
  },
  titleOrange: {
    color: colors.orange,
  },
  subtitle: {
    marginTop: 14,
    textAlign: 'center',
    color: colors.whiteMuted,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Outfit_400Regular',
    maxWidth: 320,
  },
  accent: {
    marginTop: 16,
    width: 56,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.orange,
  },
});
