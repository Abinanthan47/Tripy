import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function WelcomeScreen({ navigation }) {



    return (

        <View className=' flex-1 flex justify-end  '>
            <StatusBar style="light" />
            <Image source={require('../assets/ws1.jpeg')} className='  w-full h-full absolute  ' />

            <View className=' p-4 pb-10 '>
                <LinearGradient
                    colors={['rgba(0,0,0,0.4)', 'transparent']}
                    style={{ width: wp(100), height: hp(40) }}
                    end={{ x: 0.5, y: 0 }}
                    start={{ x: 0.5, y: 1 }}
                    className='absolute  rounded-xl  w-full h-full '

                />
                <View >

                    <Text className='text-white mb-3 mt-3 text-center  text-5xl font-pbold' style={{ fontSize: wp(10) }}>Explore Your Favorite Journey</Text>
                    <Text className='font-pregular mb-5   text-md text-white  text-center ' style={{ fontSize: wp(4) }}>Experience the world's best adventures around the world with us.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} className='border border-white  mx-auto p-3 mb-2  px-12 rounded-full z-30'>
                        <Text className='text-white font-pmedium ' style={{ fontSize: wp(5.5) }}>Let's Go <MaterialCommunityIcons name="airplane" size={20} color="white" /></Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );
}
