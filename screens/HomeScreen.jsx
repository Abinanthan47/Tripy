import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Categories from './Categories';
import DestinationList from './DestinationList';
import SortCategories from './SortCategories';

const ios = Platform.OS == 'ios';
const topMargin = ios ? 'mt-3' : 'mt-10';


const HomeScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false} className={'space-y-6' + topMargin}>
                <View className='mx-5 flex-row justify-between items-center mt-10  mb-6'>

                    <Text style={{ fontSize: wp(7) }} className=' font-pmedium  text-neutral-700'>Let's Discover</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/avatar.jpg')} style={{ height: wp(12), width: wp(12) }} className='rounded-full' />
                    </TouchableOpacity>
                </View>

                <View className='mx-5 mb-4'>
                    <View className='flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6'>
                        <Feather name="search" size={20} color="gray" />
                        <TextInput
                            placeholder='Search destination'
                            placeholderTextColor={'gray'}
                            className='flex-1 text-base   pl-1 tracking-wider font-plight'
                        />
                    </View>
                </View>

                <View>
                    <Categories />
                </View>

                <View className='mb-4'>
                    <SortCategories />
                </View>

                <View className='mb-4'>
                    <DestinationList />
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen