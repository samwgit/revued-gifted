import { giftApi } from "../services/AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await giftApi.get('')
    console.log(res.data)
  }
}

export const giftsService = new GiftsService();