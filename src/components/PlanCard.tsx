import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import type { Plan } from '../data/plans';

type Props = {
  plan: Plan;
  width: number;
};

export function PlanCard({ plan, width }: Props) {
  return (
    <View style={[styles.card, { width }]}>
      <View style={styles.header}>
        <View style={styles.nameRow}>
          <View style={styles.dot} />
          <Text style={styles.name}>{plan.name}</Text>
          {plan.badge ? (
            <View style={styles.badgeRow}>
              {plan.badgeDenied ? (
                <Ionicons name="close" size={12} color={colors.red} />
              ) : null}
              <Text style={styles.badgeText}>{plan.badge}</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.price}>{plan.price}</Text>
      </View>

      <Text style={styles.subtitle}>{plan.subtitle}</Text>
      <View style={styles.divider} />

      <View style={styles.features}>
        {plan.features.map((f) => (
          <View key={f.text} style={styles.featureRow}>
            <Ionicons
              name={f.included ? 'checkmark' : 'close'}
              size={14}
              color={f.included ? colors.white : colors.red}
              style={styles.featureIcon}
            />
            <Text
              style={[
                styles.featureText,
                f.highlight && styles.featureHighlight,
              ]}
            >
              {f.text}
            </Text>
          </View>
        ))}
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => Alert.alert(plan.name, `${plan.cta} selected.`)}
        style={({ pressed }) => [styles.cta, pressed && styles.pressed]}
      >
        <Text style={styles.ctaText}>{plan.cta}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgCard,
    borderColor: colors.borderOrange,
    borderWidth: 1.2,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 6,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
    gap: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.orange,
  },
  name: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Outfit_700Bold',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  badgeText: {
    color: colors.whiteDim,
    fontSize: 10,
    fontFamily: 'Outfit_400Regular',
  },
  price: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Outfit_700Bold',
  },
  subtitle: {
    marginTop: 6,
    color: colors.goldSoft,
    fontSize: 11,
    fontFamily: 'Outfit_400Regular',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.borderSoft,
    marginVertical: 10,
  },
  features: {
    gap: 6,
    flexGrow: 1,
    minHeight: 148,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  featureIcon: {
    marginTop: 1,
  },
  featureText: {
    flex: 1,
    color: colors.white,
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Outfit_400Regular',
  },
  featureHighlight: {
    color: colors.goldSoft,
    fontFamily: 'Outfit_600SemiBold',
  },
  cta: {
    marginTop: 12,
    backgroundColor: colors.orange,
    borderRadius: 22,
    paddingVertical: 10,
    alignItems: 'center',
  },
  ctaText: {
    color: colors.black,
    fontSize: 13,
    fontFamily: 'Outfit_700Bold',
  },
  pressed: {
    opacity: 0.88,
  },
});
