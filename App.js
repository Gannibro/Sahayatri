import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './SplashScreenView';
import HomeScreen from './HomeScreen';
import VerificationScreen from './Verification';
import Maps from './Maps';  // Add this line to import the Maps component
import { useEffect, useState } from 'react';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isShowSplash ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
