import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import PlayScreen from './src/components/PlayScreen';

export default function App() {
  useDeviceContext(tw)
  return (
    <PlayScreen />
  );
}
