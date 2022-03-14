import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import Rock from './icon/rock.png'
import Paper from './icon/paper.png'
import Scissors from './icon/scissors.png'


const PlayScreen = () => {
    const emojis = [Rock, Paper, Scissors]
    let randomNum = Math.round(Math.random()*3)
    console.log(randomNum)
    const [count, setCount] = useState(3);

    useEffect(()=>{
        if (count < 1 ) return
        const timer = setTimeout (() => {
            setCount(prv => prv - 1);
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    },[count])

    console.log(count)

  useDeviceContext(tw)
  return (
    <View style={tw`flex flex-grow-1 bg-white items-center justify-center px-42`}>
        {
            count < 1 ? 
            <>
                <Image source={emojis[randomNum]} style={tw`w-32 h-32 my-8`} />
                <View style={tw`w-full`}>
                    <Button title="Play Again" onPress={()=>setCount(3)}/>
                </View>
            </>
            :
            <Text style={tw`text-red-500 md:text-green-500 text-lg`}>{count}</Text>
        }
      
      <StatusBar style="auto" />
    </View>
  );
}

export default PlayScreen;
