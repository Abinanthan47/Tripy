import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { sortCategoryData } from '../constants';

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState('Popular');

  return (
    <View className='flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2 mt-4'>
      {
        sortCategoryData.map((sort, index) => {
          let isActive = sort == activeSort;
          let activeButtonClass = isActive ? 'bg-secondary-200  shadow-xl  ' : '  ';
          return (
            <TouchableOpacity onPress={() => setActiveSort(sort)} key={index} className={`p-2 px-3 rounded-full flex ${activeButtonClass}`}>
              <Text className='font-pregular  font-medium' style={{ fontSize: wp(4) }}>{sort}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}