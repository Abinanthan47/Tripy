import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, } from 'react';
import { Image, TouchableOpacity, View,Text,fontSize} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { destinationData } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DestinationList() {
const navigation = useNavigation();
  return (
    <View className='mx-4 flex-row justify-between flex-wrap'>
      {
        destinationData.map((item, index) => {
          return (
            <DestinationCard navigation={navigation} item={item} key={index} />
          )
        })
      }
    </View>
  )
}

const DestinationCard = ({ item,navigation }) => {
  const [isFavourite, toggleFavourite]= useState(false);
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('Destination',{...item})}
      style={{ width: wp(44), height: wp(65) }}
      className='flex justify-end relative p-4 py-6 space-y-2 mb-5'
    >
      <Image
        source={item.image}
        style={{ width: wp(44), height: wp(65), borderRadius: 20 }}
        className='absolute'
      />
      {/* <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{ width: wp(44), height: hp(15),borderBottomLeftRadius:35,borderBottomRightRadius:35}}
        end={{ x: 0.5, y: 0 }}
        start={{ x: 0.5, y: 1 }}
        className='absolute bottom-0'

      /> */}

      <TouchableOpacity  onPress={()=>toggleFavourite(!isFavourite)} className='absolute top-1 right-3 p-2 rounded-full bg-white/20'>
      <Ionicons name="heart" size={20} color={isFavourite?"red":"white"} />
      </TouchableOpacity>

      <Text style={{fontSize:wp(4) }} className='text-white font-semibold  backdrop-blur bg-black/10 w-full '>{item.title}</Text> 
    </TouchableOpacity>
  )
}