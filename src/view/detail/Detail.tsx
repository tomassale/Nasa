import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { styleDetail } from '../../style/styles'
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Header from '../../component/header/Header'
import { RootStackParams } from '../../types'

const Detail = () => {
  const { params: { title, url, explanation, date } } =
    useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>()


  return(
    <View style={styleDetail.container}>
      <Header/>
      <View style={styleDetail.content}>
        <Image source={{uri: url}} style={styleDetail.image}/>
        <Text style={styleDetail.title}>{title}</Text>
        <Text style={styleDetail.date}>{date}</Text>
        <ScrollView style={styleDetail.explanationContainer}>
          <Text style={styleDetail.explanation}>{explanation}</Text>
        </ScrollView>
      </View> 
    </View>
  )
}

export default Detail