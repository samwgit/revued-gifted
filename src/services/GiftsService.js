import { giftApi, giphyApi } from "../services/AxiosService.js"
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js";
class GiftsService {
  async showGift() {
    const gift = AppState.gifts.find((gif) => gif.id == id);
    if (!gift) {
      throw new Error('BAD ID');
    }

    gift.opened = true;
    const res = await sandBoxServer.put(`/api/gifts/${id}`, gift);
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