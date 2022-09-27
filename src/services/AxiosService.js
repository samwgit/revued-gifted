import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const giftApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 3000
})

// @ts-ignore
export const giphyApi = Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 3500,
});