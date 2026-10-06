import React, { useState } from 'react';
import {
  Alert,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { PlanCard } from '../components/PlanCard';
import {
  CONFIDENCE_TEXT,
  FAQ_ITEMS,
  OFFER_TIERS,
  PLANS,
  TRAIN_FEATURES,
  TRAIN_STATS,
} from '../data/plans';

type Props = {
  onBack: () => void;
};

export function FeaturesScreen({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const [gridWidth, setGridWidth] = useState(0);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const onGridLayout = (e: LayoutChangeEvent) => {
    setGridWidth(e.nativeEvent.layout.width);
  };

  const cardWidth = gridWidth > 0 ? (gridWidth - 12) / 2 : 0;

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.topBar}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={10}
          onPress={onBack}
          style={styles.backBtn}
        >
          <Ionicons name="chevron-back" size={22} color={colors.white} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>
        <Text style={styles.topTitle}>Feature of the version</Text>
        <View style={{ width: 64 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: insets.bottom + 28 },
        ]}
      >
        {/* Plans */}
        <Text style={styles.sectionTitle}>Choose the perfect plan for you</Text>
        <View style={styles.planGrid} onLayout={onGridLayout}>
          {cardWidth > 0
            ? PLANS.map((plan) => (
                <PlanCard key={plan.id} plan={plan} width={cardWidth} />
              ))
            : null}
        </View>

        {/* TRAIN PRO */}
        <View style={styles.trainBlock}>
          <Text style={styles.trainHeadline}>
            <Text style={styles.gold}>TRAIN PRO: </Text>
            <Text style={styles.white}>Unleash Your Potential.</Text>
          </Text>

          <View style={styles.trainCtas}>
            <Pressable
              style={({ pressed }) => [
                styles.trialBtn,
                pressed && styles.pressed,
              ]}
              onPress={() => Alert.alert('Trial', 'Start Free Trial')}
            >
              <Text style={styles.trialText}>START FREE TRIAL</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.downloadBtn,
                pressed && styles.pressed,
              ]}
              onPress={() => Alert.alert('Download', 'App store link soon.')}
            >
              <Text style={styles.downloadText}>DOWNLOAD APP</Text>
            </Pressable>
          </View>

          <View style={styles.statsRow}>
            {TRAIN_STATS.map((s) => (
              <View key={s.label} style={styles.statItem}>
                <Ionicons name={s.icon} size={18} color={colors.gold} />
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.featureGrid}>
            {TRAIN_FEATURES.map((f) => (
              <View key={f.title} style={styles.featureCard}>
                <View style={styles.featureIconBox}>
                  <Ionicons name={f.icon} size={16} color={colors.gold} />
                </View>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.description}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.faqTitle}>FAQ</Text>
          <View style={styles.faqGrid}>
            {FAQ_ITEMS.map((item) => {
              const open = openFaq === item.q;
              return (
                <Pressable
                  key={item.q}
                  onPress={() => setOpenFaq(open ? null : item.q)}
                  style={[styles.faqItem, open && styles.faqItemOpen]}
                >
                  <View style={styles.faqRow}>
                    <Text style={styles.faqQ}>{item.q}</Text>
                    <Ionicons
                      name={open ? 'chevron-up' : 'chevron-down'}
                      size={16}
                      color={colors.gold}
                    />
                  </View>
                  {open ? <Text style={styles.faqA}>{item.a}</Text> : null}
                </Pressable>
              );
            })}
          </View>

          <View style={styles.guarantee}>
            <View>
              <Text style={styles.guaranteeBest}>Best</Text>
              <Text style={styles.guaranteeLine}>
                <Text style={styles.gold}>SATISFACTION </Text>
                <Text style={styles.white}>GUARANTEE</Text>
              </Text>
            </View>
            <View style={styles.secure}>
              <Ionicons name="shield-checkmark" size={22} color={colors.gold} />
              <Text style={styles.secureText}>Pay Safe & Secure</Text>
            </View>
          </View>
        </View>

        {/* FitAI offers */}
        <LinearGradient
          colors={['#14100c', '#0A0A0A', '#1a1008']}
          style={styles.offerBlock}
        >
          <View style={styles.offerHeader}>
            <View style={{ flex: 1 }}>
              <Text style={styles.offerBrand}>
                <Text style={styles.white}>Movesbook </Text>
                <Text style={styles.orange}>FitAI</Text>
                <Text style={styles.white}> Coach</Text>
              </Text>
              <Text style={styles.offerSub}>Personalized AI Workout Plans</Text>
            </View>
            <Pressable
              style={styles.claimBtn}
              onPress={() => Alert.alert('Discount', 'Claim discount applied.')}
            >
              <Text style={styles.claimText}>Claim discount</Text>
            </Pressable>
          </View>

          <View style={styles.offerBody}>
            <View style={styles.heroArt}>
              <LinearGradient
                colors={['#2a1808', '#3d2210', '#1a120c']}
                style={StyleSheet.absoluteFill}
              />
              <Ionicons name="fitness" size={42} color={colors.orange} />
              <Text style={styles.heroArtLabel}>Athletes</Text>
            </View>

            <View style={styles.tiers}>
              {OFFER_TIERS.map((tier) => (
                <View
                  key={tier.id}
                  style={[
                    styles.tierCard,
                    tier.popular && styles.tierPopular,
                  ]}
                >
                  {tier.popular ? (
                    <Text style={styles.mostPopular}>MOST POPULAR</Text>
                  ) : null}
                  <View style={styles.tierTop}>
                    <Text style={styles.tierLabel}>{tier.label}</Text>
                    <View style={styles.discountPill}>
                      <Text style={styles.discountText}>{tier.discount}</Text>
                    </View>
                  </View>
                  <Text style={styles.tierOriginal}>{tier.original}</Text>
                  <Text style={styles.tierPrice}>{tier.price}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.offerFooter}>
            <View style={styles.offerFeatures}>
              {[
                ['clipboard-outline', 'Customized plans'],
                ['time-outline', '24/7 AI trainer'],
                ['stats-chart-outline', 'Progress tracking'],
                ['checkmark-circle-outline', 'Unlimited workouts'],
              ].map(([icon, label]) => (
                <View key={label} style={styles.offerFeat}>
                  <Ionicons
                    name={icon as keyof typeof Ionicons.glyphMap}
                    size={16}
                    color={colors.orange}
                  />
                  <Text style={styles.offerFeatText}>{label}</Text>
                </View>
              ))}
            </View>

            <View style={styles.offerAction}>
              <Pressable
                style={({ pressed }) => [
                  styles.startTrial,
                  pressed && styles.pressed,
                ]}
                onPress={() => Alert.alert('Trial', 'Start Free Trial')}
              >
                <Text style={styles.startTrialText}>Start Free Trial</Text>
              </Pressable>
              <View style={styles.trustRow}>
                <Ionicons name="cart-outline" size={14} color={colors.whiteDim} />
                <Text style={styles.trustText}>No commitment. Cancel anytime!</Text>
              </View>
              <View style={styles.trustRow}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={14}
                  color={colors.whiteDim}
                />
                <Text style={styles.trustText}>Top quality workouts</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Confidence footer */}
        <View style={styles.confidence}>
          <Text style={styles.confidenceText}>{CONFIDENCE_TEXT}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderSoft,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 64,
  },
  backText: {
    color: colors.white,
    fontFamily: 'Outfit_500Medium',
    fontSize: 14,
  },
  topTitle: {
    color: colors.white,
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 14,
  },
  scroll: {
    paddingHorizontal: 14,
    paddingTop: 18,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Outfit_700Bold',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  planGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  trainBlock: {
    marginTop: 28,
  },
  trainHeadline: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'Outfit_700Bold',
    marginBottom: 14,
  },
  gold: { color: colors.gold },
  orange: { color: colors.orange },
  white: { color: colors.white },
  trainCtas: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  trialBtn: {
    flex: 1,
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  trialText: {
    color: colors.black,
    fontFamily: 'Outfit_700Bold',
    fontSize: 12,
  },
  downloadBtn: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: colors.gold,
    paddingVertical: 12,
    alignItems: 'center',
  },
  downloadText: {
    color: colors.white,
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  statItem: {
    width: '47%',
    alignItems: 'center',
    paddingVertical: 8,
  },
  statValue: {
    marginTop: 4,
    color: colors.white,
    fontFamily: 'Outfit_700Bold',
    fontSize: 16,
  },
  statLabel: {
    marginTop: 2,
    color: colors.whiteDim,
    fontFamily: 'Outfit_400Regular',
    fontSize: 9,
    textAlign: 'center',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  featureCard: {
    width: '48%',
    backgroundColor: colors.bgElevated,
    borderRadius: 10,
    padding: 12,
    minHeight: 110,
  },
  featureIconBox: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: 'rgba(232,163,23,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  featureTitle: {
    color: colors.gold,
    fontFamily: 'Outfit_700Bold',
    fontSize: 11,
    marginBottom: 4,
  },
  featureDesc: {
    color: colors.whiteMuted,
    fontFamily: 'Outfit_400Regular',
    fontSize: 11,
    lineHeight: 15,
  },
  faqTitle: {
    marginTop: 22,
    marginBottom: 10,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Outfit_700Bold',
    fontSize: 20,
  },
  faqGrid: {
    gap: 8,
  },
  faqItem: {
    borderWidth: 1,
    borderColor: colors.borderOrange,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: colors.bgCard,
  },
  faqItemOpen: {
    borderColor: colors.gold,
  },
  faqRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  faqQ: {
    flex: 1,
    color: colors.white,
    fontFamily: 'Outfit_500Medium',
    fontSize: 13,
  },
  faqA: {
    marginTop: 8,
    color: colors.whiteMuted,
    fontFamily: 'Outfit_400Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  guarantee: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  guaranteeBest: {
    color: colors.gold,
    fontFamily: 'Outfit_700Bold',
    fontSize: 34,
    lineHeight: 36,
  },
  guaranteeLine: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 13,
  },
  secure: {
    alignItems: 'center',
    gap: 4,
  },
  secureText: {
    color: colors.gold,
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 11,
  },
  offerBlock: {
    marginTop: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    padding: 14,
    overflow: 'hidden',
  },
  offerHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 14,
  },
  offerBrand: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 18,
  },
  offerSub: {
    marginTop: 4,
    color: colors.whiteDim,
    fontFamily: 'Outfit_400Regular',
    fontSize: 12,
  },
  claimBtn: {
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  claimText: {
    color: colors.orange,
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 11,
  },
  offerBody: {
    flexDirection: 'row',
    gap: 10,
  },
  heroArt: {
    width: 110,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 180,
  },
  heroArtLabel: {
    marginTop: 8,
    color: colors.whiteMuted,
    fontFamily: 'Outfit_500Medium',
    fontSize: 12,
  },
  tiers: {
    flex: 1,
    gap: 8,
  },
  tierCard: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    padding: 10,
  },
  tierPopular: {
    borderColor: colors.orange,
    borderWidth: 2,
  },
  mostPopular: {
    color: colors.orange,
    fontFamily: 'Outfit_700Bold',
    fontSize: 10,
    marginBottom: 4,
  },
  tierTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tierLabel: {
    color: colors.white,
    fontFamily: 'Outfit_600SemiBold',
    fontSize: 13,
  },
  discountPill: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  discountText: {
    color: colors.white,
    fontFamily: 'Outfit_700Bold',
    fontSize: 10,
  },
  tierOriginal: {
    marginTop: 4,
    color: colors.whiteDim,
    textDecorationLine: 'line-through',
    fontFamily: 'Outfit_400Regular',
    fontSize: 11,
  },
  tierPrice: {
    marginTop: 2,
    color: colors.white,
    fontFamily: 'Outfit_700Bold',
    fontSize: 20,
  },
  offerFooter: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
  },
  offerFeatures: {
    flex: 1,
    gap: 8,
  },
  offerFeat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  offerFeatText: {
    color: colors.white,
    fontFamily: 'Outfit_400Regular',
    fontSize: 12,
  },
  offerAction: {
    flex: 1,
    justifyContent: 'center',
  },
  startTrial: {
    backgroundColor: colors.orange,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  startTrialText: {
    color: colors.black,
    fontFamily: 'Outfit_700Bold',
    fontSize: 14,
  },
  trustRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  trustText: {
    color: colors.whiteDim,
    fontFamily: 'Outfit_400Regular',
    fontSize: 11,
    flex: 1,
  },
  confidence: {
    marginTop: 28,
    paddingHorizontal: 8,
  },
  confidenceText: {
    color: colors.whiteMuted,
    fontFamily: 'Outfit_400Regular',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.88,
  },
});
