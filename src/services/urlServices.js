import axios from 'axios'
const API_URL = 'https://supplyn.up.railway.app'

export const createSortUrlApi = (url , username , email) => {
  return axios.post(`${API_URL}/url`, {
    url, username ,emailM : email
  })
}
export const getAnalyticApi =  (urlId ) => {
  return axios.get(`${API_URL}/url/analytics/${urlId}`)
}