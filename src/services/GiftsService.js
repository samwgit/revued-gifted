import { giftApi, giphyApi } from "../services/AxiosService.js"
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js";
class GiftsService {

  async addGift(value) {
    const res= await giftApi.post('', value)
    console.log(res.data)
    AppState.gifts.push(new Gift(res.data))
    AppState.emit('gifts');
  }

  async showGift(id) {
    const gift = AppState.gifts.find((gif) => gif.id == id);
    if (!gift) {
      throw new Error('BAD ID');
    }

    gift.opened = true;
    console.log(gift)
    const res = await giftApi.put(`/${id}`, gift);
    console.log(res.data, gift);
    gift.url = res.data.url;
    AppState.emit('gifts');
  }

  async getGifts() {
    const res = await giftApi.get('')
    console.log(res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    console.log(AppState.gifts)
  }

  async getGiphy(searchInput) {
    const res = await giphyApi.get(`/search`, {
      params: {
        api_key: 'jokHd9wM4ZUTak9KBRfIWnGddliGPg9S',
        limit: 20,
        offset: 0,
        rating: 'pg-13',
        lang: 'en',
        q: searchInput
      }
    })
  }
}



export const giftsService = new GiftsService();