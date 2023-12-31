import React, { FC } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { PostImage, PostImageNavigationProps } from '../../types/index'
import { styleItemLastImage, styleNotice } from '../../style/styles'

const ItemLastImages: FC<PostImage> = ({ title, date, url, explanation }) => {
  const {navigate} = useNavigation<PostImageNavigationProps>()

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation})
  }

  return(
    <View style={styleItemLastImage.container}>
      <Text style={styleItemLastImage.title}>{title}</Text>
      <Text style={styleItemLastImage.date}>{date}</Text>
      <View style={styleNotice.buttonContainer}>
        <Button title='View' onPress={handleViewPress}/>
      </View>
    </View>
  )
}

export default ItemLastImages