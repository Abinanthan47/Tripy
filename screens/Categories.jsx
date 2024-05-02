import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { categoriesData } from '../constants';


const Categories = () => {
    return (
        <View className='space-y-5 '>
            <View className='mx-5 flex-row justify-between items-center'>
                <Text style={{ fontSize: wp(4) }} className='font-pregular'>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: wp(4) }} className='text-secondary-100 font-pregular'>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className='space-x-4'
                showsHorizontalScrollIndicator={false}
            >
                {
                    categoriesData.map((cat, index) => {
                        return (
                            <TouchableOpacity key={index} className='flex  gap-5 items-center space-y-2'>
                                <Image source={cat.image} style={{ width: wp(5), height: wp(5) }} />
                                <Text className='text-neutral-700 font-pregular'>{cat.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Categories