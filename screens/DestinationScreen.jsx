import { Feather, FontAwesome,Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function DestinationScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    return (
        <View className='bg-white flex-1'>
            <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
            <StatusBar style={'light'} />
            <SafeAreaView className='flex-row justify-between items-center w-full absolute'>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='p-2 rounded-full ml-4 mt-8'
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                 <Feather name="chevron-left" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => toggleFavourite(!isFavourite)}
                    className='p-2 rounded-full mr-4 mt-8'
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                 <FontAwesome name="heart" size={20} color={isFavourite?"red":"white"} />
                </TouchableOpacity>
            </SafeAreaView>
            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className='px-5 flex flex-1 justify-between bg-white pt-8 -mt-14'>
                <ScrollView showsVerticalScrollIndicator={false} className='space-y-5'>
                    <View className='flex-row justify-between items-start'>
                        <Text className='font-pbold text-3xl flex-1 text-neutral-700'>{item?.title}</Text>
                        <Text className=' text-xl text-secondary-100 font-psemibold'>${item?.price}</Text>
                    </View>
                    <Text className='font-pregular tracking-wide mb-2 text-neutral-700'>{item?.longDescription}</Text>

                    <View className='flex-row justify-between mx-1'>
                        <View className='flex-row space-x-2 items-start'>
                            <Feather name="clock" size={20} color="skyblue" />
                            <View className='flex space-y-2'>
                                <Text className='font-pbold text-neutral-700'>{item.duration}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Duration</Text>
                            </View>
                        </View>
                        <View className='flex-row space-x-2 items-start'>
                            <Feather name="map-pin" size={20} color="#f87171" />
                            <View className='flex space-y-2'>
                                <Text className='font-pbold text-neutral-700'>{item.distance}</Text>
                                <Text className='text-neutral-600 tracking-wide'>Distance</Text>
                            </View>
                        </View>

                    <View className='flex-row space-x-2 items-start'>
                        <MaterialCommunityIcons name="weather-cloudy" size={20} color="orange" />
                        <View className='flex space-y-2'>
                            <Text className='font-pbold text-neutral-700'>{item.weather}</Text>
                            <Text className='text-neutral-600 tracking-wide'>Weather</Text>
                        </View>
                    </View>
                    </View>
                </ScrollView>
                <TouchableOpacity className='mb-10 mx-auto flex justify-center items-center rounded-full bg-secondary-100 px-5 py-3'>
                    <Text className='text-white font-pbold'>Book now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}