import React from 'react'
import { View, Text, Image } from 'react-native'
import { styleHeader } from '../../style/styles'

const Header = () => {
  return (
    <View style={styleHeader.container}>
      <View style={styleHeader.leftContainer}>
        <Text style={styleHeader.title}>Explore</Text>
      </View>
      <View style={styleHeader.rightContainer}>
        <Image source={require('../../assets/nasa-logo.png')} style={styleHeader.image}/>
      </View>
    </View>
  )
}

export default Header
