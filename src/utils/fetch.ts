const API_KEY = 'K8FMteBmR0cIVkufGKfbrbKKvSObzdAd0VjKUW2P'
const API_URL = 'https://api.nasa.gov/planetary/apod'

//Fetch data API
export default async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${typeof urlParams !== 'undefined' && urlParams?.length > 0 
        ? urlParams 
        : ''
      }`
    )
    const data = await response.json()
    return Promise.resolve(data)
  } catch(e) {
    return Promise.reject(e)
  }
}