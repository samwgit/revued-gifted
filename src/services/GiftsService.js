import { giftApi, giphyApi } from "../services/AxiosService.js"
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js";
import { Giphy } from "../models/Giphy.js";
class GiftsService {

  async addGift(value) {
    const res= await giftApi.post('', value)
    console.log(res.data)
    AppState.gifts = [new Gift(res.data), ...AppState.gifts]
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
  }

  async getGifts() {
    const res = await giftApi.get('')
    console.log(res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    console.log(AppState.gifts)
  }

  async getGiphy(searchInput) {
    AppState.giphys = []
    const res = await giphyApi.get(`/search`, {
      params: {
        api_key: 'jokHd9wM4ZUTak9KBRfIWnGddliGPg9S',
        limit: 20,
        offset: 0,
        rating: 'g',
        lang: 'en',
        q: searchInput
      }
    })
    console.log(res.data.data)
    let giphys =res.data.data.map(g => new Giphy(g)) 
    console.log(giphys)
    AppState.giphys = giphys
  }

  async fillForm(formData) {
    AppState.formValues = formData
  }
}



export const giftsService = new GiftsService();