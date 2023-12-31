import React, {FC} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styleLastImages } from '../../style/styles'
import { PostImage } from '../../types/index'
import ItemLastImages from './ItemLastImages'

const LastImages: FC<{postImages?: PostImage[]}> = ({
  postImages,
}) => {
  return(
    <View style={styleLastImages.container}>
      <Text style={styleLastImages.title}>Last 5 Days</Text>
      <ScrollView style={styleLastImages.content}>
        <>
          {postImages?.map(postImage=>{
            <ItemLastImages key={`post-image-${postImage.title}`} {...postImage}/>
          })}
        </>
      </ScrollView>
    </View>
  )
}

export default LastImages