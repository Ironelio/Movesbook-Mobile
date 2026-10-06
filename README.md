# Movesbook FitAI Coach (React Native)

Mobile client for Movesbook, built with **Expo + React Native**.

## Run

```bash
cd movesbook-mobile
npm start
```

Then press `a` (Android), `i` (iOS simulator), or scan the QR code with Expo Go.

## Structure

```
src/
  components/   # BrandLogo, header, video card, CTAs
  screens/      # HomeScreen (design landing)
  theme/        # colors
App.tsx         # fonts + SafeArea + HomeScreen
```

## Next steps

- Wire **Sign up free** / login to Next.js `/api/auth/*` with Bearer JWT in SecureStore
- Replace the promo card with a real video (`expo-av`)
- Add athlete/coach navigation stacks
