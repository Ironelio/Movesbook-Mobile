import React from 'react';
import Svg, { Circle, Path, Ellipse } from 'react-native-svg';
import { colors } from '../theme/colors';

type Props = {
  size?: number;
  color?: string;
};

/** Stylized head / neural-logo mark matching the FitAI brand mark. */
export function BrandLogo({ size = 52, color = colors.white }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <Ellipse cx="32" cy="28" rx="18" ry="20" stroke={color} strokeWidth="2.2" />
      <Path
        d="M20 26c2.5-6 8-10 12-10s9.5 4 12 10"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M22 34c3 4 8 6 10 6s7-2 10-6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M32 18v20M24 24h16M26 40c2 6 4 10 6 12 2-2 4-6 6-12"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <Circle cx="32" cy="28" r="3" fill={color} />
      <Path
        d="M26 50c2.5 3 5.5 4.5 6 4.5s3.5-1.5 6-4.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
