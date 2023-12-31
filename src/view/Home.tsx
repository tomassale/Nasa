import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { format, sub } from 'date-fns'

import Header from '../component/header/Header'
import TodaysImage from '../component/notice/TodayImage'
import LastImages from '../component/lastImages/LastImages'

import { PostImage } from '../types/index'
import { styleHome } from '../style/styles'
import fetch from '../utils/fetch'

const Home = () => {
  const [ todaysImage, setTodaysImage] = useState<PostImage>({})
  const [ lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([])
  useEffect(() => {
    const loadTodayImage = async () => {
      try{
        const todayImageResponse = await fetch()
        setTodaysImage(todayImageResponse)
      } catch (e) {
        console.error(e)
        setTodaysImage({})
      }
    }

    const loadLast5DaysImages = async () => {
      try{
        const date = new Date()
        const todaysDate = format(date, 'yyyy-MM-dd')
        const fiveDaysAgoDate = format(sub(date, {days: 5}) ,'yyyy-MM-dd')

        const lastFiveDaysImagesResponse = await fetch(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
          )
          setLastFiveDaysImages(lastFiveDaysImagesResponse)
      } catch(e) {
        console.error(e)
      }
    }
    loadTodayImage().catch(null)
    loadLast5DaysImages().catch(null)
  }, [ ])

  return(
    <View style={styleHome.container}>
      <Header/>
      <TodaysImage {...todaysImage}/>
      <LastImages postImages={lastFiveDaysImages}/>
    </View>
  )
}

export default Home