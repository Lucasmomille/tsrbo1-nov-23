import { url } from "./constants";
import { Config } from "./interfaces/Config";

class API {
  async getRandomConfig(): Promise<Config> {
    try {
      const response = await fetch(url);
      const json: Config = await response.json();
      return json;
    } catch (err) {
      console.log("err: ", err);
      throw new Error("erreur technique");
    }
  }
}

export const api = new API();
