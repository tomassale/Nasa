import React, { FC } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { PostImage, PostImageNavigationProps } from '../../types/index'
import { styleNotice } from '../../style/styles'

const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {
  const { navigate } = useNavigation<PostImageNavigationProps>()
  
  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation})
  }

  return(
    <View style={styleNotice.container}>
      <Image source={{uri: url}} style={styleNotice.image}/>
      <Text style={styleNotice.title}>{title}</Text>
      <Text style={styleNotice.date}>{date}</Text>
      <View style={styleNotice.buttonContainer}>
        <Button title='View' onPress={handleViewPress}/>
      </View>
    </View>
  )
}

export default TodaysImage