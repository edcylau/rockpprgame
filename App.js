import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import PlayScreen from './src/components/PlayScreen';

export default function App() {
  const [play, setPlay ] = useState(false)

  useDeviceContext(tw)
  return (
    play ? <PlayScreen /> :
    <View style={tw`flex flex-grow-1 bg-white items-center justify-center px-42`}>
      <Text style={tw`text-red-500 md:text-green-500 text-lg`}>Let's play a game</Text>
      <View style={tw`w-full`}>
          <Button title="Play" onPress={()=>setPlay(true)}/>
      </View>
    </View>
  );
}
